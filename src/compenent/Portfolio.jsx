import React from "react";
import Navbar from "./Navbar";
import "../css/Portfolio.css";

export default function Portfolio() {
    return (
        <>
            <Navbar />
            <section>
                <h1>My Project</h1>
                <div className="cards">
                    <div className="card" >
                        <img src="projects/Cards · Bootstrap v5.3 - Google Chrome 2024-02-29 5_45_15 PM.png" className="card-img-top" alt="Project" />
                        <div className="card-body">
                        <h5 className="card-title">PDF BAC</h5>
                        <div className="button-group ">
                        <button type="button" class="custom-btn">Laravel</button>
                        <button type="button" class="custom-btn">Bootstrap</button>
                        </div>
                            <p className="card-text">Bac Pdf project is a project that has laravel and bootstrap in the code, but for this project,
                                the comuniter share a pdf with another student </p>
                            <a href="https://github.com/MOHAMEDREDADEVLOPER/BacPdf-project-laravel" className=""><img src="projects/eye.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="projects/maxresdefault.jpg" className="card-img-top" alt="Project" />
                        <div className="card-body">
                        <h5 className="card-title">React Application</h5>
                        <div className="button-group ">
                        <button type="button" class="custom-btn">React</button>
                        <button type="button" class="custom-btn">Bootstrap</button>
                        </div>
                            <p className="card-text">React project uses recursion toolkit and all hooks like (use effect, use state ...)</p>
                            <a href="https://github.com/MOHAMEDREDADEVLOPER/project-react/tree/master" className=""><img src="projects/eye.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="projects/ecommerce-web-page-concept-illustration_114360-8204.avif" className="card-img-top" alt="Project" />
                        <div className="card-body">
                        <h5 className="card-title">Project Front End</h5>
                        <div className="button-group ">
                        <button type="button" class="custom-btn">Html</button>
                        <button type="button" class="custom-btn">Css</button>
                        <button type="button" class="custom-btn">Bootstrap</button>
                        </div>
                            <p className="card-text">Project E-commerce </p>
                            <a href="https://github.com/MOHAMEDREDADEVLOPER/Project-Html-css-bootstrap/tree/master" className=""><img src="projects/eye.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="projects/vecteezy_close-up-business-woman-using-calculator-and-laptop-for-do_2448547.jpg" className="card-img-top" alt="Project" />
                        <div className="card-body">
                        <div className="button-group ">
                        <h5 className="card-title">Calculatrice</h5>
                        </div>
                        <button type="button" class="custom-btn">Python</button>
                            <p className="card-text"> calculator project using Python's Tkinter library</p>
                            <a href="https://github.com/MOHAMEDREDADEVLOPER/calucatrice-with-python" className=""><img src="projects/eye.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="projects/WhatsApp Image 2024-02-29 at 18.15.19.jpeg" className="card-img-top" alt="Project" />
                        <div className="card-body">
                        <h5 className="card-title">Ecommerce </h5>
                        <div className="button-group ">
                        <button type="button" class="custom-btn">Html</button>
                        <button type="button" class="custom-btn">Css</button>
                        <button type="button" class="custom-btn">Java Script</button>
                        <button type="button" class="custom-btn">Bootstrap</button>
                        <button type="button" class="custom-btn">PHP</button>
                        </div>
                            <p className="card-text"> Ecommerce project with php and (,,css,bootstrap,jquery)</p>
                            <a href="https://github.com/MOHAMEDREDADEVLOPER/Project-PHP/tree/master" className=""><img src="projects/eye.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
