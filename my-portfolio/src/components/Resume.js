import React, { useState } from "react"


function Resume () {


    return(
        <div className = "container">
                <h2>Resumé</h2>
            <p>
                You can download my Resume <a href = "./Daniel-Vidal.pdf" download>here</a>
            </p>
                <h4>Front-End Technologies</h4>
                <ul>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h4>Back-End Technologies</h4>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL (Sequelize)</li>
                    <li>MongoDB (Mongoose)</li>
                </ul>
        </div>
    )
}

export default Resume