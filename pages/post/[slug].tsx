import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../typings';

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props) => {
  return (
    <main>
      <Header />
    </main>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const query = `
    *[_type == "post"] {
      _id,
      slug {
        current
      }
    }
  `;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug,
    body
  }
  `;

  const post = await sanityClient.fetch(query, { slug: params?.slug });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
