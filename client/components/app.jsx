import React from 'react';
import Header from './header';
import Background from './background';
import Footer from './footer';
import LoginPage from './login-page';
import NearbyFrensList from './nearby-frens-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'logins',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: {}
      }
    });
  }

  render() {
    if (this.state.view.name !== 'login') {
      return (
        <>
          <Header />
          <NearbyFrensList setView={this.setView} />
        </>
      );
    } else if (this.state.view.name === 'login') {
      return (
        <LoginPage setView={this.setView} />
      );
    } else {
      return (
        <>
          <Header />
          <Background />
          <Footer />
        </>
      );
    }
  }
}
