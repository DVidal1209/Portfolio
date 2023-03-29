import React from "react"

function Navigation(props) {
    const { handlePageChange } = props
    const styles = {
        a: {
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'black'
        }
    }

    return (
        <nav style={{ display: 'flex' }}>
            <a href = "#About" style={styles.a} onClick={() => handlePageChange("About")} className='col'>About Me</a>
            <a href = "#Portfolio" style={styles.a} onClick={() => handlePageChange("Portfolio")} className='col'>Projects</a>
            <a href = "#Contact" style={styles.a} onClick={() => handlePageChange("Contact")} className='col'>Contact</a>
            <a href = "#Resume" style={styles.a} onClick={() => handlePageChange("Resume")} className='col'>Resume</a>
        </nav>
    )
}

export default Navigation;