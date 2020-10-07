import React from 'react';
import Header from './header';
import Background from './background';
import Footer from './footer';
import LoginPage from './login-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
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
    this.setState({ user: userName.user });
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
    if (this.state.view.name === 'login') {
      return (
        <LoginPage addUser={this.addUser} setView={this.setView}/>
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
