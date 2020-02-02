import React, { Component } from 'react';
import Switch from "react-switch";
import factory from '../img/factory.svg'
import sensor from '../img/sensor.svg'
import machine from '../img/machine.svg'
import arrow from '../img/arrow.svg'

class ExplorerPanelRight extends Component {
    constructor(props){
        super(props);
        this.state = { 
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(checked) {
        this.setState({ checked });
    }
    render() { 
        return ( 
            <section className="panelContainer">
                <div className="panelHeader">Asset Control</div>
                <div className="panelBody">
                    <div className="panelList one">
                    <img src={factory} className="panelIcons"alt=""/>
                    <span className="panelListName">Factory Name</span>
                    <img src={arrow} className="arrow"alt=""/>
                    </div>
                   
                    <div className="panelList two">
                    <img src={machine} className="panelIcons"alt=""/>
                    <span className="panelListName">Machine Title</span>
                    <img src={arrow} className="arrow"alt=""/>
                    </div>
                    
                    <div className="panelList three">
                    <img src={machine} className="panelIcons"alt=""/>
                    <span className="panelListName">Machine Title</span>
                    <img src={arrow} className="arrow"alt=""/>
                    </div>

                    <div className="panelList sensorTitle five">
                    <img src={sensor} className="panelIcons"alt=""/>Sensor Title
                    <Switch className="toggleButton"
                            onChange={this.handleChange} 
                            checked={this.state.checked} />
                    </div>
                    <div className="panelList sensorTitle five">
                    <img src={sensor} className="panelIcons"alt=""/>Sensor Title
                    <Switch className="toggleButton"
                            onChange={this.handleChange} 
                            checked={this.state.checked} />
                    </div>
                    <div className="panelList sensorTitle five">
                    <img src={sensor} className="panelIcons"alt=""/>Sensor Title
                    <Switch className="toggleButton"
                            onChange={this.handleChange} 
                            checked={this.state.checked} />
                    </div>
        
                    
                </div>
                <button className="panelButton">Export</button>
            </section>
         );
    }
}
 
export default ExplorerPanelRight;