import { Fragment, useEffect, useRef, useState } from 'react'
import { Board } from './components/Board.jsx';
import { Card } from './components/Card.jsx';
import { Button } from './components/Button.jsx';
import './App.css'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  let cardsDataArr = useRef([]);
  useEffect(() => {
    let ignore = false;

    async function fetchArtwork(artwork){
      try {
        let response = await fetch(artwork.api_link);
        let data = await response.json();
        
        let artworkObj = {
          title: data.data.title,
          author: data.data.artist_title,
          imgUrl: `https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`,
          department: data.data.department_title,
          clicked: false,
          id: data.data.id,
        }
        cardsDataArr.current.push(artworkObj)
      } catch (error){
        console.log(error);
      }
    }
    
    async function fetchingArtworks(word){
      if(!ignore){
        try {
          let response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${word}`)
          let data = await response.json();
          data.data.forEach((artwork) => fetchArtwork(artwork))
        } catch (error) {
          console.log('No artworks fetched')
        }
      }
    }
    
    fetchingArtworks("classic art");
    
    return () => {
      ignore = true;
    }
  }, [])


  console.log(cardsDataArr.current, 'cards')

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
  
      <Board objsArr={cardsDataArr} className="bg-[#dddddd] text-[#808080] dark:bg-[#181818] dark:text-[#FFDEAD] w-fit m-auto mt-3">
        
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
