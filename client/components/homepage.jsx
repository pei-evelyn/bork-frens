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
    fetch('/api/homepage/7')
      .then(response => response.json())
      .then(userData => {
        // console.log(userData);
        this.setState({
          userProfile: userData
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const user = this.state.userProfile;
    // console.log(user);
    if (user === []) {
      return null;
    }

    return (
      <>
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col content-container mx-3 mt-4">
              <div className="col-3 homepage-profile-img m-auto">
                <img src={user.imageUrl} alt={`Image of ${user.dogName}`} />
              </div>
              <div className="row name-location-box justify-content-center flex-column align-items-center">
                <h2 className="font-weight-normal">Kaydo</h2>
                <p>Los Angeles, CA</p>
              </div>
              <div className="profile-btn-box d-flex flex-column align-items-center">
                <button className="homepage-btn green-btn font-weight-light text-white col-10 rounded my-4 py-2">Edit Profile</button>
                <button className="homepage-btn grey-btn font-weight-light text-white col-10 rounded mb-4 py-2">Find New Frens</button>
                <button className="homepage-btn green-btn font-weight-light text-white col-10 rounded mb-4 py-2">View My Frens</button>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default Homepage;
