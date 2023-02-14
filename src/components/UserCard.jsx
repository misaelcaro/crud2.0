import React from 'react'
import './style/UserCard.css'


const UserCard = ({
  user,
  deleteUser,
  setUpdatingUser,
  handleClickShowModal
}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }


  return (
    <article className="card" >


      <h3 className="title__card">{user.first_name} {user.last_name}</h3>
      <hr />
      <ul>
        <li> <span>Email: </span>{user.email}</li>
        <li> <span>Birthday: </span> <i className='gift bx bx-gift'></i>{user.birthday}</li>
      </ul>
      <hr />
      <footer>
        <button  onClick={() => deleteUser(user.id)} className="trash"><i className='trash__icon bx bx-trash'></i></button>
        <button onClick={handleClickEdit}  className="pencil"><i className='pencil__icon bx bx-pencil'></i></button>
      </footer>

    </article>
  )
}

export default UserCard