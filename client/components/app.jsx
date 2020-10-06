import React from 'react';
import Header from './header';
import FrenRequestList from './fren-request-list';
// import Footer from './footer';
// import Messages from './message';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'frenRequestList',
      params: {}
    };
  }

  render() {
    if (this.state.view === 'frenRequestList') {
      return (
        <>
          <Header />
          <FrenRequestList userId='6'/>
        </>
      );
    }

  }
}
