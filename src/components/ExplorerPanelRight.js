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
        const UIColorTwo = '#00b5ff';
        return ( 
            <section className="panelContainer">
                <div className="panelHeader"><span>Asset</span> Control</div>
                <div className="panelBody">
                    <div className="panelList one">
                    <img src={factory} className="panelIcons"alt=""/>
                    <span className="panelListName">Factory Name</span>
                    <img src={arrow} className="arrow down"alt=""/>
                    </div>
                   
                    <div className="panelList two">
                    <img src={machine} className="panelIcons"alt=""/>
                    <span className="panelListName opacity">Machine Title</span>
                    <img src={arrow} className="arrow up" alt=""/>
                    </div>
                    
                    <div className="panelList three">
                    <img src={machine} className="panelIcons"alt=""/>
                    <span className="panelListName Textblue">Machine Title</span>
                    <img src={arrow} className="arrow down"alt=""/>
                    </div>

                    <div className="panelList sensorTitle five flex">
                    <img src={sensor} className="panelIcons"alt=""/>
                    <span className="sensorTitleText Textblue">Sensor Title</span>
                    <Switch className="toggleButton"
                            onChange={this.handleChange}
                            checked={this.state.checked}
                            height={19}
                            width={42}
                            onColor={UIColorTwo}
                            uncheckedIcon={false} />
                    </div>
                    <div className="panelList sensorTitle five flex">
                    <img src={sensor} className="panelIcons"alt=""/>
                    <span className="sensorTitleText Textblue">Sensor Title</span>
                    <Switch className="toggleButton"
                            onChange={this.handleChange} 
                            checked={this.state.checked}
                            height={19}
                            width={42}
                            onColor={UIColorTwo}
                            uncheckedIcon={false} />
                    </div>
                    <div className="panelList sensorTitle five flex opacity">
                    <img src={sensor} className="panelIcons"alt=""/>
                    <span className="sensorTitleText">Sensor Title</span>
                    <Switch className="toggleButton"
                            onChange={this.handleChange} 
                            checked={this.state.checked}
                            height={19}
                            width={42}
                            onColor={UIColorTwo}
                            uncheckedIcon={false} />
                    </div>
        
                    
                </div>
                <button className="panelButton">Export</button>
            </section>
         );
    }
}
 
export default ExplorerPanelRight;