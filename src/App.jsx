import './App.css'
import Home from "@/pages/Home/Home";
import {useEffect, useState} from "react";
import Navbar from "@/pages/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import ProjectDetails from "@/pages/ProjectDetails/ProjectDetails";
import IssueDetails from "@/pages/IssueDetails/issuedetails";
import Subscription from "@/pages/Subscription/subscription";
import Auth from "./pages/Auth/auth";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./Redux/Auth/Action";


function App() {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth); //

    useEffect(() => {
        dispatch(getUser());
    }, [auth.jwt]);

    return (
        <>
            {
                auth.user ? <div>
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
