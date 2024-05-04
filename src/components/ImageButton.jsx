export { ImageButton };

function ImageButton({src, alt}){
    return (
        <button className="p-0 w-full h-full rounded-lg">
            <img className="w-full h-full rounded-lg" src={src} alt={alt} />
        </button>
    )
}