import { useRef, useState } from "react";
import { RowTuple } from "./RowTuple";
export { Board }

function Board({objsArr, cardSize}){
    const [cardsObjArr, setCardsObjArr] = useState(objArr);
    const currentScore = useRef(null);
    const maxScore = useRef(null);
    /*
    from : [{},{},{},{}, ...]
    to: [ [{},{}], [{}, {}], ...]
    */
    const formatObjArr = (objAr) => {
        let outputArr = [];
        let tempTuple = []
        for(let i = 0; i <= objAr.length; i++){
            if(tempTuple.length == 2){
                outputArr.push(tempTuple);
                tempTuple = [];
            } 

            tempTuple.push(objAr[i]);
        }

        return outputArr;
    }

    const cbSetCardsObjArr(newCardsObjArr){
        setCardsObjArr(newCardsObjArr);
    }

    let rowsTuple = formatObjArr(cardsObjArr).map((tuple) => {
        return <RowTuple tupleArr={tuple} cb={cbSetCardsObjArr}/>
    })

    return (

        <div className="flex justify-center items-center space-x-4">
            {
            rowsTuple
            }
        </div>
    )
}