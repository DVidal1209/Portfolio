import React, { useState } from "react"
function About() {
    return (
        <div className='container'>
            <div style={{ whiteSpace: 'pre-wrap' }}>
                {"\n\n"}
                <h2>About Me</h2>
                {"\n\n"}
                <img style={{ height: 200, borderRadius: '50%' }} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674069290/IMG_1005_kwc7iq.jpg" id="daniel-vidal-image" />
                {"\n\n"}
                <p>
                    Hi, I'm Daniel Vidal, Web-Developer looking to expand my horizons.
                    {"\n\n"}
                    I am currently taking part in a full Stack Web Development course at the Case Western Reserve University.
                </p>
                {"\n"}
            </div>
        </div>
    )
}

export default About;