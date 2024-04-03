import { useState } from 'react'

import Home from './component/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RepoInfo from './component/RepoInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/repo-info' Component={RepoInfo} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
