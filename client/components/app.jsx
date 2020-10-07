import React from 'react';
import Header from './header';
import OtherProfile from './other-profile';
import FrenRequestList from './fren-request-list';
// import Footer from './footer';
// import Messages from './message';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'otherProfile',
      params: {}
    };
  }

  render() {
    if (this.state.view === 'frenRequestList') {
      return (
        <>
          <Header text='Fren Requests'/>
          <FrenRequestList userId='6'/>
        </>
      );
    }

    if (this.state.view === 'otherProfile') {
      return (
        <>
          <Header text='Profile' />
          <OtherProfile />
        </>
      );
    }

  }
}
