import React from 'react';
import Header from './header';
import OtherProfile from './other-profile';
import LoginPage from './login-page';
import Chat from './chat';
import FrenRequestList from './fren-request-list';
import FrensList from './frens-list';
import NearbyFrensList from './nearby-frens-list';
import EditUserProfile from './edit-user-profile';
import Homepage from './homepage';
import FindFrensMapped from './find-frens-map';

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
        params: params
      }
    });
  }

  changeView(state) {
    switch (state) {

      case 'frensList':
        return (
          <>
            <Header setView={this.setView} />
            <FrensList />
          </>
        );

      case 'frensNearby':
        return (
          <>
            <Header text='Frens Nearby' setView={this.setView} />
            <NearbyFrensList userId={this.state.user.userId} setView={this.setView} />
          </>
        );

      case 'frenRequestList':
        return (
          <>
            <Header text='Fren Requests' setView={this.setView} />
            <FrenRequestList userId='6' />
          </>
        );

      case 'login':
        return <LoginPage addUser={this.addUser} setView={this.setView} />;

      case 'otherProfile':
        return <OtherProfile currentUserId={6} otherUserId={8} setView={this.setView} />;

      case 'editUserProfile':
        return (
          <>
            <Header text="Edit Profile" />
            <EditUserProfile currentUserId={6} otherUserId={8} setView={this.setView} />
          </>
        );

      case 'homepage':
        return (
          <>
            <Header setView={this.setView} />
            <Homepage hideMenu={this.hideMenu} setView={this.setView} />

          </>
        );

      case 'chat':
        return <Chat user={this.state.user} other={this.state.view.params} />;

      case 'findFrensMap':
        return (
          <FindFrensMapped
            text="Find Frens"
            location="Los Angeles, CA"
            userId={6}
            setView={this.setView}
          />

        );
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
