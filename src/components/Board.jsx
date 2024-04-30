import { useRef, useState } from "react";
import { RowTuple } from "./RowTuple";
export { Board }

function Board({objArr, cardSize}){
    const [objsArr, setObjsArr] = useState(objArr);
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

    let rowsTuple = formatObjArr(objsArr).map((tuple) => {
        return <RowTuple tupleArr={tuple} />
    })

    return (

        <div className="flex justify-center items-center space-x-4">
            {
            rowsTuple
            }
        </div>
    )
}