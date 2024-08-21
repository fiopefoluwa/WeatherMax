interface Props{
    textContent : string;
    textColor: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}


export const MyButton = ({ textContent , textColor, onClick }:Props) => {
    return (
        <div
            style={{ color: textColor }}
            className="absolute text-[#31A9ED] right-2 text-xl font-bold top-1/2 transform -translate-y-1/2"
        >
            <button onClick={onClick}>{textContent}</button>
        </div>
    );
};
