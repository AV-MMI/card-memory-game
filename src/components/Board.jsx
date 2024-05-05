import { useRef, useState } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
export { Board }

// Component
function Board({objsArr, cardsSize, children, className}){
   let [cardsObjArr, setCardsObjArr] = useState(objsArr);
   let [scoreObj, setScoreObj] = useState({
    'current': 0,
    'max': 1})

    console.log(objsArr, 'objsArr')
    let rowCardsObj = [objsArr.slice(0, ( objsArr.length/2 ) ) ,objsArr.slice(( objsArr.length/2 ) , objsArr.length) ] 
    return (
        <div className={`flex flex-row justify-center ${className}`}>
            <div className={`space-y-4 p-4`}>
                <div className="flex space-x-4">{rowCardsObj[0].map((obj) => {
                    console.log(obj.imgUrl, 'qlq')
                    return <Card size={cardsSize} obj={obj}/>
                })}</div>
                <div className="flex space-x-4">{rowCardsObj[1].map((obj) => {
                    return <Card size={cardsSize} obj={obj}/>
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