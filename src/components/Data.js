import React, { Component } from 'react';
import MainUIsSmall from './MainUIsSmall';
import data1 from '../img/data1.png';
import data2 from '../img/data2.png';
import data3 from '../img/data3.png';
import data4 from '../img/data4.png';
import ExplorerVisual from './ExplorerVisual';

class Data extends Component {
    state = {  }
    render() { 
        return (
            <>
            {/* <div className="dataCompContainer">
                <img src={data1} className="dataComp" alt="data page" />  
                <img src={data2} className="dataComp" alt="data page" /> 
                <img src={data3} className="dataComp" alt="data page" /> 
                <img src={data4} className="dataComp" alt="data page" />
            </div>  */}
            <section className="dataCompContainer">
                <ExplorerVisual/>
            </section>
            <MainUIsSmall/>
            </>
        );
    }
}
 
export default Data;