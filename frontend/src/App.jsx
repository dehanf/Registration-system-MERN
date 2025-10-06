import { useState } from 'react'
import './App.css'
import Header from './components/header'
import AddSpeaker from './components/AddSpeaker'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <AddSpeaker/>
    </div>

  )
}

export default App
