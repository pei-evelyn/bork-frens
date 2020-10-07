import React from 'react';

function ProfilePic(props) {
  return (
    <div className="row position-absolute other-profile-info">
      <div className="col d-flex flex-column align-items-center">
        <img className="other-user-profile-img mb-2" src={props.image} alt={props.name}/>
        <h2>{props.name}</h2>
        <h5 className="text-secondary">{props.userName}</h5>
        <p>{props.tagLine}</p>
      </div>
    </div>
  );
}

function OtherUserBasicInfo(props) {
  return (
    <>
      <ProfilePic
        image='/images/userId8.jpg'
        userName='floofyMimi'
        name='Mimi'
        tagLine='"Cutest litto floof in town!"'
      />
    </>
  );
}

export default OtherUserBasicInfo;
