import { useRef } from "react";

export { Card }

function Card({size="w-60", author="jane", title="starry night", src="https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg", url}){
    const cardMenuEl = useRef(null);
    const toggleMenu = (e) => {

        cardMenuEl.current.classList.toggle('hidden');
        cardMenuEl.current.classList.toggle('max-h-fit')
        e.target.classList.toggle('rounded-t-md')
        e.target.classList.toggle('border-2')

        e.target.textContent = (e.target.textContent == "see more" ? "see less" : "see more");

        e.stopPropagation();
    }

    return (
        <div className={`p-0 card-compact relative rounded-lg shadow-2lx border-2 border-neutral-300 ${size}`}>
        <div className="card-actions absolute w-full rounded-lg h-fit flex justify-center bg-base-300 opacity-80">
            <div ref={cardMenuEl} className="flex flex-col justify-around w-full rounded-t-lg max-h-0 overflow-hidden hidden">
                <span>author: {author}</span>
                <span>title: {title}</span>
                <span><a href="" target="_blank">view in page</a></span>
            </div>
            <button className="btn btn-square btn-sm w-full bg-base-200 border-2 border-neutral-100 rounded-t-none rounded-t-md hover:border-2 border-b-neutral-300 opacity-90" onClick={toggleMenu}>
                see more
            </button>
        </div>
        <button className="p-0 w-full h-full rounded-lg">
            <img className="w-full h-full rounded-lg" src={src} alt="" />
        </button>
        </div>
    )
}