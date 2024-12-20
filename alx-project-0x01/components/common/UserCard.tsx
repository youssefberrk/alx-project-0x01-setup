import React from 'react';
import { UserProps } from '../../interfaces';

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out">
      <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-lg text-gray-600"><strong>Username:</strong> {user.username}</p>
      <p className="text-lg text-gray-600"><strong>Email:</strong> {user.email}</p>
      <p className="text-lg text-gray-600"><strong>Phone:</strong> {user.phone}</p>
      <p className="text-lg text-blue-600"><strong>Website:</strong> 
        <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {user.website}
        </a>
      </p>
      <p className="text-lg text-gray-600"><strong>Company:</strong> {user.company.name}</p>
      <p className="text-lg text-gray-600"><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
    </div>
  );
};

export default UserCard;
