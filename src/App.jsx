import { Fragment, useRef, useState } from 'react'
import { Board } from './components/Board.jsx';
import { Card } from './components/Card.jsx';
import { Button } from './components/Button.jsx';
import './App.css'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  let cardsDataArr = [
    {
      title: "Nighthawks",
      author: "Edward Hopper",
      src: "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg"
    },
    {
      title: "Water Lilies",
      author: "Claude Monet",
      src: "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg"
    },
    {
      title: "The Starry Night",
      author: "Vincent van Gogh",
      src: "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg"
    },
    {
      title: "The Scream",
      author: "Edvard Munch",
      src: "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg"
    },
    {
      title: "Guernica",
      author: "Pablo Picasso",
      src: "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg"
    },
    {
      title: "American Gothic",
      author: "Grant Wood",
      src: "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg"
    },
    {
      title: "The Kiss",
      author: "Gustav Klimt",
      src: "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg"
    },
    {
      title: "Campbell's Soup Cans",
      author: "Andy Warhol",
      src: "https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg"
    }
  ]


  return (
    <div className={"relative content w-screen h-screen bg-white dark:bg-[#202020]" + " " +  (darkTheme ? 'dark' : 'false')} >
      <nav className="p-3 flex flex-row items-center justify-between text-[#808080] bg-[#D8D8D8] dark:text-[#7F7F7F] dark:bg-[#282828] w-full">
        <div className="flex flex-row items-center">
          <h1 className="text-4xl">Artify: Memory Gallery</h1>
          <span className="ml-3"> Thanks to <a href="https://www.artic.edu/" target="_blank">Artic</a></span>
        </div>
        <Button className="text-[#808080] bg-[#181818] dark:bg-white" onClick={(e) => {
          e.stopPropagation();
          setDarkTheme(!darkTheme)}} text={(darkTheme ? 'Light Theme' : 'Dark Theme')}/>
      </nav>
  
      <Board className="bg-[#dddddd] text-[#808080] dark:bg-[#181818] dark:text-[#FFDEAD] w-fit m-auto mt-3">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Board>

      <footer className="bg-[#D8D8D8] footer p-1 dark:bg-base-300 flex justify-center absolute bottom-0">
        <div>
          <a href="https://github.com/AV-MMI" target="_blank"><img className="h-9"src={(darkTheme ? "./src/assets/github-mark-white.png" : "./src/assets/github-mark.png")} alt="github logo"/></a>
        </div>
      </footer> 
    </div>
  )
}

export default App
