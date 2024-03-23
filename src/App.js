import React from "react";
import { BrowserRouter, Routes , Route  } from "react-router-dom";
import Skills from "./compenent/Skills";
import Header from "./compenent/header";
import Contact from "./compenent/Contact";
import Portfolio from "./compenent/Portfolio";
// import Nav from "./compenent/Nav";



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />
      {/* <Route path="/Nav" element={<Nav/>} /> */}
      
    </Routes>
    </BrowserRouter>
    {/* <NavBar />
    <Header /> */}
    </>

  );
}

export default App;
