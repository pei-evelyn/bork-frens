import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: [],
      view: {
        name: 'homepage',
        params: {}
      }
    };

    this.getUserProfileData = this.getUserProfileData.bind(this);
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    this.getUserProfileData();
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getUserProfileData() {
    // `/api/homepage/${this.state.userProfile.userId}`
    fetch(`/api/homepage/${this.props.userId}`)
      .then(response => response.json())
      .then(userData => {
        this.setState({
          userProfile: userData
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const user = this.state.userProfile;
    if (user === []) {
      return null;
    }

    return (
      <>

        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col content-container mx-3 mt-4">

              <div className="home-page-user-profile-box row m-auto justify-content-center position-relative">
                <img className="homepage-user-profile-img" src={user.imageUrl} alt={`Image of ${user.dogName}`} />
              </div>
              <div className=" location-box row justify-content-start flex-column align-items-center position-relative">
                <h3 className="font-weight-normal">{user.dogName}</h3>
                <h6 className="text-secondary">{user.location}, CA</h6>
              </div>
              <div className="profile-btn-box d-flex flex-column align-items-center position-relative no-btn-outline">
                <button className="homepage-btn green-btn font-weight-light text-white col-10 rounded my-4 py-2"
                  onClick={() => this.props.setView('editUserProfile', {})}>Edit Profile</button>
                <button className="homepage-btn grey-btn font-weight-light text-white col-10 rounded mb-4 py-2"
                  onClick={() => this.props.setView('frensNearby', {})}>Find New Frens</button>
                <button className="homepage-btn green-btn font-weight-light text-white col-10 rounded mb-4 py-2"
                  onClick={() => this.props.setView('frensList', {})}>View My Frens</button>
                <button className="homepage-btn grey-btn font-weight-light text-white col-10 rounded mb-4 py-2"
                  onClick={() => this.props.setView('frenRequestList', {})}>New Fren Requests</button>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default Homepage;
