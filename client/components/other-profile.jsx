import React from 'react';

class OtherProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherUser: null
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row no-gutters d-flex align-items-end">
          <div className="col content-container mx-3 mt-4">

          </div>
        </div>
      </div>
    );
  }
}

export default OtherProfile;
