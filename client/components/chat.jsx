import React from 'react';
import Message from './message';
import ChatBox from './chatBox';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: []
    };
    this.getInfo = this.getInfo.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  // current recipient
  // current sender
  // store in state

  getInfo() {
    fetch('/api/messages/users')
      .then(response => response.json())
      .then(data => this.setState({ dog: this.state.dog.concat(data) }));
  }

  componentDidMount() {
    this.getInfo();
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
          />
        ))}
        <ChatBox postMessage={this.postMessage} dogInfo={this.state.dog} />
      </div>
    );
  }
}
