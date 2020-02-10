import React, { Component } from 'react';
import dataIcon from '../img/dataIcon.svg';
import icon1 from '../img/icon1.svg';
import icon2 from '../img/icon2.svg';
import icon3 from '../img/icon3.svg';
import icon4 from '../img/icon4.svg';
import icon5 from '../img/icon5.svg';
import { Link } from "react-router-dom";

class MainUIs extends Component {

    render() { 
        return (
            <>
            <section className="flex buttonGroup">
                <div className="buttonContainer highlight">
                    <button type="button"
                            className="buttonBg button">
                        <img src={icon2} className="dataIcon" alt="button for data page" />
                    </button>
                    <label className="buttonlabel">Account Settings</label>
                </div>
                <div className="buttonContainer highlight">
                <Link to="/data">
                    <button type="button"
                            className="buttonBg button">
                        <img src={dataIcon} className="dataIcon" alt="button for data page" />
                    </button>
                </Link>
                <label className="buttonlabel">Notifications</label>
                </div>
                <div className="buttonContainer highlight">
                    <button type="button"
                            className="buttonBg button">
                        <img src={icon4} className="dataIcon" alt="button for data page" />
                    </button>  
                    <label className="buttonlabel">Tickets</label>
                </div>  
                <div className="buttonContainer highlight"> 
                    <button type="button"
                            className="buttonBg button">
                        <img src={icon5} className="dataIcon" alt="button for data page" />
                    </button>
                    <label className="buttonlabel">Users/Groups</label>
                </div> 
                <div className="buttonContainer highlight">   
                    <button type="button"
                            className="buttonBg button">
                        <img src={icon3} className="dataIcon" alt="button for data page" />
                    </button>
                    <label className="buttonlabel">Connections</label> 
                </div> 
                <div className="buttonContainer highlight">  
                    <button type="button"
                            className="buttonBg button">
                        <img src={icon1} className="dataIcon" alt="button for data page" />
                    </button>
                    <label className="buttonlabel">System</label>
                </div> 
            </section>
            </>
        );
    }
}
 
export default MainUIs;