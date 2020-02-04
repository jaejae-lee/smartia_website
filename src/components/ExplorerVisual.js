import React, { Component } from 'react';
import videoGif from '../img/videoGif.gif';
import video2 from '../img/video2.gif';
import chart from '../img/chart.svg';
import table from '../img/table.svg';
import image from '../img/image.svg';
import video from '../img/video.svg';
import factory from '../img/factory.jpeg';
import DataOnVideo from './DataOnVideo';
import Chart from './Chart';
import VideoMap from './VideoMap';
import ExplorerVisualButtons from './ExplorerVisualButtons';
import map from '../img/map.svg';
import data from '../img/data.svg';
import split from '../img/split.svg';
import half from '../img/half.svg';
import full from '../img/full.svg';

class ExplorerVisual extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isChart: true,
            isVideoMap: false,
            isVideo: false,
            showData: false,
            showSplit:false,
            showHalf: false,
        }
    }
    showChart = () => {
         this.setState({isChart:true, isVideoMap:false, isVideo:false, showData: false, showSplit:false, showHalf: false })
     }
    showVideoMap = () => {
        this.setState({isChart:false, isVideoMap:true, isVideo:false,showData: false, showSplit:false, showHalf: false })
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
        this.setState({showHalf:!this.state.showHalf, showSplit:false })
    }
    showMap = () => {
        this.setState({isChart:false, isVideoMap:!this.state.isVideoMap, isVideo:false,showSplit:false, showHalf: false })
    }
    render() { 
        let { isChart,isVideo,showData,showSplit,showHalf,isVideoMap } = this.state;
        return (
            <section className="visualContainer">
                <div className="visualContainerHeader flex">
                    <button className="visualButton flex">
                        <img src={table} className="visualbuttonImg" alt=""/>
                        Table</button>
                    <button className="visualButton"
                            onClick={this.showChart}>
                        <img src={chart} className="visualbuttonImg buttonChart" alt=""/>
                        Chart</button>
                    <button className="visualButton">
                        <img src={image} className="visualbuttonImg" alt=""/>
                        Image</button>
                    <button className="visualButton"
                            onClick={this.showVideoMap}>
                        <img src={video} className="visualbuttonImg buttonVideo" alt=""/>
                        Live</button>
                </div>
                
                <div className="visualContainerBody">
                { isChart? <Chart/> : null }
                { isVideoMap?  <VideoMap onClick={this.showVideo}/> : null }
               
                { isVideo && !showSplit && !showHalf? 
                <>
                    <img src={video2} className="video"/> 
                    <div className="videoButtonContainer flex">
                        <button className="videoButton buttonVideoSplit"
                                onClick={this.showMap}>
                            <img src={map} className="videoButtonIcon" alt=""/>
                        </button>
                        <button className="videoButton buttonVideoSplit"
                                onClick={this.showSplit}>
                                <img src={split} className="videoButtonIcon" alt=""/>
                        </button> 
                        <button className="videoButton buttonShowData"
                                onClick={this.showHalf}>
                                <img src={half} className="videoButtonIcon" alt=""/>
                        </button>
                        <button className="videoButton buttonShowData"
                                onClick={this.showData}>
                                <img src={data} className="videoButtonIcon" alt=""/>
                        </button>
                    </div>
                    {/* <ExplorerVisualButtons /> */}
                    { showData? <DataOnVideo/> : null }
                </>
                : isVideo && showSplit ?
                <>
                <section className="splitImageContainer">
                    <div className="splitImageContainerTop flex">
                        <div>
                            <p>Machine room</p>
                            <img src={factory} className="splitImage"/>
                        </div>
                        <div>
                            <p>Engineering room</p> 
                            <img src={factory} className="splitImage"/> 
                        </div>
                    </div>
                    <div className="splitImageContainerBottom flex">
                        <div>
                            <p>Manufacturing room</p>
                            <img src={factory} className="splitImage"/> 
                            </div>
                        <div>
                            <p>Machine room</p>
                            <img src={factory} className="splitImage"/> 
                        </div>
                    </div>
                </section>
                <div className="videoButtonContainer flex">
                    <button className="videoButton buttonVideoSplit"
                                onClick={this.showMap}>
                        <img src={map} className="videoButtonIcon" alt=""/>
                    </button>
                    <button className="videoButton buttonVideoSplit"
                            onClick={this.showSplit}>
                        <img src={full} className="videoButtonIcon" alt=""/>
                    </button>
                    <button className="videoButton buttonShowData"
                            onClick={this.showHalf}>
                        <img src={half} className="videoButtonIcon" alt=""/>
                    </button>
                </div>
                </>
                : isVideo && showHalf ?
                <>
                <section className="halfImageContainer flex">
                    <img src={videoGif} className="halfImage"/>
                </section>
              
                <section className="halfChart">
                    <div className="halfChartContainer">
                        <Chart/>
                    </div>
                </section>
                
                <div className="videoButtonContainer flex">
                    <button className="videoButton buttonVideoSplit"
                                onClick={this.showMap}>
                        <img src={map} className="videoButtonIcon" alt=""/>
                    </button>
                    <button className="videoButton buttonVideoSplit"
                            onClick={this.showSplit}>
                        <img src={split} className="videoButtonIcon" alt=""/>
                    </button>
                    <button className="videoButton buttonShowData"
                            onClick={this.showHalf}>
                        <img src={full} className="videoButtonIcon" alt=""/>
                    </button>
                </div>
                </>
                :
                null }
                </div>
            </section>

          );
    }
}
 
export default ExplorerVisual;