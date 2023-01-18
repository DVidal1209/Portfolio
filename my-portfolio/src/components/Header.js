import React, { useState } from "react"
import Navigation from "./Navigation";

function Header() {
    return (
        <div style={{ backgroundColor: '#62929E' }}>
            <div class='container'>
                <header class='row' style={{ minHeight: 100, alignItems: "center" }}>
                    <h1 class='col-6'>Daniel Vidal</h1>
                    <div class='col-6'>
                        <Navigation />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header;