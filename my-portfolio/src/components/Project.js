import React, { useState } from "react"

function Project() {
    const [hoverAesthetics, setHoverAesthetics] = useState(false);

    const handleAestheticsEnter = () => {
        setHoverAesthetics(true);
    };
    const handleAestheticsLeave = () => {
        setHoverAesthetics(false);
    };

    const [hoverWeather, setHoverWeather] = useState(false);

    const handleWeatherEnter = () => {
        setHoverWeather(true);
    };
    const handleWeatherLeave = () => {
        setHoverWeather(false);
    };

    const [hoverCars, setHoverCars] = useState(false);

    const handleCarsEnter = () => {
        setHoverCars(true);
    };
    const handleCarsLeave = () => {
        setHoverCars(false);
    };

    const [hoverArt, setHoverArt] = useState(false);

    const handleArtEnter = () => {
        setHoverArt(true);
    };
    const handleArtLeave = () => {
        setHoverArt(false);
    };

    const styles = {
        img: {
            width: '100%',
            border: '0.5%'
        },
        imgWrap: {
            position: 'relative',
            marginBottom: "10px"
        },
        imgDescriptionAes: {
            position: 'absolute',
            height: '100%',
            paddingTop: '30%',
            paddingLeft: '2%',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            maxWidth: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'lightblue',
            visibility: hoverAesthetics ? 'visible' : 'hidden',
            opacity: hoverAesthetics ? '1' : '0',
            fontSize: '125%',
            fontWeight: 'bold'
        },
        imgDescriptionWeather: {
            position: 'absolute',
            height: '100%',
            paddingTop: '30%',
            paddingLeft: '2%',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            maxWidth: '100%',
            background: 'rgba(0, 0, 0, 0.4)',
            color: 'lightblue',
            visibility: hoverWeather ? 'visible' : 'hidden',
            opacity: hoverWeather ? '1' : '0',
            fontSize: '125%',
            fontWeight: 'bold'
        },
        imgDescriptionCars: {
            position: 'absolute',
            height: '100%',
            paddingTop: '30%',
            paddingLeft: '2%',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            maxWidth: '100%',
            background: 'rgba(0, 0, 0, 0.4)',
            color: 'lightblue',
            visibility: hoverCars ? 'visible' : 'hidden',
            opacity: hoverCars ? '1' : '0',
            fontSize: '125%',
            fontWeight: 'bold'
        },imgDescriptionArt: {
            position: 'absolute',
            height: '100%',
            paddingTop: '30%',
            paddingLeft: '2%',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            maxWidth: '100%',
            background: 'rgba(0, 0, 0, 0.4)',
            color: 'lightblue',
            visibility: hoverArt ? 'visible' : 'hidden',
            opacity: hoverArt ? '1' : '0',
            fontSize: '125%',
            fontWeight: 'bold'
        },
        linkStyle: {
            textDecoration: 'none'
        }
    }

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column'}}>
                <h2>Projects</h2>
            <div className="row">
                <div style={styles.imgWrap}
                    onMouseEnter={handleAestheticsEnter}
                    onMouseLeave={handleAestheticsLeave}
                    className="col-5">
                    <img style={styles.img} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674074536/Aesthetic_20Search_20Engine_nsmzls.png" alt="Aesthetic Search Engine Screenshot" />
                    <div style={styles.imgDescriptionAes}>
                        <p>
                            <a style={styles.linkStyle} href="https://dvidal1209.github.io/project-1/">
                                Aesthetic Search Engine
                            </a>
                            <a href="https://github.com/DVidal1209/project-1">
                                <img style={{ height: 25 }} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674084018/github-mark-white_gpcgni.png" alt="GitHub Logo" />
                            </a>
                            <br></br>
                            Javascript/HTML/CSS
                        </p>
                    </div>
                </div>
                <div className='col-2'></div>
                <div style={styles.imgWrap}
                    onMouseEnter={handleWeatherEnter}
                    onMouseLeave={handleWeatherLeave}
                    className="col-5">
                    <img style={styles.img} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674075936/06-server-side-apis-homework-demo_xmkygh.png" />
                    <div style={styles.imgDescriptionWeather}>
                        <p>
                            <a style={styles.linkStyle} href="https://dvidal1209.github.io/weather-call/">
                                Weather Forecast
                            </a>
                            <a href="https://github.com/DVidal1209/weather-call">
                                <img style={{ height: 25 }} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674084018/github-mark-white_gpcgni.png" alt="GitHub Logo" />
                            </a>
                            <br></br>
                            Javascript/Accuweather API/HTML
                        </p>
                    </div>
                </div>
                <div style={styles.imgWrap}
                    onMouseEnter={handleCarsEnter}
                    onMouseLeave={handleCarsLeave}
                    className="col-5">
                    <img style={styles.img} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674083480/My_project_d3uney.png" />
                    <div style={styles.imgDescriptionCars}>
                        <p>
                            <a style={styles.linkStyle} href="https://floating-river-45182.herokuapp.com/">
                                Cars-R-Us
                            </a>
                            <a href="https://github.com/xiaojing168jmg168/cars-r-us">
                                <img style={{ height: 25 }} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674084018/github-mark-white_gpcgni.png" alt="GitHub Logo" />
                            </a>
                            <br></br>
                            Node.js/Handlebars/Sequelize
                        </p>
                    </div>
                </div>
                <div className='col-2'></div>
                <div style={styles.imgWrap}
                    onMouseEnter={handleArtEnter}
                    onMouseLeave={handleArtLeave}
                    className="col-5">
                    <img style={styles.img} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1675905331/My_project_1_nlyeq0.png" alt="Back End Burglars Art Museum" />
                    <div style={styles.imgDescriptionArt}>
                        <p>
                            <a style={styles.linkStyle} href="https://protected-shore-90563.herokuapp.com/">
                                Art Museum
                            </a>
                            <a href="https://github.com/DVidal1209/art-museum">
                                <img style={{ height: 25 }} src="https://res.cloudinary.com/dfe0rjexj/image/upload/v1674084018/github-mark-white_gpcgni.png" alt="GitHub Logo" />
                            </a>
                            <br></br>
                            React/MongoDB/GraphQL/JWT
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project;
