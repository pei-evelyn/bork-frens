import React from 'react';
import ConversationItem from './conversation-item';
export default class ConversationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      conversations: []
    };
    this.getConversations = this.getConversations.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getConversations();
  }

  getConversations() {
    const userId = parseInt(this.props.userId);
    fetch('/api/conversation/6')
      .then(res => res.json())
      .then(data => this.setState({
        userId: userId,
        conversations: this.state.conversations.concat(data)
      }));
  }

  handleClick() {
    this.props.setView('chat', {});
  }

  render() {
    return (
      <div onClick={this.handleClick} className="container" >
        <h4 className="text-white text-center font-weight-normal">Conversations</h4>
        <div className="row no-gutters d-flex align-items-end">
          <div className="col content-container mx-3 mt-4">
            <ConversationItem conversations={this.state.conversations} />
          </div>
        </div>
      </div>
    );
  }

}
