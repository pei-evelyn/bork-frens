import React from 'react';
import Biography from './biography';

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
            <Biography breed="Alaskan Malamute" gender="Male" age="2 Years" level="One Classy Mother Pupper" />
          </div>
        </div>
      </div>
    );
  }
}

export default OtherProfile;
