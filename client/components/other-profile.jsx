import React from 'react';
import OtherUserBio from './other-user-bio';
import OtherUserBasicInfo from './other-user-basic-info';
import OtherUserButtons from './other-user-buttons';

class OtherProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherUser: null
    };
  }

  render() {
    return (
      <>
        <OtherUserBasicInfo />
        <div className="container">
          <div className="row no-gutters d-flex align-items-end">
            <div className="col content-container mx-3 mt-4 d-flex flex-column justify-content-end">
              <OtherUserButtons />
              <OtherUserBio breed="Pomeranian" gender="Female" age="2 Years" level="One Classy Mother Pupper" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OtherProfile;
