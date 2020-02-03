import React, { Component } from 'react';
import { InputGroup } from 'react-bootstrap';
import searchIcon from '../img/searchIcon.svg';

class ExplorerPanelLeft extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="panelContainer">
                <div className="panelHeader"><span>Applied</span> Matrics</div>
            
                <div className="panelBody">
                    <div className="panelTop">
                        <div className="panelTopHeader">Selected Matrics</div>
                        <div className="panelList one panelWcheckBox flex">
                            <InputGroup.Checkbox className="panelCheckBox" aria-label="Checkbox for following text input"/>
                            <div>
                                <p className="title titleOne">Active Matrics Title Here</p>
                                <p className="detail">Additional details here</p>
                            </div>
                            <span className="dot titleOneDot"></span>
                        </div>
                        <div className="panelList one panelWcheckBox flex">
                            <InputGroup.Checkbox className="panelCheckBox" aria-label="Checkbox for following text input"/>
                            <div>
                                <p className="title titleTwo">Active Matrics Title Here</p>
                                <p className="detail">Additional details here</p>
                            </div>
                            <span className="dot titleTwoDot"></span>
                        </div>
                        <div className="panelList one panelWcheckBox flex">
                            <InputGroup.Checkbox className="panelCheckBox" aria-label="Checkbox for following text input"/>
                            <div>
                                <p className="title titleThree">Active Matrics Title Here</p>
                                <p className="detail">Additional details here</p>
                            </div>
                            <span className="dot titleThreeDot"></span>
                        </div>
                    </div>
    
                    <div className="panelBottom">
                        <div className="panelTopHeader">Available Matrics</div>
                        <div className="panelSearchBarContainer flex">
                            <img src={searchIcon} className="searchIcon searchIconSmall" alt="search icon"/> 
                            <input className="panelSearchBar"/>
                        </div>
                        <div className="panelList one panelWcheckBox flex inActive">
                            <InputGroup.Checkbox className="panelCheckBox" aria-label="Checkbox for following text input"/>
                            <div>
                                <p className="title">Inactive Matrics Title Here</p>
                                <p className="detail">Additional details here</p>
                            </div>
                            <span className="dot"></span>
                        </div>
                        <div className="panelList one panelWcheckBox flex inActive">
                            <InputGroup.Checkbox className="panelCheckBox" aria-label="Checkbox for following text input"/>
                            <div>
                                <p className="title">Inactive Matrics Title Here</p>
                                <p className="detail">Additional details here</p>
                            </div>
                            <span className="dot"></span>
                        </div>
                        <div className="panelList one panelWcheckBox flex inActive">
                            <InputGroup.Checkbox className="panelCheckBox" aria-label="Checkbox for following text input"/>
                            <div>
                                <p className="title">Inactive Matrics Title Here</p>
                                <p className="detail">Additional details here</p>
                            </div>
                            <span className="dot"></span>
                        </div>
                        <div className="panelList one panelWcheckBox flex inActive">
                            <InputGroup.Checkbox className="panelCheckBox" aria-label="Checkbox for following text input"/>
                            <div>
                                <p className="title">Inactive Matrics Title Here</p>
                                <p className="detail">Additional details here</p>
                            </div>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default ExplorerPanelLeft;