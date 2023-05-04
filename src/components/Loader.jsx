export default function Loader({height, width, barLength, message}) {
    return (
        <>
            <div className={`${height ? height : "h-full"} ${width ? width : "w-full"} flex items-center justify-center`}>
                <div className={`${barLength ? barLength : "w-1/5"} text-center`}>
                    <progress className={`my-auto mx-auto progress w-full`}></progress>
                    {message ?
                        <span>{message}</span>
                    : <></>}
                </div>
            </div>
        </>
    )
}