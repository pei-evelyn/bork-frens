import React from 'react';
import FrenRequests from './fren-request';

class FrenRequestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipientId: '',
      requests: []
    };
    this.listFrenRequests = this.listFrenRequests.bind(this);
    this.handleAcceptRequest = this.handleAcceptRequest.bind(this);
    this.handleRejectRequest = this.handleRejectRequest.bind(this);
  }

  componentDidMount() {
    this.listFrenRequests();
  }

  handleAcceptRequest(reqId) {
    fetch(`/api/fren-requests/${reqId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => setTimeout(this.listFrenRequests, 1000))
      .catch(err => console.error(err));
  }

  handleRejectRequest(reqId) {
    fetch(`/api/fren-requests/${reqId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => this.listFrenRequests())
      .catch(err => console.error(err));
  }

  listFrenRequests() {
    const userId = parseInt(this.props.userId);
    fetch(`/api/fren-requests/${userId}`)
      .then(res => res.json())
      .then(userFrens => this.setState({
        recipientId: userId,
        requests: userFrens
      }))
      .catch(err => console.error(err));
  }

  render() {

    return (
      <div className="container">
        <div className="row no-gutters d-flex align-items-end">
          <div className="col content-container mx-3 mt-4">
            <FrenRequests
              frenReq={this.state.requests}
              requestText={this.state.requestText}
              handleAccept={this.handleAcceptRequest}
              handleReject={this.handleRejectRequest}
            />
          </div>
        </div>
      </div>
    );

  }
}

export default FrenRequestList;
