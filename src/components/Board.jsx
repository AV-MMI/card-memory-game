import { useRef, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
export { Board }

// Component
function Board({objsArr, cardSize, children, className}){
   let [cardsObjArr, setCardsObjArr] = useState(objsArr);
   let [scoreObj, setScoreObj] = useState({
    'current': 0,
    'max': 1})

    let rowCardsObj = [objsArr.slice(0, ( objsArr.length/2 ) ) ,objsArr.slice(( objsArr.length/2 ) , objsArr.length) ] 
    return (
        <div className={`flex flex-row justify-center ${className}`}>
            <div className={`space-y-4 p-4`}>
                <div className="flex space-x-4">{rowCardsObj[0].map((obj) => {
                    return <Card imgSrc={obj.src} key={obj.id} title={obj.title} author={obj.author}/>
                })}</div>
                <div className="flex space-x-4">{rowCardsObj[1].map((obj) => {
                    return <Card imgSrc={obj.src} key={obj.id} title={obj.title} author={obj.author}/>
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