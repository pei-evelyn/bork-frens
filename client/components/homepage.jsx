import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    fetch('/api/homepage/7')
      .then(response => response.json())
      .then(userData => userData)
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex align-items-end">
          <div className="col content-container mx-3 mt-4">
            <div className="homepage-profile-img">
              <img src="" alt="" />
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default Homepage;
