import React, { Component } from 'react';
import data1 from '../img/data1.svg';
import data2 from '../img/data2.svg';
import data3 from '../img/data3.svg';
import data4 from '../img/data4.svg';

class DataOnVideo extends Component {
    state = {  }
    render() { 
        return (
            <>
            <div className="dataContainer flex">
                <img src={data1} className="dataOnVideo dataOne" alt=""/>
                <img src={data2} className="dataOnVideo dataTwo" alt=""/>
                <img src={data3} className="dataOnVideo dataThree" alt=""/>
                <img src={data4} className="dataOnVideo dataFour" alt=""/>
            </div>
            </>
          );
    }
}
 
export default DataOnVideo;


