import React, { Component } from 'react';
import LayoutWrapper from 'admin-lte-react/LayoutWrapper';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Controlbar from './layout/Controlbar';

import SimplePage from './pages/SimplePage';

class App extends Component {
  render() {
    return (
      <LayoutWrapper color="red">
        <Header />
        <Sidebar />
        <SimplePage />
        <Footer />
        <Controlbar />
      </LayoutWrapper>
    );
  }
}

export default App;
