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
        <div className="col">
          <button type="button" className="btn btn-info">CONNECT</button>
          <button type="button" className="btn btn-secondary">MESSAGE</button>
        </div>
      </div>
    );
  }
}

export default OtherUserButtons;
