import React, { useState } from "react"

function Navigation() {

    return (
        <nav style={{ display: 'flex'}}>
            <button style ={{  background: 'none', border: 'none', cursor: 'pointer' }} class = 'col'>About Me</button>
            <button style ={{  background: 'none', border: 'none', cursor: 'pointer' }} class = 'col'>Portfolio</button>
            <button style ={{  background: 'none', border: 'none', cursor: 'pointer' }} class = 'col'>Contact</button>
            <button style ={{  background: 'none', border: 'none', cursor: 'pointer' }} class = 'col'>Resume</button>
        </nav>
    )
}

export default Navigation;