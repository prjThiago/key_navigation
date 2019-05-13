import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import ReactDOM from 'react-dom';

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
      nav: false,
      main: true,
      footer: false,
      index: 0,
    };

    ArrowKeysReact.config({
      left: () => {
        let { state } = this;
        const { index } = state;
        const navDefault = {
          nav: true,
          main: false,
          footer: false,
          index: 0,
        };

        if (index === 0) {
          state = navDefault;
        } else if (state.main) {
          state = {
            nav: false,
            main: true,
            footer: false,
            index: 0,
          };
        } else if (state.footer) {
          state = {
            nav: false,
            main: false,
            footer: true,
            index: index - 1,
          };
        }

        this.setState(state);
      },
      right: () => {
        let { state } = this;
        const { index } = state;

        if (state.nav) {
          state = {
            nav: false,
            main: true,
            footer: false,
            index: 0,
          };
        } else if (state.main) {
          state = {
            nav: false,
            main: true,
            footer: false,
            index: 1,
          };
        } else if (state.footer) {
          if (index < 3) {
            state = {
              nav: false,
              main: false,
              footer: true,
              index: index + 1,
            };
          } else {
            state = {
              nav: false,
              main: false,
              footer: true,
              index: 3,
            };
          }
        }

        this.setState(state);
      },
      up: () => {
        let { state } = this;
        const { index } = state;
        const mainDefault = {
          nav: false,
          main: true,
          footer: false,
          index: 0,
        };

        if (state.nav) {
          state = {
            nav: true,
            main: false,
            footer: false,
            index: index > 0 ? index - 1 : index,
          };
        } else if (state.footer) {
          state = mainDefault;
        }

        this.setState(state);
      },
      down: () => {
        let { state } = this;
        const { index } = state;
        const footerDefault = {
          nav: false,
          main: false,
          footer: true,
          index: 0,
        };

        if (state.nav) {
          state = {
            nav: true,
            main: false,
            footer: false,
            index: index < 4 ? index + 1 : index,
          };
        } else if (state.main) {
          state = footerDefault;
        }

        this.setState(state);
      },
    });
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.main).focus();
  }

  render() {
    const { state } = this;

    return (
      <div className="app" {...ArrowKeysReact.events} tabIndex="1" ref="main">
        <Nav focused={state.nav} index={state.index} />
        <Main focused={state.main} index={state.index} railindex={state.footer} />
        <Footer focused={state.footer} index={state.index} />
      </div>
    );
  }
}

export default App;
