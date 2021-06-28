import Login from './components/Login'
import Chat from './components/Chat'
import { CHAT_ROUTE, LOGIN_ROUTE } from "./const";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
]
export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    },
]