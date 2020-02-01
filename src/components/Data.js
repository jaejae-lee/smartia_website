import React, { Component } from 'react';
import MainUIsSmall from './MainUIsSmall';
import data2 from '../img/data2.png';
import data3 from '../img/data3.png';
import ExplorerVisual from './ExplorerVisual';

class Data extends Component {
    state = {  }
    render() { 
        return (
            <>
            <section className="dataCompContainer">
                <ExplorerVisual/>
                <img src={data2} className="dataComp dataCompRight" alt="data page" />
                <img src={data3} className="dataComp dataCompLeft" alt="data page" /> 
            </section>
            <MainUIsSmall/>
            </>
        );
    }
}
 
export default Data;