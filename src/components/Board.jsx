import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
export { Board }

// Component
function Board({objsArr, cardsSize, className}){
   let [cardsObjArr, setCardsObjArr] = useState([]);
   let hints = useRef([2])
   let [scoreObj, setScoreObj] = useState({
    'current': 0,
    'max': 0
})

    useEffect(() => {
        setCardsObjArr(objsArr);
    }, [objsArr])

    function resetGame() {
        setScoreObj({
            current: 0,
            max: 0
        })

        let cloneCardsObjArr = cardsObjArr.slice();
        for(let obj in cloneCardsObjArr){
            cloneCardsObjArr[obj].clicked = false;
            cloneCardsObjArr[obj].highlight = false;
        }

        let newArrOrder = shuffle(cloneCardsObjArr);
        setCardsObjArr(newArrOrder);
    }

    // returns a radomly sorted array
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

    const handleHint = (e) => {
        if(hints.current > 0){
        let cloneCardsObjArr = cardsObjArr.slice();
            // get a no clicked card
            for(let card in cloneCardsObjArr){
                if(!cloneCardsObjArr[card].clicked){
                    // get card component
                    cloneCardsObjArr[card].highlight = true;

                    setCardsObjArr(cloneCardsObjArr);
                    return
                }
            }
        }
    }

    const handleClickedCard = (e) => {
        let cardId = e.target.getAttribute("data-id");
        let cloneCardsObjArr = cardsObjArr.slice();
        
        // get cards and correspondent card obj
        for(let card in cloneCardsObjArr){
            // found card clicked
            if(cloneCardsObjArr[card].id == cardId){
                    // card has never been clicked
                if(!cloneCardsObjArr[card].clicked){
                    cloneCardsObjArr[card].clicked = true;
                    cloneCardsObjArr[card].highlight = false;

                    setScoreObj(prevScoreObj => ({
                        ...prevScoreObj,
                        current: prevScoreObj.current + 1
                }))

                // shuffle
                let newArrOrder = shuffle(cloneCardsObjArr);
                setCardsObjArr(newArrOrder);
                return;
                }

                    // card has been clicked before
                else if(cloneCardsObjArr[card].clicked){
                        // reset current score and set max (if needed)
                    setScoreObj(prevScoreObj => ({
                            current: 0,
                            max: (prevScoreObj.current > prevScoreObj.max ? prevScoreObj.current : prevScoreObj.max)
                    }))

                        // shuffle and "restart" card obj
                let newArrOrder = cloneCardsObjArr.slice();   
                newArrOrder.map((card) => {
                    card.clicked = false;
                    card.highlight = false;
                })

                setCardsObjArr( shuffle(newArrOrder) )
                return;
                }
                
            }
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
                <Button text="Reset scores" onClick={resetGame}></Button>
                <Button text="Hint!" onClick={handleHint}></Button>
            </div>
        </div>
   )
}