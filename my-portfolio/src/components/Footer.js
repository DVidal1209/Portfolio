import React, { useState } from "react"

function Footer() {

    return (
        <div style={{ textAlign: "center", position: 'relative', bottom: 0, height: 100, backgroundColor: '#62929E', alignItems: 'center', display: 'flex' }}>
            <div class='container'>
            <a href="https://github.com/DVidal1209" style = {{ padding: 5 }}>
                <img style={{ height: 25 }} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674084018/github-mark-white_gpcgni.png" alt="GitHub Logo" />
            </a>
            <a href = "" style = {{ padding: 5 }}>
            <img style={{ height: 25 }} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674086590/LI-In-Bug_ayezvw.png" alt="LinkedIn Logo" /> 
            </a>
            </div>
        </div>
    )
}

export default Footer;