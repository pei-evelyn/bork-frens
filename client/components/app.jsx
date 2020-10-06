import React from 'react';
import Header from './header';
// import Background from './background';
import Footer from './footer';
import Messages from './message';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      isLoading: true
    };
  }

  render() {
    return (
      <>
        <Header />
        <Messages />
        <Footer />
      </>
    );
  }
}
