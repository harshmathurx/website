import React from 'react'
import "./portfolio.scss";
function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Projects</h1>

            <div className="container">
                <a href="https://covid-19-tracker-399be.web.app/" target="_blank">
                    <div className="item">
                        <img src="https://raw.githubusercontent.com/harshmathurx/covid-19-tracker-web/main/Covid_tracker_sample.png" alt="" />
                        <h3>Covid-19 Tracker</h3>
                    </div>
                </a>

                <a href="https://clone-36782.web.app/" target="_blank">
                    <div className="item">
                        <img src="https://raw.githubusercontent.com/harshmathurx/amazon-clone-react/master/public/amazon-clone-react.png" alt="" />
                        <h3>Amazon Clone</h3>
                    </div>
                </a>

                <a href="https://crescendomusic.herokuapp.com/" target="_blank">
                    <div className="item">
                        <img src="https://raw.githubusercontent.com/harshmathurx/Crescendo/master/Crescendo.png" alt="" />
                        <h3>Crescendo</h3>
                    </div>
                </a>

                <a href="https://keeper-app-9e1d4.web.app/" target="_blank">
                    <div className="item" onClick="https://keeper-app-9e1d4.web.app/">
                        <img src="https://raw.githubusercontent.com/harshmathurx/keeper-app/main/keeper.png" alt="" />
                        <h3>Keeper App</h3>
                    </div>
                </a>


            </div>
        </div>
    )
}

export default Portfolio;
