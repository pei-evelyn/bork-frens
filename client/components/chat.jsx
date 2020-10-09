import React from 'react';
import Message from './message';
import ChatBox from './chatBox';
import SideNav from './side-nav';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: []
    };
    this.getInfo = this.getInfo.bind(this);
    this.postMessage = this.postMessage.bind(this);
    this.switchBackViewHistory = this.switchBackViewHistory.bind(this);
  }

  getInfo(sender, recipient) {
    fetch(`/api/messages/users/${sender}/${recipient}`)
      .then(response => response.json())
      .then(data => this.setState({ dog: this.state.dog.concat(data) }));
  }

  componentDidMount() {
    this.getInfo(this.props.user, this.props.other.userId);
  }

  postMessage(recipient, sender, message) {
    const receiver = {
      recipientId: recipient,
      senderId: sender,
      messageContent: message
    };
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(receiver)
    };
    fetch('/api/messages', init)
      .then(res => res.json())
      .then(data => this.setState({ dog: this.state.dog.concat(data) }));
  }

  switchBackViewHistory() {
    let history = this.props.history;
    if (history.length > 0) {
      history = history.pop();
    }
    this.props.switchViewBack(history.name, history.params, this.props.history);
  }

  render() {
    const dogMessage = this.state.dog;
    return (
      <div className="bg-white container-fluid">
        <div className="header col-12 d-flex flex-wrap
        justify-content-between container pt-3 mb-5">
          <i className="fas fa-angle-left fa-2x" onClick={() => this.switchBackViewHistory()}></i>
          <h5 className="mt-1 m-auto">{this.props.other.name}</h5>
          <SideNav setView={this.props.setView} />
        </div>
        <div className="box-container mx-3">
          {dogMessage.map((message, index) => (
            <Message
              key={index}
              message={message.messageContent}
              image={message.imageUrl}
              sender={message.senderId}
              recipient={message.recipientId}
              user={message.userId}
              current={this.props.user}
            />
          ))}
          <ChatBox
            postMessage={this.postMessage}
            dogInfo={this.state.dog}
            recipient={this.props.other.userId}
            user={this.props.user}
          />
        </div>
      </div>
    );
  }
}
