import React from 'react';

class OtherUserButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="row">
        <div className="col d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-info mr-2"
            onClick={() => this.props.handleFrenReq()}
          >CONNECT</button>
          <button
            type="button"
            className="btn btn-secondary ml-2"
            onClick={() => this.props.handleMessageReq()}
          >MESSAGE</button>
        </div>
      </div>
    );
  }
}

export default OtherUserButtons;
