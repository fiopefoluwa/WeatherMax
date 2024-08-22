interface Props{
    textContent : string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}


export const MyButton = ({ textContent, onClick }:Props) => {
    return (
        <div
            className="absolute text-[#31A9ED] right-2 text-xl font-bold top-1/2 transform -translate-y-1/2"
        >
            <button onClick={onClick}>{textContent}</button>
        </div>
    );
};
