import { Fragment, useRef, useState } from 'react'
import './App.css'

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const theme = useRef((darkTheme ? "dark" : "light"));

  return (
    <div className="content" data-theme={(darkTheme ? 'dark' : 'light')} onClick={()=> alert('dam bubling')}>
      <nav className="">
        <div className="">
          <h1>Artify: Memory Gallery</h1>
          <span> Thanks to <a href="">Artic</a></span>
        </div>
        <button className="btn" onClick={(e) => {
          e.stopPropagation();
          setDarkTheme(!darkTheme)}} >{(darkTheme ? 'Light Theme' : 'Dark Theme')}</button>
      </nav>
    </div>
  )
}

export default App
