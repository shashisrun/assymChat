import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatInput() {
    const [value, setValue] = React.useState("");
    
    const handleSubmit = () => {
        if (value !== "") {
            console.log(value)
            console.log("Submitting Data")
        }
    }

    return (
        <>
            <div className="mx-auto max-w-7xl w-full">
                <div className="relative">
                    <span
                        className="max-h-32 overflow-y-auto textarea w-full bg-base-300 pr-16 text-l block empty:text-base-content text-accent-content empty:before:content-['Type\00a0your\00a0message\00a0to\00a0send']"
                        role="textbox"
                        contentEditable
                        value={value}
                        onInput={(event) => setValue(event.target.innerText.trim())}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" && !event.shiftKey) {
                                event.preventDefault();
                                event.stopPropagation();
                                handleSubmit();
                            }
                        }}
                    >
                    </span> 
                    {/* <textarea placeholder="Type your message to send" value={value} rows={rows} className="textarea textarea-bordered w-full bg-base-300 pr-16" onChange={(event) => setValue(event.target.value)}></textarea> */}
                    <button className={`btn ${!value ? "btn-ghost" : "btn-primary" } h-full absolute top-0 right-0`} onClick={() => handleSubmit}>
                        <FaPaperPlane size={18} />
                    </button>
                </div>
            </div>
        </>
    )
}