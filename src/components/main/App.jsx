import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Nav from '../template/Nav';
import Main from '../template/Main';
import Footer from '../template/Footer';

export default props => (
  <div className="app">
    <Nav />
    <Main />
    <Footer />
  </div>
);
