import React, { Component } from 'react';
import video2 from '../img/video2.gif';
import chart from '../img/chart.svg';
import table from '../img/table.svg';
import image from '../img/image.svg';
import video from '../img/video.svg';
import data1 from '../img/data1.png';
import factory from '../img/factory.jpeg';
import DataOnVideo from './DataOnVideo';

class ExplorerVisual extends Component {
    state = { 
        isChart: true,
        isVideo: false,
        showData: false,
        showSplit:false,
        showHalf: false,
    }
    showChart = () => {
         this.setState({isChart:true, isVideo:false})
     }
    showVideo = () => {
        this.setState({isVideo:true, isChart:false})
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
    render() { 
        let { isChart,isVideo,showData,showSplit,showHalf } = this.state
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
                            onClick={this.showVideo}>
                        <img src={video} className="visualbuttonImg buttonVideo" alt=""/>
                        Live</button>
                </div>
                
                <div className="visualContainerBody">
                { isChart ? <img src={data1} className="chart"/> : null}
                { isVideo && !showSplit && !showHalf? 
                <>
                    <img src={video2} className="video"/> 
                    <div className="videoButtonContainer flex">
                        <button className="videoButton buttonVideoSplit"
                                onClick={this.showSplit}>Split</button>
                        <button className="videoButton buttonShowData"
                                onClick={this.showData}>Data</button>
                        <button className="videoButton buttonShowData"
                                onClick={this.showHalf}>Half</button>
                    </div>
                    { showData? <DataOnVideo/> : null }
                </>
                : isVideo && showSplit ?
                <>
                <section className="splitImageContainer flex">
                    <img src={factory} className="video splitImage"/> 
                    <img src={factory} className="video splitImage"/> 
                    <img src={factory} className="video splitImage"/> 
                    <img src={factory} className="video splitImage"/> 
                </section>
                <div className="videoButtonContainer flex">
                    <button className="videoButton buttonVideoSplit"
                            onClick={this.showSplit}>Split</button>
                    <button className="videoButton buttonShowData"
                            onClick={this.showData}>Data</button>
                    <button className="videoButton buttonShowData"
                             onClick={this.showHalf}>Half</button>
                </div>
                </>
                : isVideo && showHalf ?
                <>
                <section className="splitImageContainer flex">
                    <img src={factory} className="video halfImage"/>
                </section>
                <div className="videoButtonContainer flex">
                    <button className="videoButton buttonVideoSplit"
                            onClick={this.showSplit}>Split</button>
                    <button className="videoButton buttonShowData"
                            onClick={this.showData}>Data</button>
                    <button className="videoButton buttonShowHalf"
                             onClick={this.showHalf}>Half</button>
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