import { Card } from "./Card"
export { RowTuple }

function RowTuple({tupleArr, cb}){
    let cards = tupleArr.map((obj) => {
         return <Card title={obj.title} author={obj.author} src={obj.src} cardSize="w-30" cb={cb}/>
        })

    return (
        <div className="flex flex-col space-y-5">
            {
                cards
            }
        </div>
    )
}