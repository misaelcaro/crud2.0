import React from 'react'
import UserCard from './UserCard'
import './style/UserList.css'



const UsersList = ({
  users,
  deleteUser,
  setUpdatingUser,
  handleClickShowModal
}) => {
  return (
    <section classNeme="tarjetas">
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setUpdatingUser={setUpdatingUser}
          handleClickShowModal={handleClickShowModal}
        />
      ))}
    </section>
  );
};

export default UsersList