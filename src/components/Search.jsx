import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function Search({ placeholder, onChange, onClear }) {
    const [value, setValue] = React.useState("");
    return (
        <>
            <div className="h-16">
                <div className="relative">
                    <input type="text" value={value} placeholder={placeholder} className="input bg-base-100 w-full pr-16" onChange={(event) => { setValue(event.target.value); onChange(event)}} />
                    <button className="btn btn-ghost bg-base-100 absolute top-0 right-0" onClick={() => { setValue(""); onClear()}}>
                        {value ? <FaTimes size={18} /> : <FaSearch size={18} />}
                    </button>
                </div>
            </div>
        </>
    )
}