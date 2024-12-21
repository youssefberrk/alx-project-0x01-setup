import React, { useState } from 'react';
import { UserProps, UserData } from '../../interfaces';
import UserCard from '../../components/common/UserCard';
import UserModal from '../../components/common/UserModal';

interface UsersProps {
  posts: UserProps[]; // Define the type for the posts prop
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserProps[]>(posts); // Initialize users state with posts
  const [showModal, setShowModal] = useState(false);

  // Function to handle adding a new user
  const addUser = (newUser: UserData) => {
    setUsers([...users, newUser]);
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Users</h1>

      <button
        onClick={toggleModal}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add User
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {users.map((user) => (
    <UserCard key={user.id} {...user} />
  ))}
    </div>


      {/* Render the UserModal component */}
      <UserModal
        showModal={showModal}
        closeModal={toggleModal}
        addUser={addUser}
      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
