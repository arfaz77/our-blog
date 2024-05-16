import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"

import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboaed from "./pages/Dashboaed"
import Header from "./components/Header"
import { About } from "./pages/about"
import FooterComp from "./components/Footer"
import PrivateRoute from "./components/PriavateRout"

export default function Main() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-in" element={<Signin/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route path="/about" element={<About/>}/>
            <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboaed />} />
        </Route>
        </Routes>
        <FooterComp/>
    </BrowserRouter>
  )
}
