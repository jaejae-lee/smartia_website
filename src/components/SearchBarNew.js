import React, { Component } from 'react';
import SearchBarInput from './SearchBarInput';
import searchIcon from '../img/searchIcon.svg';
  
  class SearchBarNew extends Component {
    constructor(props) {
      super(props);
      this.state = {
        // isNotificationsOpen: false,
        inputValue: "",
      }
      this.toggleNotificationsBar = this.toggleNotificationsBar.bind(this);
      this.closeNotificationsBar = this.closeNotificationsBar.bind(this);
      this.handleInput = this.handleInput.bind(this);
    }
    toggleNotificationsBar () {
      this.setState({...this.state, isNotificationsOpen: !this.state.isNotificationsOpen});
    }
    closeNotificationsBar() {
      if (!this.state.isNotificationsOpen) return;
      this.setState ( {...this.state, isNotificationsOpen: false})
    }
    handleInput(e){
      this.setState ({inputValue: e.target.value})
    }
    render() {
      return (
          <div className="notiContainer notiContainerNew disable-select searchBarInputContainer flex" 
              tabIndex="0" 
              onBlur={ this.closeNotificationsBar }>
          <SearchBarInput toggleNotificationsBar={this.toggleNotificationsBar} 
                            open={this.state.inputValue}
                            inputValue={this.state.inputValue}
                            onChange={this.handleInput}/>
          </div>
      )
    }
  }
  
  export default SearchBarNew;


