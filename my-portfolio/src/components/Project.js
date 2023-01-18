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
            width: '100%',
            border: '0.5%'
        },
        imgWrap: {
            position: 'relative',
            // maxWidth: '30%'
        },
        imgDescription: {
            position: 'absolute',
            height: '100%',
            paddingTop: '30%',
            paddingLeft: '2%',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            maxWidth: '100%',
            background: 'rgba(0, 0, 0, 0.1)',
            color: '#093',
            visibility: isHover ? 'visible' : 'hidden',
            opacity: isHover ? '1' : '0',
            fontSize: '125%',
            fontWeight: 'bold'
        },
        linkStyle: {
            textDecoration: 'none'
        }
    }

    return (
        <div class="container" style={{ display: 'flex' }}>
            <div style={styles.imgWrap}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                class="col-5">
                <img style={styles.img} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674074536/Aesthetic_20Search_20Engine_nsmzls.png" alt = "Aesthetic Search Engine Screenshot" />
                <div style={styles.imgDescription}>
                    <p>
                        <a style = {styles.linkStyle} href="https://dvidal1209.github.io/project-1/">
                            Aesthetic Search Engine
                        </a>
                        <a href="https://github.com/DVidal1209/project-1">
                            <img style={{ height: 25 }} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674074894/github-mark_1_xtdjwg.png" alt = "GitHub Logo" />
                        </a>
                        <br></br>
                        Javascript/HTML/CSS
                    </p>
                </div>
            </div>
            <div class='col-2'></div>
            <div style={styles.imgWrap}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                class="col-5">
                <img style={styles.img} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674075936/06-server-side-apis-homework-demo_xmkygh.png" />
                <div style={styles.imgDescription}>
                    <p>
                        <a style = {styles.linkStyle} href="https://dvidal1209.github.io/weather-call/">
                            Weather Forecast
                        </a>
                        <a href="https://github.com/DVidal1209/weather-call">
                            <img style={{ height: 25 }} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674074894/github-mark_1_xtdjwg.png" alt = "GitHub Logo" />
                        </a>
                        <br></br>
                        Javascript/Accuweather API/HTML
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project;