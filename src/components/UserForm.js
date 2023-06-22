import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser, updateUser } from '../store/userSlice';

const UserForm = ({ user }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      dispatch(updateUser({ id: user.id, name, email }));
    } else {
      dispatch(createUser({ name, email }));
    }

    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>{user ? 'Edit User' : 'Create User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">{user ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default UserForm;
