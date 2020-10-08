import React from 'react';
import Message from './message';
import ChatBox from './chatBox';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: [],
      senderId: 7,
      recipientId: 6
    };
    this.getInfo = this.getInfo.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  getInfo(sender) {

    fetch(`/api/messages/users/${this.state.senderId}`)
      .then(response => response.json())
      .then(data => this.setState({ dog: this.state.dog.concat(data) }));
  }

  componentDidMount() {
    this.getInfo(this.state.senderId);
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

  render() {
    const dogMessage = this.state.dog;
    return (
      <div className="box-container mx-3">
        {dogMessage.map((message, index) => (
          <Message
            key={index}
            message={message.messageContent}
            image={message.imageUrl}
            sender={message.senderId}
            recipient={message.recipientId}
            user={message.userId}
          />
        ))}
        <ChatBox postMessage={this.postMessage} dogInfo={this.state.dog} />
      </div>
    );
  }
}
