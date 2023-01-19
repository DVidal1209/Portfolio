import React, { useState } from "react"
import Navigation from "./Navigation";

function Header(props) {
    // console.log(props)
    return (
        <div style={{ backgroundColor: '#62929E' }}>
            <div className='container'>
                <header className='row' style={{ minHeight: 100, alignItems: "center" }}>
                    <h1 className='col-6'>Daniel Vidal</h1>
                    <div className='col-6'>
                        <Navigation { ...props }/>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header;