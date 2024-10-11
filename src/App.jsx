import './App.css'
import Home from "@/pages/Home/Home";
import {useState} from "react";
import Navbar from "@/pages/Navbar/Navbar";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar/>
            <Home/>
        </>
    )
}

export default App
