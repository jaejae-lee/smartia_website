import React, { Component } from 'react';

class ExplorerPanelLeft extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="panelContainer">
                <div className="panelHeader">Applied Matrics</div>
                <div className="panelBody">
                    <div className="panelList one"> Factory Name</div>
                    <div className="panelList two">Machine Title</div>
                    <div className="panelList three">Machine Title</div>
                    <div className="panelList sensorTitle five">Sensor Title</div>
                    <div className="panelList sensorTitle six">Sensor Title</div>
                    <div className="panelList sensorTitle seven">Sensor Title</div>
                </div>
                <button className="panelButton">Export</button>
            </section>
         );
    }
}
 
export default ExplorerPanelLeft;