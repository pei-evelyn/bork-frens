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
        name: 'login',
        params: {}
      },
      user: {}
    };
    this.setView = this.setView.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(userName) {
    this.setState({
      user: {
        user: userName.user,
        userId: userName.userId
      }
    });
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
    if (this.state.view.name === 'frensNearby') {
      return (
        <>
          <Header />
          <NearbyFrensList userId={this.state.user.userId} />
          <Footer />
        </>
      );
    } else if (this.state.view.name === 'login') {
      return (
        <LoginPage addUser={this.addUser} setView={this.setView} />
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
