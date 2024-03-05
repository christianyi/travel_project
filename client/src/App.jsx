import './App.css'
import React, {useState} from "react";
import { Link, Route, Routes } from 'react-router-dom'
import CreateStory from './components/CreateStory'
import DisplayAll from './components/DisplayAll'
import DisplayOne from './components/DisplayOne'
import EditStory from './components/EditStory';

function App() {
  const [storyList, setStoryList] = useState([])

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<CreateStory/>}/>
          <Route path='/stories' element={<DisplayAll  storyList={storyList} setStoryList={setStoryList}/>}/>
          <Route path="/:id/details" element={<DisplayOne/>} />
          <Route path="/:id/edit" element={<EditStory/>} />
        </Routes>
      </div>
    </>
  )
}

export default App