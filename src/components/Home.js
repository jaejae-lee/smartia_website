import React, { Component } from 'react';
import logoIcon from '../img/logoIcon.png'
import MainUIs from './MainUIs';
import SearchBarNew from './SearchBarNew';

class Home extends Component {
    
    render() { 
        return (
            <>
            <section className="flex userContainer">
                <img src={logoIcon} className="logoIcon" alt="logo"/>
                <p className="userName">GOOD MORNING MAURO</p>
                <p className="date">MONDAY 12TH JANUARY 2020</p>
                <p className="time">09 : 47 AM</p>
            </section>
            <SearchBarNew/>
            <MainUIs/>
            </>
        );
    }
}
 
export default Home;