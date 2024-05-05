export { ImageButton };

function ImageButton({src, alt, onClick}){
    return (
        <button className="p-0 w-full h-full rounded-lg" onClick={onClick}>
            <img className="w-full h-full rounded-lg" src={src} alt={alt} />
        </button>
    )
}