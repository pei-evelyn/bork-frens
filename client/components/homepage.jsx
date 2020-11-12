import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {}
    };

    this.getUserProfileData = this.getUserProfileData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getUserProfileData();
  }

  getUserProfileData() {
    fetch(`/api/homepage/${this.props.userId}`)
      .then(response => response.json())
      .then(userData =>
        this.setState(state => {
          this.props.addUser(userData);
          return ({ userProfile: userData });
        }

        )
      )
      .catch(err => console.error(err));
  }

  handleChange() {
    const dateFormat = this.state.userProfile.DOB;
    const format = dateFormat.substr(0, 10);
    const insert = this.state.userProfile;
    insert.DOB = format;
    this.props.setView(
      'editUserProfile',
      this.state.userProfile
    );
  }

  render() {
    const user = this.state.userProfile;
    if (user === []) {
      return null;
    }

    return (
      <>
        <div className="container" onClick={this.props.hideMenu}>
          <div className="row d-flex align-items-end">
            <div className="col content-container mx-3 mt-4">
              <div className="home-page-user-profile-box row mx-auto justify-content-center position-relative mb-2">
                <img className="homepage-user-profile-img" src={this.state.userProfile.imageUrl} alt={`Image of ${this.state.userProfile.dogName}`} />
              </div>
              <div className="location-box row justify-content-start flex-column align-items-center position-relative">
                <h3 className="font-weight-normal mb-2">{this.state.userProfile.dogName}</h3>
                <h6 className="text-secondary">{this.state.userProfile.location}</h6>
              </div>
              <div className="profile-btn-box d-flex flex-column align-items-center position-relative no-btn-outline">
                <button onClick={ this.handleChange } className="btn homepage-btn green-btn font-weight-light text-white col-10 rounded my-4 py-2">Edit Profile</button>
                <button onClick={() => this.props.setView('findFrensMap', {})} className="btn homepage-btn grey-btn font-weight-light text-white col-10 rounded mb-4 py-2">Find New Frens</button>
                <button onClick={() => this.props.setView('frensList', {})} className="btn homepage-btn green-btn font-weight-light text-white col-10 rounded mb-4 py-2">View My Frens</button>
                <button onClick={() => this.props.setView('frenRequestList', {})} className="btn homepage-btn grey-btn font-weight-light text-white col-10 rounded mb-4 py-2">New Fren Requests</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
