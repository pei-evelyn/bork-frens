import React from 'react';
import Header from './header';
import OtherUserBio from './other-user-bio';
import OtherUserBasicInfo from './other-user-basic-info';
import OtherUserButtons from './other-user-buttons';

class OtherProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherUser: { name: 'mimi' },
      currentUserId: '',
      frenReqText: 'CONNECT'
    };
    this.getOtherUserInfo = this.getOtherUserInfo.bind(this);
    this.handleFrenReqClick = this.handleFrenReqClick.bind(this);
    this.handleMessageReqClick = this.handleMessageReqClick.bind(this);
  }

  componentDidMount() {
    this.getOtherUserInfo();
  }

  getOtherUserInfo() {
    fetch(`/api/others-profile/${this.props.otherUserId}`)
      .then(res => res.json())
      .then(userInfo => this.setState({
        otherUser: userInfo,
        currentUserId: this.props.currentUserId
      }))
      .catch(err => console.error(err));
  }

  handleFrenReqClick(senderId, recipientId) {
    const idValues = {
      senderId: senderId,
      recipientId: recipientId
    };
    fetch('/api/others-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(idValues)
    })
      .then(res => res.json())
      .then(data => {
        if (!data.isAccepted) {
          this.setState({
            frenReqText: 'REQUESTED'
          });
        }
      })
      .catch(err => console.error(err));
  }

  handleMessageReqClick() {
    this.props.setView('chat', this.state.otherUser);
  }

  render() {
    return (
      <>
        <Header text={this.state.otherUser.userName} setView={this.props.setView} switchViewBack={this.props.switchViewBack}/>
        <OtherUserBasicInfo
          image={this.state.otherUser.imageUrl}
          name={this.state.otherUser.dogName}
          tagLine={this.state.otherUser.tagline}
          location={this.state.otherUser.location}
        />
        <div className="container">
          <div className="row no-gutters d-flex align-items-end">
            <div className="col content-container mx-3 mt-4 d-flex flex-column justify-content-end">
              <OtherUserButtons
                handleFrenReq={this.handleFrenReqClick}
                handleMessageReq={this.handleMessageReqClick}
                frenReqText={this.state.frenReqText}
              />
              <OtherUserBio
                breed={this.state.otherUser.breed}
                gender={this.state.otherUser.identity}
                age={this.state.otherUser.DOB}
                level={this.state.otherUser.level}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OtherProfile;
