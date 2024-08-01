

import { UserContextProvider } from './context/UserContext';

import axios from "axios";
import Routes from './Routes';

function App() {
  
  axios.defaults.baseURL='https://chatappbackend-jku8.onrender.com'
  axios.defaults.withCredentials = true

  return (
    <UserContextProvider>
     <Routes />
    </UserContextProvider>
  )
}

export default App
