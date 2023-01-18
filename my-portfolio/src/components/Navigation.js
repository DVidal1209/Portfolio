import React, { useState } from "react"

function Navigation() {

    const styles = {
        button: {
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
        }
    }

    return (
        <nav style={{ display: 'flex' }}>
            <button style={styles.button} class='col'>About Me</button>
            <button style={styles.button} class='col'>Portfolio</button>
            <button style={styles.button} class='col'>Contact</button>
            <button style={styles.button} class='col'>Resume</button>
        </nav>
    )
}

export default Navigation;