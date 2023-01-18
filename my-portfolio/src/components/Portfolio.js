import React, { useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Project from "./Project";

function Portfolio () {
    return (
        <main>
            <Header />
            <About />
            <Project />
            <Footer />
        </main>
    )
}

export default Portfolio;