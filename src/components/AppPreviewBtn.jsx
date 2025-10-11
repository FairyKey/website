function AppPreviewBtn({ title, description, onClick, isActive }) {
    return (
        <div
            onClick={onClick}
            className={`border-2 border-gray-50  rounded-sm p-7 hover:bg-gray-100 cursor-pointer
            ${isActive ? "bg-gray-100" : "bg-transparent"}`}>
            <h2 className="text-2xl text-left font-semibold">
                {title}
            </h2>
            <p className="text-left">
                {description}
            </p>
        </div>
    )
}

export default AppPreviewBtn