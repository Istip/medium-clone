/* eslint-disable @next/next/no-img-element */
import { urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="group border rounded-sm overflow-hidden">
      <img
        src={urlFor(post.mainImage).url()!}
        alt={post.title}
        className="w-full object-cover group-hover:scale-105 transition-transform ease-in-out"
      />
      <div className="flex justify-between items-center p-5 bg-white gap-2">
        <div>
          <p className="text-lg font-bold">{post.title}</p>
          <p className="text-xs">
            {post.description} by{' '}
            <span className="text-green-500 font-bold">{post.author.name}</span>
          </p>
        </div>

        <img
          className="border rounded-full h-10 w-10"
          src={urlFor(post.author.image).url()}
          alt={post.author.name}
        />
      </div>
    </div>
  );
};

export default PostCard;
