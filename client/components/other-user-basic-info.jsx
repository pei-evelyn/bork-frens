import React from 'react';

function OtherUserBasicInfo(props) {
  return (
    <div className="row position-absolute other-profile-info">
      <div className="col d-flex flex-column align-items-center">
        <img className="other-user-profile-img mb-2" src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <h6 className="text-secondary">{props.location}</h6>
        <p>{props.tagLine}</p>
      </div>
    </div>
  );
}

export default OtherUserBasicInfo;
