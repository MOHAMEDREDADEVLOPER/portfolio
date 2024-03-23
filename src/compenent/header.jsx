import React from 'react';//, { useState, useEffect }
import "../css/header.css";
import NavBar from "./Navbar";

export default function Header() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'pdfs/MohamedRedaHachoumCv.pdf'; 
        link.download = 'MohamedRedaHachoumCv.pdf'; 
        link.click();
    };
    return (
        <>
        <NavBar />
            <section>      
                <div className="container">
                    <div className="main">
                        <div className="detail">
                            <h3>Hi, I'm</h3>
                            <h1><span style={{ color: "#52489C" }}>M.Reda 
                            </span> Hachoum</h1>
                            <p>I'm a professional Web Developer. Our Main Goal to help & Satisficed the Local & Global Clients by
                                web development solutions
                            </p>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/mohamed-reda-hachoum-754482284/" style={{ "--socialAni": 1 }} target='blanck'><i className='bx bxl-linkedin'></i></a>
                                <a href="https://www.instagram.com/mc_reda_111/" style={{ "--socialAni": 2 }}><i className='bx bxl-instagram' target='blanck'></i></a>
                                <a href="https://github.com/MOHAMEDREDADEVLOPER" style={{ "--socialAni": 3 }}><i className='bx bxl-github' target='blanck'></i></a>
                                <a href="https://www.youtube.com/channel/UCjoKe9muFYJccVenAZZH_XA" style={{ "--socialAni": 4 }} target='blanck'><i className='bx bxl-youtube'></i></a>
                                <button className="downloadButton" onClick={handleDownload}>
                                Download My CV  
                                  <i className='bx bxs-download'></i>
                                </button>
                               </div>
                        </div>
                        <div className="images">
                            <img src="images/my.png" alt="" className="img-w" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

