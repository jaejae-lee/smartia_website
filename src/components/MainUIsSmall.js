import React, { Component } from 'react';
import dataIcon from '../img/dataIcon.svg';
import icon1 from '../img/icon1.svg';
import icon2 from '../img/icon2.svg';
import icon3 from '../img/icon3.svg';
import icon4 from '../img/icon4.svg';
import icon5 from '../img/icon5.svg';
import icon6 from '../img/icon6.svg';
import { Link } from "react-router-dom";

class MainUIs extends Component {

    render() { 
        return (
            <>
            <section className="flex buttonGroup buttonGroupSmall">
                <div className="buttonContainer highlight buttonContainerSmall">
                <Link to="/">
                    <button type="button"
                            className="buttonBg button buttonSmall">
                        <img src={icon6} className="dataIcon" alt="button for data page" />
                    </button>
                </Link>
                </div>
                <div className="buttonContainer highlight buttonContainerSmall">
                    <button type="button"
                            className="buttonBg button buttonSmall">
                        <img src={icon2} className="dataIcon" alt="button for data page" />
                    </button>
                </div>
                <div className="buttonContainer highlight buttonContainerSmall">
                <Link to="/data">
                    <button type="button"
                            className="buttonBg button buttonSmall">
                        <img src={dataIcon} className="dataIcon" alt="button for data page" />
                    </button>
                </Link>
                </div>
                <div className="buttonContainer highlight buttonContainerSmall">
                    <button type="button"
                            className="buttonBg button buttonSmall">
                        <img src={icon4} className="dataIcon" alt="button for data page" />
                    </button>  
                </div>  
                <div className="buttonContainer highlight buttonContainerSmall">     
                    <button type="button"
                            className="buttonBg button buttonSmall">
                        <img src={icon5} className="dataIcon" alt="button for data page" />
                </button>
                </div> 
                <div className="buttonContainer highlight buttonContainerSmall">     
                    <button type="button"
                            className="buttonBg button buttonSmall">
                        <img src={icon3} className="dataIcon" alt="button for data page" />
                    </button>
                </div> 
                <div className="buttonContainer highlight buttonContainerSmall">  
                    <button type="button"
                            className="buttonBg button buttonSmall">
                        <img src={icon1} className="dataIcon" alt="button for data page" />
                    </button>
                </div> 
            </section>
            </>
        );
    }
}
 
export default MainUIs;