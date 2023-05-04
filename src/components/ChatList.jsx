import React from "react";
import Header from "./Header";
import Search from "./Search";
import ContactList from "./ContactList";

export default function ChatList({ contactList }) {
    const [list, setList] = React.useState([]);

    const searchContacts = (value) => {
        const unfilteredcontacts = [...contactList];
        return unfilteredcontacts.filter((contact) => {
            if (contact?.title.toLowerCase().includes(value.toLowerCase()) || contact?.subtitle.toLowerCase().includes(value.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        })
    }
    
    React.useEffect(() => {
        if (contactList) {
            console.log(contactList)
            setList([...contactList]);
        }
    }, [contactList])

    return (
        <>
            <div className="w-full h-full bg-base-300 px-4 flex flex-col border-r border-base-100">
                <header className="sticky top-0 bg-base-300">
                    <div className="h-16 flex-1 mb-4">
                        <Header title={"Chats"} />
                    </div>
                    <div className="h-16 flex-1">
                        <Search placeholder={"Type here to search contact"}
                            onClear={() => {
                                setList([...contactList])
                            }}
                            onChange={(event) => {
                                setList(searchContacts(event.target.value));
                            }}
                        />
                    </div>
                </header>
                <div className="h-full flex-auto overflow-y-scroll">
                    <div className="h-full">
                        <ContactList list={list} />
                    </div>
                </div>
            </div>
        </>
    )
}