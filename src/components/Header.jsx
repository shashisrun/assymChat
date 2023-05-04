export default function Header({ title, leftActions, rightActions }) {
    return (
        <>
            <div className="w-full h-16 px-4 py-2 flex items-center border-b-2 border-primary">
                {leftActions ? 
                    leftActions
                : <></>}
                <h2 className="text-3xl font-bold">
                    {title}
                </h2>
                {rightActions ?
                    rightActions
                : <></>}
            </div>
        </>
    )
}