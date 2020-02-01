import React, { Component } from 'react';
import Notifications from './Notifications';
  
  class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isNotificationsOpen: false
      }
      this.toggleNotificationsBar = this.toggleNotificationsBar.bind(this);
      this.closeNotificationsBar = this.closeNotificationsBar.bind(this);
    }
    toggleNotificationsBar () {
      this.setState({...this.state, isNotificationsOpen: !this.state.isNotificationsOpen});
    }
    closeNotificationsBar() {
      if (!this.state.isNotificationsOpen) return;
      this.setState ( {...this.state, isNotificationsOpen: false})
    }
    render() {
      return (
        <div className="notiContainer disable-select" tabIndex="0" onBlur={ this.closeNotificationsBar }>
          <Notifications toggleNotificationsBar={this.toggleNotificationsBar} open={this.state.isNotificationsOpen} />
        </div>
      )
    }
  }
  
  export default NavBar;


