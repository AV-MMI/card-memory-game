export { Button }

function Button({text, onClick, className}){
    let defaultClasses = "btn bg-base-300 btn-outline btn-ghost dark:text-[#808080] dark:bg-[#181818] bg-white";

    return (
        <button className={`${defaultClasses} ${className}`} onClick={(e) =>
            {
                e.stopPropagation();
                onClick(e);
            }
        }>{text}</button>
    )
}