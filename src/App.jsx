import './App.css'
import Home from "@/pages/Home/Home";
import {useState} from "react";
import Navbar from "@/pages/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import ProjectDetails from "@/pages/ProjectDetails/ProjectDetails";
import IssueDetails from "@/pages/IssueDetails/issuedetails";
import Subscription from "@/pages/Subscription/subscription";
import Auth from "@/pages/Auth/auth";


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            {
                true ? <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/project/:id" element={<ProjectDetails/>}/>
                        <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails/>}/>
                        <Route path="/upgrade_plan" element={<Subscription/>}/>
                    </Routes>
                </div> : <Auth/>
            }
        </>
    )
}

export default App
