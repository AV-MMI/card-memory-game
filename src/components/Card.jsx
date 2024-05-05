import { useRef } from "react";
import { Button } from "./Button";
import { ImageButton } from "./ImageButton";
export { Card }

function Card({size="w-60", 
                obj,
                onClick,
            }){
    const cardMenuEl = useRef(null);
    const toggleMenu = (e) => {

        cardMenuEl.current.classList.toggle('hidden');
        cardMenuEl.current.classList.toggle('max-h-fit')
        e.target.classList.toggle('rounded-t-md')

        e.target.textContent = (e.target.textContent == "see more" ? "see less" : "see more");

        e.stopPropagation();
    }

    return (
        <div className={`p-0 card-compact relative rounded-lg shadow-2lx border-2 border-neutral-300 ${size}`}>
        <div className="card-actions absolute w-full bg-white text-black rounded-lg h-fit flex justify-center dark:text-white dark:bg-base-300 opacity-80">
            <div ref={cardMenuEl} className="flex flex-col justify-around w-full rounded-t-lg max-h-0 overflow-hidden hidden">
                <span>author: {obj.author}</span>
                <span>title: {obj.title}</span>
                <span><a href={`https://www.artic.edu/artworks/${obj.id}`} target="_blank">view in page</a></span>
            </div>
            <Button className="w-full border-4 border-neutral-400 " onClick={toggleMenu} text="see more" />
        </div>

        <ImageButton src={obj.imgUrl} onClick={onClick} className={size}/>
        </div>
    )
}