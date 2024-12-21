import React from 'react';
import { UserProps } from '../../interfaces'; 


const UserCard: React.FC <UserProps>  =  ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-lg text-gray-600"><strong>Username:</strong> {username}</p>
      <p className="text-lg text-gray-600"><strong>Email:</strong> {email}</p>
      <p className="text-lg text-gray-600"><strong>Phone:</strong> {phone}</p>
      <p className="text-lg text-blue-600"><strong>Website:</strong> 
        <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {website}
        </a>
      </p>
      <p className="text-lg text-gray-600"><strong>Company:</strong> {company.name}</p>
      <p className="text-lg text-gray-600"><strong>Address:</strong> {address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
