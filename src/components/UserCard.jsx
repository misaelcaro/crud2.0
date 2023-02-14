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


      <h3 className="card__title">{user.first_name} {user.last_name}</h3>
      <hr />
      <div className="card__content">
      <ul>
        <li> <span >Email: </span> <br /> {user.email}</li>
        <br />
        <li> <span >Birthday: </span>  <br/>  <i className='gift bx bx-gift'></i>{user.birthday}</li>
      </ul>
      <hr />
      </div>
      <footer>
        <button  onClick={() => deleteUser(user.id)} className="trash"><i className='trash__icon bx bx-trash'></i></button>
        <button onClick={handleClickEdit}  className="pencil"><i className='pencil__icon bx bx-pencil'></i></button>
      </footer>

    </article>
  )
}

export default UserCard