import React, { Component } from 'react';
import MainUIsSmall from './MainUIsSmall';
import data2 from '../img/data2.png';
import data3 from '../img/data3.png';
import ExplorerVisual from './ExplorerVisual';
import ExplorerPanelRight from './ExplorerPanelRight';
import ExplorerPanelLeft from './ExplorerPanelLeft';

class Data extends Component {
    state = {  }
    render() { 
        return (
            <>
            <section className="dataCompContainer flex">
                {/* <img src={data2} className="dataComp dataCompRight" alt="data page" /> */}
                <ExplorerPanelRight/>
                <ExplorerVisual/>
                <ExplorerPanelLeft/>
                {/* <img src={data3} className="dataComp dataCompLeft" alt="data page" />  */}
            </section>
            <MainUIsSmall/>
            </>
        );
    }
}
 
export default Data;