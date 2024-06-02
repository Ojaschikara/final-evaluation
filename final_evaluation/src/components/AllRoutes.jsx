import { Route,Routes } from "react-router-dom";
import {Home} from "../pages/home";
import { useContext } from "react";
import{LoginPage} from "../pages/login"


export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element ={<Home />} />
            
        </Routes>
        // <Routes>
        //     <Route path="login" element={<Login>} />
        // </Routes>
    )
}