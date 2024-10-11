import './App.css'
import Home from "@/pages/Home/Home";
import {useState} from "react";
import Navbar from "@/pages/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import ProjectDetails from "@/pages/ProjectDetails/ProjectDetails";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/project/:id" element={<ProjectDetails/>}/>
            </Routes>
        </>
    )
}

export default App
