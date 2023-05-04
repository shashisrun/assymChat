import ContactCard from "./ContactCard";

export default function ContactList({list, onClick}) {
    return (
        <>
            <ul className="w-full h-full">
                {list.map((item, key) => <li key={key}><ContactCard details={item} /></li>)}
            </ul>
        </>
    )
}