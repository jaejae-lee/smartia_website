import React, { Component } from 'react'
import floorPlan from '../img/floorPlan.jpg';
import floorPlan3 from '../img/floorPlan3.jpg';
import floorPlan2 from '../img/floorPlan2.png';
import location from '../img/location.svg';

class VideoMap extends Component {
    constructor(props){
        super(props);
        this.state={
            isShown: true,
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
                <img src={location} className="locationIcon IconOne" alt=""/>
            </button>
            { isShown ? 
            <div className="videoThumbnailContainer">
                <p className="videoThumbnail">Video Thumbnail here</p>
            </div>
            : null }
            <section className="zones">
                <span className="zoneNumber">1</span>
                <span className="zoneName">Machine zone</span><br/>
                <span className="zoneNumber">2</span>
                <span className="zoneName">Engineering room</span><br/>
                <span className="zoneNumber">3</span>
                <span className="zoneName">Main zone</span><br/>
                <span className="zoneNumber">4</span>
                <span className="zoneName">Storage</span><br/>
            </section>
            </>
        );
    }
}
 
export default VideoMap;