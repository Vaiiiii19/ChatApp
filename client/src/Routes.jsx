import { useContext } from "react";

import { UserContext } from "./context/UserContext";
import RegisterAndLoginForm from "./pages/RegisterAndLoginForm";
import ChatPage from "./pages/ChatPage";
import './index.css'

export default function Routes() {
    const {username, id} = useContext(UserContext);

    if (username) {
        return <ChatPage />;
      }
    return(
        <RegisterAndLoginForm />
    )
}