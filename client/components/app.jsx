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
        name: name,
        params: {}
      }
    };
    this.getUserNames = this.getUserNames.bind(this);
  }

  componentDidMount() {
    this.getUserNames();
  }

  getUserNames() {
    this.setState({ view: { name: 'login', params: {} } });
  }

  render() {
    if (this.state.view.name === 'login') {
      return (
        <LoginPage />
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
