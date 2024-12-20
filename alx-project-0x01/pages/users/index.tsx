// index.tsx in pages/users
import React from 'react';
import Header from '../../components/layout/Header';
import { UserProps } from '../../interfaces';
import UserCard from '../../components/common/UserCard';
const Users: React.FC = () => {
  return (
    <div>
      <h1>Users</h1>
      <p>List of users will appear here.</p>
    </div>
  );
};
interface UsersProps {
  posts: UserProps[]; // Define the type for the posts prop
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;