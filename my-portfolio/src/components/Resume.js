import React, { useState } from "react"


function Resume () {


    return(
        <div className = "container">
                <h2>Resumé</h2>
            <p>
                You can find my Resume <a target="_blank"  href = "https://docs.google.com/document/d/e/2PACX-1vS_fHIiRQaywSRS_ng9EqLvDJhtJNVdgMPhAnLp1KKf4mdndZwo69npKgxrgVXGhx7DANdCMZi89sPS/pub">here</a>
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