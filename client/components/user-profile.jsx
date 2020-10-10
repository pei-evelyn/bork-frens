import React from 'react';
import Header from './header';
import UserProfileBio from './user-profile-bio';

function UserProfile(props) {
  return (
    <>
      <div className="container custom-margin">
        <div className="row d-flex align-items-end">
          <div className="col content-container">
            <Header text='floofyMimi' setView={props.setView} />
            <div className="profile-data-box position-relative">
              <div className="home-page-user-profile-box row m-auto justify-content-center position-relative">
                <img className="homepage-user-profile-img" src={props.imageUrl} alt={`Image of ${props.dogName}`} />
              </div>
              <div className="tagline-box row justify-content-start flex-column align-items-center position-relative">
                <h3 className="font-weight-normal">{props.dogName}</h3>
                <h6 className="text-secondary">{props.location}</h6>
                <h5 className="text-secondary">{props.tagline}</h5>
              </div>
              <div className="profile-btn-box d-flex flex-column align-items-center position-relative no-btn-outline">
                <button onClick={() => props.setView('editUserProfile', {})} className="homepage-btn green-btn font-weight-light text-white col-10 rounded my-4 py-2">Edit Profile</button>
              </div>
              <h5 className="text-secondary text-center">About Me</h5>
              <div className="profile-form">
                <UserProfileBio
                  breed={props.currentUserId.breed}
                  gender={props.currentUserId.genderId}
                  age={props.currentUserId.DOB}
                  level={props.currentUserId.level}
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
