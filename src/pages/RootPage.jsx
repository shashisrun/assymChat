import {
    Outlet,
    useLoaderData,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import Loader from "../components/Loader";

export default function RootPage() {
    const { authenticated } = useLoaderData();
    if (authenticated === false) {
        return <LoginPage />
    }
    if (!authenticated) {
        return <Loader />
    }
    return (
        <>
            <Outlet />
        </>
    )
}