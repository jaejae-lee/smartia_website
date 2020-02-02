import React, { Component } from 'react';
import video2 from '../img/video2.gif';


class ExplorerVisualButtons extends Component {
    state = { 
        isChart: true,
        isVideoMap: false,
        isVideo: false,
        showData: false,
        showSplit:false,
        showHalf: false,
    }
    showChart = () => {
         this.setState({isChart:true, isVideoMap:false, isVideo:false})
     }
    showVideoMap = () => {
        this.setState({isChart:false, isVideoMap:true, isVideo:false})
    }
    showVideo = () => {
        this.setState({isVideo:true, isChart:false, isVideoMap:false})
    }
    showData = () => {
        this.setState({showData:!this.state.showData})
    }
    showSplit = () => {
        this.setState({showSplit:!this.state.showSplit})
    }
    showHalf = () => {
        this.setState({showHalf:!this.state.showHalf})
    }
    showMap = () => {
        this.setState({isChart:false, isVideoMap:!this.state.isVideoMap, isVideo:false})
    }
    render() { 
        return (  
            <div className="videoButtonContainer flex">
                <button className="videoButton buttonVideoSplit"
                        onClick={this.showMap}>Map</button>
                <button className="videoButton buttonVideoSplit"
                        onClick={this.showSplit}>Split</button>
                <button className="videoButton buttonShowData"
                        onClick={this.showData}>Data</button>
                <button className="videoButton buttonShowData"
                        onClick={this.showHalf}>Half</button>
            </div>
        );
    }
}
 
export default ExplorerVisualButtons;