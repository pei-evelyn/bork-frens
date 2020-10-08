import React from 'react';

export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageContent: '',
      senderId: 6,
      recipientId: 7
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ messageContent: event.target.value });
  }

  handleSubmit(event) {
    this.props.postMessage(this.state.recipientId, this.state.senderId, this.state.messageContent);
    this.setState({ message: '' });
    event.preventDefault();
  }

  render() {
    return (
      <form className="chat-box" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <textarea className="form-control"
            value={this.state.message}
            onChange={this.handleChange}
            rows="1"
            placeholder="Type your message"
          ></textarea>
          <span className="input-group-append">
            <button className="fas fa-paw btn btn-info" type="submit" value="Submit"></button>
          </span>
        </div>
      </form>
    );
  }
}
