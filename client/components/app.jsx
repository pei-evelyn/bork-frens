import React from 'react';
import Header from './header';
import OtherProfile from './other-profile';
import FrenRequestList from './fren-request-list';
import LoginPage from './login-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'otherProfile',
        params: {}
      },
      user: {}
    };
    this.setView = this.setView.bind(this);
    this.addUser = this.addUser.bind(this);
    this.changeView = this.changeView.bind(this);
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

  changeView(state) {
    switch (state) {

      case 'frenRequestList':
        return (
          <>
            <Header text='Fren Requests' />
            <FrenRequestList userId='6' />
          </>
        );
      case 'login':
        return <LoginPage addUser={this.addUser} setView={this.setView} />;

      case 'otherProfile':
        return <OtherProfile currentUserId={6} otherUserId={8} setView={this.setView} />;
    }
  }

  render() {
    return (
      <>
        { this.changeView(this.state.view.name)}
      </>
    );
  }
}
