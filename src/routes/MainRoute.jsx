import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { LoginSignup } from "../pages/loginSignup"
import { AddPost } from "../pages/addPost"
import { Profile } from "../pages/profile"
import { Explore } from "../pages/explore"

export const MainRoutes=()=>{
    return(
        <Routes>
            <Route path="/"element={<Home/>} />
            <Route path="/loginsignup"   element={<LoginSignup/>} /> 
            <Route path="/addpost"   element={<AddPost/>} /> 
            <Route path="/explore"   element={<Explore/>} /> 
            <Route path="/profile/:username"   element={<Profile/>} /> 
            
        </Routes>
    )
}