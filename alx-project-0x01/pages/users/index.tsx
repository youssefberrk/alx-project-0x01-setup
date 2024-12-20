import React from 'react';
import { UserProps } from '../../interfaces';
import UserCard from '../../components/common/UserCard';

interface UsersProps {
  posts: UserProps[]; // Define the type for the posts prop
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <p className="mb-8">List of users will appear here.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

// Fetch the data using getStaticProps before rendering the page
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts, // This will be passed to the Users component
    },
  };
}

export default Users;
