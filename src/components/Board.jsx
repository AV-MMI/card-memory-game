import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
export { Board }

// Component
function Board({objsArr, cardsSize, className}){
   let [cardsObjArr, setCardsObjArr] = useState([]);
   let [scoreObj, setScoreObj] = useState({
    'current': 0,
    'max': 0})

    useEffect(() => {
        setCardsObjArr(objsArr);
    }, [])

    function shuffle(arr) {
        let array = arr
        let currentIndex = array.length;
        
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const handleClickedCard = (e) => {
        if(!e.target.classList.contains('clicked')){
            // mark visited
            let cardId = e.target.getAttribute("data-id");
            let cloneCardsObjArr = cardsObjArr.slice();

            for(let obj in cloneCardsObjArr){
                if(cloneCardsObjArr[obj].id == cardId){
                    cloneCardsObjArr[obj].clicked = true;
                    e.target.classList.add('clicked');

                    setScoreObj(prevScoreObj => ({
                        ...prevScoreObj,
                        current: prevScoreObj.current + 1
                    }))
                }
            }

            // shuffle
            let newArrOrder = shuffle(cloneCardsObjArr);

            setCardsObjArr(newArrOrder)
        }
    }

    let rowCardsObj = [cardsObjArr.slice(0, ( cardsObjArr.length/2 ) ), cardsObjArr.slice(( cardsObjArr.length/2 ) , cardsObjArr.length) ] 
    return (
        <div className={`flex flex-row justify-center ${className}`}>
            <div className={`space-y-4 p-4`}>
                <div className="flex space-x-4 min-h-fit">{rowCardsObj[0].map((obj) => {
                    return <Card key={obj.id} size={cardsSize} obj={obj} onClick={handleClickedCard}/>
                })}</div>
                <div className="flex space-x-4 min-h-fit">{rowCardsObj[1].map((obj) => {
                    return <Card key={obj.id} size={cardsSize} obj={obj} onClick={handleClickedCard}/>
                })}</div>
            </div>

            <div className="flex flex-col h-fit p-4 space-y-3">
                <span>current score: {scoreObj.current}</span>
                <span>maximum score: {scoreObj.max}</span>
                <Button text="reset scores"></Button>
                <Button text="hints!"></Button>
            </div>
        </div>
   )
}