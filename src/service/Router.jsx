
import { createBrowserRouter } from "react-router-dom";
import Loader from "../components/Loader";
import RootPage from "../pages/PublicPage";
import PageNotFound from "../pages/PageNotFound";
import ChatPage from "../pages/ChatPage";
import SelectChatPage from "../components/SelectChatPage";
import Chats from "../components/Chats";
import {  } from "react-router-dom";

const routes = createBrowserRouter([
    {
        loader: async () => {
            let authenticated;
                try {
                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            authenticated = true;
                            resolve()
                        })
                    })
                } catch (error) {
                    console.log(error)
                }
            return { authenticated }
            },
            element: <RootPage />,
            children: [
                {
                    path: "/",
                    loader: async () => {
                        try {
                            let contactList;
                             await new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        const item1 = {
                                            thumbnail: "https://picsum.photos/200/200",
                                            title: "FirstName LastName",
                                            subtitle: "@username",
                                            link: "/chats/username"
                                        }
                                        const item2 = {
                                            thumbnail: "https://picsum.photos/300/300",
                                            title: "Shashi Sharma",
                                            subtitle: "@shashisrun",
                                            link: "/chats/shashisrun"
                                        }
                                        const items = [];
                                        for (let i = 0; i <= 1000; i += 2) {
                                            items[i] = item1;
                                            items[i + 1] = item2;
                                        }
                                        contactList = [...items]
                                        resolve();
                                    }, 500);
                            })
                            return { contactList };
                        } catch (error) {
                            console.log(error);
                        }
                    },
                    errorElement: <PageNotFound />,
                    element: <ChatPage />,
                    children: [
                        {
                            index: true,
                            element: <SelectChatPage />,
                        },
                        {
                            loader: async ({ request, params, context }) => {
                                try {
                                    let chats;
                                    await new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            const item1 = {
                                                message: "Hello how are you?",
                                                from: "me",
                                                time: new Date()
                                            }
                                            const item2 = {
                                                message: "I am god, what about you?",
                                                from: "other",
                                                time: new Date()
                                            }
                                            const data = [];
                                            for (let i = 0; i <= 1000; i += 2) {
                                                data[i] = item1;
                                                data[i + 1] = item2;
                                            }
                                            chats = [...data];
                                            resolve();
                                        }, 500);
                                    })
                                    console.log("Chatds",chats)
                                    return {chats};
                                } catch (error) {
                                    console.log(error)
                                }
                            },
                            element: <Chats />,
                            path: "/chats/:username",
                        }
                    ]
                },
            ]
        },
        {
            path: "*",
            element: <PageNotFound />
        }
    ]);

export default routes;