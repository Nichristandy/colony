
const secondButton = ({ children, type, onClick }) => {

    const primary = "bg-gradient-to-tr from-[#5F59F7] to-[#2620A9] p-2 lg:p-3 md:w-auto rounded shadow-md lg:w-40"

    return(
        <button onClick={onClick} className={`${primary}`}>{children}</button>
    )



}

export default secondButton;