/* eslint-disable @next/next/no-img-element */
import { urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  return (
    <div>
      <img src={urlFor(post.mainImage).url()!} alt={post.title} />
      <div className="flex justify-between items-center p-5 bg-white gap-2">
        <div>
          <p>{post.title}</p>
          <p>
            {post.description} by {post.author.name}
          </p>
        </div>

        <img
          className="border rounded-full h-6 w-6"
          src={urlFor(post.author.image).url()}
          alt={post.author.name}
        />
      </div>
    </div>
  );
};

export default Post;
