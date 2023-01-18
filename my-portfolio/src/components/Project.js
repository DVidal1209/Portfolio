import React, { useState } from "react"

function Project() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const styles = {
        img: {
            width: '300px',
        },
        imgWrap: {
            position: 'relative',
            maxWidth: '30%'
        },
        imgDescription: {
            position: 'absolute',
            top: '35%',
            bottom: '0',
            left: '10%',
            right: '0',
            background: 'rgba(0, 0, 0, 0.2)',
            color: '#fff',
            visibility: isHover ? 'visible' :  'hidden',
            opacity: isHover ? '1' : '0'
        }
    }

    return (
        <div style={styles.imgWrap} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        class = "container">
            <img style = { styles.img } src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674069290/IMG_1005_kwc7iq.jpg" />
            <p style={styles.imgDescription}>This image looks super neat.</p>
        </div>
    )
}

export default Project;