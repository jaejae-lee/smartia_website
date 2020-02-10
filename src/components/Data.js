import React, { Component } from 'react';
import MainUIsSmall from './MainUIsSmall';
import data2 from '../img/data2.png';
import data3 from '../img/data3.png';
import ExplorerVisual from './ExplorerVisual';
import ExplorerPanelRight from './ExplorerPanelRight';
import ExplorerPanelLeft from './ExplorerPanelLeft';

class Data extends Component {

    render() { 
        return (
            <>
            <section className="dataCompContainer flex">
                <ExplorerPanelRight/>
                <ExplorerVisual/>
                <ExplorerPanelLeft/>
            </section>
            <MainUIsSmall/>
            </>
        );
    }
}
 
export default Data;