import React, { Component } from 'react';
import data1 from '../img/data1.svg';
import data2 from '../img/data2.svg';
import data3 from '../img/data3.svg';
import data4 from '../img/data4.svg';
import data5 from '../img/data5.png';
import data6 from '../img/data6.svg';
import data7 from '../img/data7.svg';
import data8 from '../img/data8.svg';
import data9 from '../img/data9.svg';

class DataOnVideo extends Component {
    state = {  }
    render() { 
        return (
            <>
            <div className="dataContainer flex">
                <div className="dataBox one">
                    <img src={data1} className="dataOnVideo dataOne" alt=""/>
                    <img src={data5} className="dataOnVideo dataFive" alt=""/>
                    <img src={data7} className="dataOnVideo dataSeven" alt=""/>
                    <img src={data8} className="dataOnVideo dataEight" alt=""/>
                    
                </div>
                <div className="dataBox two">
                    <img src={data4} className="dataOnVideo dataFour" alt=""/>
                    <img src={data2} className="dataOnVideo dataTwo" alt=""/>
                    <img src={data3} className="dataOnVideo dataThree" alt=""/>
                    <img src={data6} className="dataOnVideo dataSix" alt=""/>
                    <img src={data9} className="dataOnVideo dataNine" alt=""/>
                </div>
            </div>
            </>
          );
    }
}
 
export default DataOnVideo;


