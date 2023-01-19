import React, { useState } from "react"
import Header from "./Header";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact"
import Resume from "./Resume";

function Portfolio () {
    const [currentPage, setCurrentPage] = useState('About');
    const handlePageChange = (page) => setCurrentPage(page);

    if (currentPage === "About"){
        return (
            <div style = {{ minHeight : "86vh" }}>
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                <About />  
            </div>
        )
    }

    if (currentPage === "Portfolio"){
        return(
            <div style = {{ minHeight : "86vh" }}>
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                <Project />              
            </div>
        )
    }

    if (currentPage === "Contact"){
        return(
            <div style = {{ minHeight : "86vh" }}>
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                <Contact />             
            </div>
        )
    }

    if (currentPage === "Resume"){
        return(
            <div style = {{ minHeight : "86vh" }}>
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                <Resume />
            </div>
        )
    }

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <About />
            <Project />
            <Contact />
            <Resume />
        </div>
    )
}

export default Portfolio;