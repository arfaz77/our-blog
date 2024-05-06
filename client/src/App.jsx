import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
// import About from "./pages/about"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboaed from "./pages/Dashboaed"

export default function Main() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/About" element={<About/>}/> */}
            <Route path="/Sign-in" element={<Signin/>}/>
            <Route path="/Sign-up" element={<Signup/>}/>
            <Route path="/Dashboard" element={<Dashboaed/>}/>
        </Routes>
    </BrowserRouter>
  )
}
