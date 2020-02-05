import React, { Component } from 'react'
import floorPlan2 from '../img/floorPlan2.png';
import location from '../img/location.svg';
import floorPlan3 from '../img/floorPlan3.jpg';

class VideoMap extends Component {
    constructor(props){
        super(props);
        this.state={
            isShown: false,
        }
    }
    toggleShowThumbnail =() =>{
        this.setState({ isShown: !this.state.isShown })
    }

    render() { 
        let { isShown } = this.state;
        return (
            <>
            <img src={floorPlan2} className="floorPlan" alt=""/>
            <button className="locationButton locationIcon IconOne"
                    onMouseOver={ this.toggleShowThumbnail }
                    onMouseOut={ this.toggleShowThumbnail }
                    onClick={ this.props.onClick }
            >
                <img src={location} className="locationIcon IconOne locationIconSVG" alt=""/>
            </button>
            <img src={location} className="locationIcon IconTwo" alt=""/>
            <img src={location} className="locationIcon IconThree" alt=""/>
            <img src={location} className="locationIcon IconFour" alt=""/>
            { isShown ? 
            <div className="videoThumbnailContainer">
                <img src={floorPlan3} className="videoThumbnailImage" alt=""/>
            </div>
            : null }
            <section className="zones">
                <span className="zoneNumber">1</span>
                <span className="zoneName">Machine zone</span><br/>
                <span className="zoneNumber">2</span>
                <span className="zoneName">Engineering room A</span><br/>
                <span className="zoneNumber">3</span>
                <span className="zoneName">Engineering room B</span><br/>
                <span className="zoneNumber">4</span>
                <span className="zoneName">Main Zone</span><br/>
                <span className="zoneNumber">5</span>
                <span className="zoneName">Storage</span><br/>
            </section>
            </>
        );
    }
}
 
export default VideoMap;