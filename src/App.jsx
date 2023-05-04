import { RouterProvider } from 'react-router-dom'
import AuthProvider from './context/AuthContext'
import routes from './service/Router'
import ContactsProvider from './context/ContactsContext'
import ChatProvider from './context/ChatContext'


function App() {

  return (
    <>
      <AuthProvider>
        <ContactsProvider>
          <ChatProvider>
            <RouterProvider router={routes} />
          </ChatProvider>
        </ContactsProvider>
      </AuthProvider>
    </>
  )
}

export default App
