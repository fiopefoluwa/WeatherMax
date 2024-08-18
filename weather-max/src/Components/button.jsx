
export const MyButton = ({textContent, textColor}) =>{
    return(
        <div style={{ color:textColor}} className="absolute text-[#31A9ED] right-0.5 text-xl font-bold h-full">
            <button>{textContent}</button>
        </div>
    )
}