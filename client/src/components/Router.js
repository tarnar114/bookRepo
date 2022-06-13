import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";

const Router = () => {
    return ( <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
    </Routes> );
}
 
export default Router;