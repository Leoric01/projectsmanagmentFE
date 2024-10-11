import './App.css'
import Home from "@/pages/Home/Home.jsx";
import {useState} from "react";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Home/>
        </>
    )
}

export default App
