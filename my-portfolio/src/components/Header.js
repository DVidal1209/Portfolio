import React, { useState } from "react"
import Navigation from "./Navigation";

function Header () {
    return (
        <header>
            <h1 class = 'col-4'>Daniel Vidal</h1>
            <div class = 'col-8'>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;