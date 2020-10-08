import React from 'react';

class EditUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      breed: ''
    };
    this.getOtherUserInfo = this.getOtherUserInfo.bind(this);
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
    this.handleChangeOptions = this.handleChangeOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getOtherUserInfo();
  }

  getOtherUserInfo() {
    fetch(`/api/others-profile/${this.props.otherUserId}`)
      .then(res => res.json())
      .then(userInfo => this.setState({
        otherUser: userInfo,
        currentUserId: this.props.currentUserId
      }))
      .catch(err => console.error(err));
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
        return { genderId: 1 };
      case 'Female':
        return { genderId: 2 };
      case 'Petential':
        return { levelId: 1 };
      case 'Looking Quite Fetching':
        return { levelId: 2 };
      case 'Pawsitively Pawsome l':
        return { levelId: 3 };
      case 'One Classy Mother Pupper':
        return { levelId: 4 };
    }
    fetch('/api/others-profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(data => {
        if (!data.isAccepted) {
          this.setState({
            frenReqText: 'REQUESTED'
          });
        }
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
                  <form className="mt-5" onSubmit={this.handleSubmit}>
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
                      <button type="submit" className="btn bg-button text-white w-50">Update</button>
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
