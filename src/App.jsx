
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

import UsersList from './components/UsersList'
import Navbar from './components/Navbar'
import ModalForm from './components/ModalForm'



const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  const [users, setUsers] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const [updatingUser, setUpdatingUser] = useState()

  const handleClickShowModal = () => {
    setIsShowModal((isShowModal) => !isShowModal)
  }

  const createUser = (data) => {
    axios
      .post(`${BASE_URL}users/`, data)
      .then(() => {
        getAllUsers()
        handleClickShowModal()
      })
      .catch((err) => console.log(err))
  }

  const getAllUsers = () => {
    axios
      .get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios
      .delete(`${BASE_URL}users/${id}/`)
      .then(() => {
        getAllUsers()
        //handleClickShowModal()
        alert(`El usuario  ha sido eliminado correctamente`)
      })
      .catch((err) => console.log(err))
  }


  const updateUser = (data, id) => {
    axios.patch(`${BASE_URL}users/${id}/`, data)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])



  return (
    <div className="App">

      <Navbar handleClickShowModal={handleClickShowModal} />
      <ModalForm
        handleClickShowModal={handleClickShowModal}
        isShowModal={isShowModal}
        createUser={createUser}
        updatingUser={updatingUser}
        updateUser={updateUser}
        setUpdatingUser={setUpdatingUser}
      />
      <UsersList users={users}
        deleteUser={deleteUser}
        setUpdatingUser={setUpdatingUser}
        handleClickShowModal={handleClickShowModal}
      />

    </div>
  )
}

export default App
