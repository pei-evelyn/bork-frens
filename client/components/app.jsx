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
      user: {},
      history: []
    };

    this.setView = this.setView.bind(this);
    this.addUser = this.addUser.bind(this);
    this.changeView = this.changeView.bind(this);
    this.switchViewBack = this.switchViewBack.bind(this);
  }

  addUser(userName) {
    this.setState({
      user: userName
    });
  }

  switchViewBack(name, params, oldHistory) {
    this.setState(state => {
      return ({
        view: {
          name: name,
          params: params
        },
        history: oldHistory
      });
    });
  }

  setView(name, params) {
    this.setState(state => {
      const previousView = Object.assign({}, state.view);
      const newHistory = state.history.concat(previousView);
      return ({
        view: {
          name: name,
          params: params
        },
        history: newHistory
      });
    });
  }

  changeView(state) {
    switch (state) {
      case 'frensList':
        return (
          <>
            <Header
              setView={this.setView}
              history={this.state.history}
              switchViewBack={this.switchViewBack}
            />
            <FrensList setView={this.setView} userId={this.state.user.userId}/>
          </>
        );
      case 'frensNearby':
        return (
          <>
            <Header
              text='Frens Nearby'
              setView={this.setView}
              history={this.state.history}
              switchViewBack={this.switchViewBack}
            />
            <NearbyFrensList
              location={this.state.user.location}
              userId={this.state.user.userId}
              setView={this.setView}
            />
          </>
        );
      case 'frenRequestList':
        return (
          <>
            <Header
              text='Fren Requests'
              setView={this.setView}
              history={this.state.history}
              switchViewBack={this.switchViewBack}
            />
            <FrenRequestList userId={this.state.user.userId} />
          </>
        );
      case 'login':
        return <LoginPage
          addUser={this.addUser}
          setView={this.setView}
          switchViewBack={this.switchViewBack}
        />;
      case 'editUserProfile':
        return (
          <>
            <Header
              text='Edit Profile'
              switchViewBack={this.switchViewBack}
              history={this.state.history}
            />
            <EditUserProfile setView={this.setView} currentUserId={this.state.view.params} />;
          </>
        );
      case 'otherProfile':
        return <OtherProfile
          currentUserId={this.state.user.userId}
          otherUserId={this.state.view.params.userId}
          setView={this.setView}
          switchViewBack={this.switchViewBack}
          history={this.state.history}
        />;
      case 'homepage':
        return (
          <>
            <Header
              setView={this.setView}
              history={this.state.history}
              switchViewBack={this.switchViewBack}
            />
            <Homepage
              userId={this.state.user.userId}
              setView={this.setView}
              addUser={this.addUser}
              user={this.state.user}
            />
          </>
        );
      case 'chat':
        return <Chat
          user={this.state.user.userId}
          other={this.state.view.params}
          switchViewBack={this.switchViewBack}
          history={this.state.history}
          setView={this.setView}
        />;
      case 'findFrensMap':
        return (
          <FindFrensMapped
            text="Find Frens"
            location={this.state.user.location}
            userId={this.state.user.userId}
            setView={this.setView}
            switchViewBack={this.switchViewBack}
            history={this.state.history}
          />
        );
      case 'conversation':
        return (
          <ConversationList
            user={this.state.user.userId}
            setView={this.setView}
            other={this.state.view.params}
            switchViewBack={this.switchViewBack}
            history={this.state.history}
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
