import Image from 'next/image';
import { urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  return (
    <div>
      <Image
        src={urlFor(post.mainImage).url()!}
        alt={post.title}
        layout="responsive"
      />
      <div className="flex justify-between items-center p-5 bg-white gap-2">
        <div>
          <p>{post.title}</p>
          <p>
            {post.description} by {post.author.name}
          </p>
        </div>

        <Image
          className="border rounded-full h-6 w-6"
          src={urlFor(post.author.image).url()}
          alt={post.author.name}
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default Post;
