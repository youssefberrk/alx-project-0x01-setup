// index.tsx in pages/posts
import React from 'react';
import PostCard from '../../components/common/PostCard';

const Posts: React.FC = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostCard title="Sample Post" content="This is a sample post." />
    </div>
  );
};

export default Posts;