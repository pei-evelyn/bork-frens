import React from 'react';
import ConversationItem from './conversation-item';
import SideNav from './side-nav';

export default class ConversationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      conversations: []
    };
    this.getConversations = this.getConversations.bind(this);
    this.emptyConvo = this.emptyConvo.bind(this);
  }

  componentDidMount() {
    this.getConversations();
  }

  getConversations() {
    const userId = parseInt(this.props.user);
    fetch(`/api/conversation/${userId}`)
      .then(res => res.json())
      .then(data => this.setState({
        userId: userId,
        conversations: this.state.conversations.concat(data)
      }));
  }

  emptyConvo() {
    return <h4 className="text-center">No Messages</h4>;
  }

  render() {
    const empty = this.emptyConvo();
    return (
      <>
        <div className="header col-12 text-white d-flex flex-wrap
         container justify-content-between pt-3 mb-5">
          <i className="fas fa-angle-left fa-2x" onClick={() => this.props.setView('editUserProfile', {})}></i>
          <h5 className="mt-1 m-auto text-center">My Messages</h5>
          <SideNav setView={this.props.setView} />
        </div>
        <div className="container" >
          <div className="row no-gutters d-flex align-items-end">
            <div className="col content-container mx-3 mt-4">
              {this.state.conversations.length === 0
                ? <>{empty}</>
                : <ConversationItem conversations={this.state.conversations} setView={this.props.setView} />}
            </div>
          </div>
        </div>
      </>
    );
  }
}
