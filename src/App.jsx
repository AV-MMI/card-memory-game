import { Fragment, useRef, useState } from 'react'
import { Card } from './components/Card.jsx';
import './App.css'

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className="relative content w-screen h-screen" data-theme={(darkTheme ? 'dark' : 'light')} >
      <nav className="p-3 flex flex-row items-center justify-between bg-base-200 w-full">
        <div className="flex flex-row items-center">
          <h1 className="text-4xl">Artify: Memory Gallery</h1>
          <span className="ml-3"> Thanks to <a href="https://www.artic.edu/" target="_blank">Artic</a></span>
        </div>
        <button className="btn btn-outline btn-primary" onClick={(e) => {
          e.stopPropagation();
          setDarkTheme(!darkTheme)}} >{(darkTheme ? 'Light Theme' : 'Dark Theme')}</button>
      </nav>
      
      <div className="p-4 min-h-4/6 w-5/6 bg-base-200 m-auto mt-14 flex justify-center items-center">
          <div className="flex flex-col space-y-5">
            <Card className="" size="w-52" />
            <Card className="" size="w-52" />
          </div>
      </div>


      <footer class="footer p-1 bg-base-300 flex justify-center absolute bottom-0">
        <div>
          <a href="https://github.com/AV-MMI" target="_blank"><img className="h-9"src={(darkTheme ? "./src/assets/github-mark-white.png" : "./src/assets/github-mark.png")} alt="github logo"/></a>
        </div>
      </footer> 
    </div>
  )
}

export default App
