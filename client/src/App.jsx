import './App.css'
import React, {useState} from "react";
import { Link, Route, Routes } from 'react-router-dom'
import CreateUser from './components/CreateUser'
import DisplayAll from './components/DisplayAll'
import DisplayOne from './components/DisplayOne'
import EditUser from './components/EditUser';

function App() {
  const [userList, setUserList] = useState([])

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<CreateUser/>}/>
          <Route path='/users' element={<DisplayAll  userList={userList} setUserList={setUserList}/>}/>
          <Route path="/:id/details" element={<DisplayOne/>} />
          <Route path="/:id/edit" element={<EditUser/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
