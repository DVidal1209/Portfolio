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
                I am a Full Stack Developer who recently earned a certificate in Full Stack Development from Case Western University, where I developed skills in Node.js, React.js, MongoDB and more.
                {"\n\n"}
                An innovative problem-solver passionate about developing apps. I have continued my studies independently to learn more about data streaming to the client
                {"\n\n"}
                I bring the following to every project: 
                {"\n"}
                • Problem-solving skills and perseverance 
                • A basic understanding of Restful API creation and implementation
                • Dedication to teamwork and flexible collaboration 
                • A foundational knowledge of agile software development principles
                </p>
                {"\n"}
            </div>
        </div>
    )
}

export default About;