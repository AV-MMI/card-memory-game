import { Card } from "./Card"
export { RowTuple }

function RowTuple({tupleArr}){
    let cards = tupleArr.map((obj) => {
         return <Card title={obj.title} author={obj.author} src={obj.src} cardSize="w-30"/>
        })

        console.log(cards)
    return (
        <div className="flex flex-col space-y-5">
            {
                cards
            }
        </div>
    )
}