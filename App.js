import React, { Component } from 'react';
import AllStackContainer from './Navigation/AllStackContainer';
import { Provider } from 'react-redux';
import store from './Store';

export default class App extends Component {
  render(){
    return (
      <Provider store = { store }>
        <AllStackContainer />
      </Provider>
    );
  }
};