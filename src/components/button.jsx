export const MyButton = ({ textContent, textColor }) => {
    return (
        <div
            style={{ color: textColor }}
            className="absolute text-[#31A9ED] right-2 text-xl font-bold top-1/2 transform -translate-y-1/2"
        >
            <button>{textContent}</button>
        </div>
    );
};
