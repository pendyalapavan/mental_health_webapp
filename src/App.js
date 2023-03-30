import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Products from "./pages/products";
import Podcasts from "./pages/podcasts";
import Community from "./pages/community";
import Appointment from "./pages/appointment";
import Blogs from "./pages/Blogs";


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {
  return (
    <Router>
      <Navbar fixed="top" />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/products" exact element={<Products/>} />
        <Route path="/podcasts" exact element={<Podcasts/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
      
      <Footer fixed="bottom" />
    </Router>
    
  );
  
}



export default App;
