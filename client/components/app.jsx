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
import ConversationList from './conversation-list';

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
      user: userName
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
            <Header text='Frens List' setView={this.setView} />
            <FrensList setView={this.setView} userId={this.state.user.userId}/>
          </>
        );

      case 'frensNearby':
        return (
          <>
            <Header text='Frens Nearby' setView={this.setView} />
            <NearbyFrensList location={this.state.user.location} userId={this.state.user.userId} setView={this.setView} />
          </>
        );

      case 'frenRequestList':
        return (
          <>
            <Header text='Fren Requests' setView={this.setView}/>
            <FrenRequestList userId='6' />
          </>
        );

      case 'login':
        return <LoginPage addUser={this.addUser} setView={this.setView} />;
      case 'editUserProfile':
        return (
          <>
            <Header text='Edit Profile'/>
            <EditUserProfile setView={this.setView} currentUserId={this.state.view.params} />;
          </>
        );
      case 'otherProfile':
        return <OtherProfile currentUserId={this.state.user.userId} otherUserId={this.state.view.params.userId} setView={this.setView} />;
      case 'homepage':
        return (
          <>
            <Header setView={this.setView} />
            <Homepage userId={this.state.user.userId} setView={this.setView} addUser={this.addUser} user={this.state.user} />

          </>
        );

      case 'chat':
        return <Chat
          setView={this.setView}
          user={this.state.user.userId}
          other={this.state.view.params}
        />;

      case 'findFrensMap':
        return (
          <FindFrensMapped
            text="Find Frens"
            location={this.state.user.location}
            userId={this.state.user.userId}
            setView={this.setView}
          />
        );
      case 'conversation':
        return (
          <ConversationList
            user={this.state.user.userId}
            setView={this.setView}
            other={this.state.view.params} />
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
