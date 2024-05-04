import { useRef, useState } from "react";
import { Button } from "./Button";
export { Board }

// Component
function Board({objsArr, cardSize, children, className}){
   let [cardsObjArr, setCardsObjArr] = useState(objsArr);
   let [scoreObj, setScoreObj] = useState({
    'current': 0,
    'max': 1})

    let rowCards = [children.slice(0, ( children.length/2 ) ) ,children.slice(( children.length/2 ) , children.length) ] 
    return (
        <div className={`flex flex-row justify-center ${className}`}>
            <div className={`space-y-4 p-4`}>
                <div className="flex space-x-4">{rowCards[0]}</div>
                <div className="flex space-x-4">{rowCards[1]}</div>
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