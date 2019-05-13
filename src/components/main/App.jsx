import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Nav from '../template/Nav';
import Main from '../template/Main';
import Footer from '../template/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Use arrow key',
      nav: false,
      main: true,
      footer: false,
      index: 0,
    };

    ArrowKeysReact.config({
      left: () => {
        this.setState({
          content: 'left key detected.',
        });
      },
      right: () => {
        this.setState({
          content: 'right key detected.',
        });
      },
      up: () => {
        this.setState({
          content: 'up key detected.',
        });
      },
      down: () => {
        this.setState({
          content: 'down key detected.',
        });
      },
    });
  }

  render() {
    const { state } = this;

    return (
      <div className="app" {...ArrowKeysReact.events} tabIndex="1">
        <div>{state.content}</div>
        <Nav selected={state.nav} index={state.index} />
        <Main selected={state.main} index={state.index} />
        <Footer selected={state.footer} index={state.index} />
      </div>
    );
  }
}

export default App;
