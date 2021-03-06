import React from 'react';
import UserProfileBio from './user-profile-bio';

function UserProfile(props) {
  return (
    <>
      <div className="container custom-margin">
        <div className="row d-flex align-items-end ">
          <div className="col content-container mx-3 mt-4 d-flex flex-column justify-content-end">
            <div className="position-absolute my-profile-info">
              <div className="home-page-user-profile-box row mx-auto justify-content-center">
                <img className="other-user-profile-img mb-2" src={props.user.imageUrl} alt={`Image of ${props.user.dogName}`} />
              </div>
              <div className="tagline-box row justify-content-start flex-column align-items-center">
                <h3 className="font-weight-normal">{props.user.dogName}</h3>
                <p className="text-secondary">{props.user.location}</p>
                <p className="text-secondary">{props.user.tagline}</p>
              </div>
            </div>
            <div className="mt-2">
              <div className="profile-btn-box d-flex flex-column align-items-center no-btn-outline">
                <button onClick={() => props.setView('editUserProfile', {})} className="btn homepage-btn green-btn font-weight-light text-white col-10 rounded my-2 py-2">Edit Profile</button>
              </div>
              <div className="profile-form">
                <UserProfileBio
                  breed={props.currentUserId.params.breed}
                  gender={props.currentUserId.params.genderId}
                  age={props.currentUserId.params.DOB}
                  level={props.currentUserId.params.levelId}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
