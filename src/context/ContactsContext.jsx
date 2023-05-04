import React from 'react';

const ContactsContext = React.createContext();

export const useContacts = () => React.useContext(ContactsContext);

export default function ContactsProvider({ children }) {
    const [contacts, setContacts] = React.useState();

    const searchContacts = (value) => {
        const unfilteredcontacts = [...contacts];
        return unfilteredcontacts.filter((contact) => {
            if (contact?.title.toLowerCase().includes(value.toLowerCase()) || contact?.subtitle.toLowerCase().includes(value.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        })
    }

    return (
        <ContactsContext.Provider value={{ contacts, setContacts, searchContacts }}>{children}</ContactsContext.Provider>
    );
}