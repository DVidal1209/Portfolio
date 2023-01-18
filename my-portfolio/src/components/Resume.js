import React, { useState } from "react"


function Resume () {


    return(
        <div class = "container">
            <p>
                You can download my Resume <a href = "" download>here</a>
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
            </p>
        </div>
    )
}

export default Resume