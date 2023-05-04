import { Link } from "react-router-dom";

export default function ContactCard({ details }) {
    return (
        <>
            <div className="flex flex-row w-full hover:bg-base-100 rounded-lg">
                <button className="w-16 h-16 p-2">
                    <img src={details.thumbnail} className="rounded-full w-full" />
                </button>
                <Link to={details.link} className="h-16 ml-4 text-left w-full">
                    <h3 className="text-l font-bold">{details.title}</h3>
                    <p>{details.subtitle}</p>
                </Link>
            </div>
            <div className="divider my-0 max-w-xs mx-auto"></div> 
        </>
    )
}