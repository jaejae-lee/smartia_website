import React, { Component } from 'react';

class ExplorerPanelRight extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="panelContainer">
                <div className="panelHeader">Asset Control</div>
                <div className="panelBody">
                    <div className="panelList"> Factory Name</div>
                    <div className="panelList">Machine Title</div>
                    <div className="panelList">Machine Title</div>
                    <div className="panelList">Sensor Title</div>
                    <div className="panelList">Sensor Title</div>
                    <div className="panelList">Sensor Title</div>
                </div>
                <button className="panelButton">Export</button>
            </section>
         );
    }
}
 
export default ExplorerPanelRight;