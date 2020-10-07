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
  }

  componentDidMount() {
    this.listFrenRequests();
  }

  listFrenRequests() {
    const userId = parseInt(this.props.userId);
    fetch(`/api/fren-requests/${userId}`)
      .then(res => res.json())
      .then(userFrens => this.setState({
        recipientId: userId,
        requests: userFrens
      }));
  }

  render() {
    return (
      <div className="container">
        <div className="row no-gutters d-flex align-items-end">
          <div className="col content-container mx-3 mt-4">
            <FrenRequests frenReq={this.state.requests}/>
          </div>
        </div>
      </div>
    );
  }
}

export default FrenRequestList;
