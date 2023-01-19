import React, { useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact"
import Resume from "./Resume";

function Portfolio () {
    return (
        <div>
            <Header />
            <About />
            <Project />
            <Contact />
            <Resume />
            <Footer />
        </div>
    )
}

export default Portfolio;