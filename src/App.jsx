import React from "react";
import Homecrud from "./Components/Homecrud";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import User from "./Components/User";
import Createuser from "./Components/Createuser";
import Editusers from "./Components/Editusers" ;
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Homecrud/>
            <Routes>
                <Route element={<Createuser/>} path="/"/>
                <Route element={<User/>} path="/user"/>
                <Route element={<Editusers/>} path="/edit/:index" />
                
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default App