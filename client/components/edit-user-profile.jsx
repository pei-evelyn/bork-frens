import React from 'react';

class EditUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      breed: '',
      levelId: 0,
      genderId: 0
    };
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.handleChangeOptions = this.handleChangeOptions.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  handleChangeInputs(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleChangeOptions(event, genderId, levelId) {
    const value = event.target.value;
    switch (value) {
      case 'Male':
        genderId = 1;
        break;
      case 'Female':
        genderId = 2;
        break;
      case 'Petential':
        levelId = 1;
        break;
      case 'Looking Quite Fetching':
        levelId = 2;
        break;
      case 'Pawsitively Pawsome':
        levelId = 3;
        break;
      case 'One Classy Mother Pupper':
        levelId = 4;
        break;
    }
    if (!genderId) {
      this.setState({
        levelId: levelId
      });
    } else {
      this.setState({
        genderId: genderId
      });
    }
  }

  updateProfile(event) {
    event.preventDefault();
    const profileData = {
      location: this.state.location,
      breed: this.state.breed,
      levelId: this.state.levelId,
      genderId: this.state.genderId
    };
    fetch('/api/profile/10', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          frenReqText: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center position">
          <img className="other-user-profile-img" src={'http://cdn.akc.org/content/article-body-image/lab_puppy_dog_pictures.jpg'}></img>
        </div>
        <div className="container">
          <div className="row no-gutters d-flex align-items-end">
            <div className="col content-container mx-3 mt-4 d-flex flex-column">
              <div className="row mx-2 my-4">
                <div className="col">
                  <form className="mt-5">
                    <div className="form-row">
                      <div className="form-group col">
                        <label >Location</label>
                        <input placeholder="Location"
                          type="text"
                          className="form-control"
                          name="location"
                          value={this.state.location}
                          onChange={this.handleChangeInputs}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col">
                        <label >My Breed</label>
                        <input placeholder="Breed"
                          type="text"
                          className="form-control"
                          name="breed"
                          value={this.state.breed}
                          onChange={this.handleChangeInputs}
                        />
                      </div>
                      <div className="form-group col-12">
                        <label >My Gender</label>
                        <select className="form-control" onChange={this.handleChangeOptions}>
                          <option>Female</option>
                          <option>Male</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col">
                        <label >My Frenliness Level</label>
                        <select className="form-control" onChange={this.handleChangeOptions}>
                          <option>Petential</option>
                          <option>Looking Quite Fetching</option>
                          <option>Pawsitively Pawsome</option>
                          <option>One Classy Mother Pupper</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn bg-button text-white w-50"
                        onClick={this.updateProfile}>Update</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditUserProfile;
