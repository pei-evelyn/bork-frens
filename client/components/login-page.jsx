import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userId: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch('./api/login')
      .then(res => res.json())
      .then(allUsers => {
        this.setState({
          userName: allUsers[0].userName,
          userId: allUsers[0].userId
        });
      }).catch(err => console.error(err));
  }

  handleChange(event) {
    const index = event.target.selectedIndex;
    const selected = event.target.childNodes[index];
    const optionId = selected.getAttribute('userId');
    this.props.addUser({
      user: event.target.value,
      userId: optionId
    });
    this.props.setView('frensNearby', {});
  }

  render() {
    return (
      <>
        <div className="login-background pt-5 text-white col">
          <i className="d-flex justify-content-center fas fa-bone fa-3x"></i>
          <h2 className="d-flex justify-content-center mb-5">borkfrens</h2>
          <div className="d-flex justify-content-center">
            <select onChange={this.handleChange}
              className="form-control-lg col-11">
              <option className="col-9">Select User</option>
              <option key={this.state.userId} userid={this.state.userId}
                className="col-9">{this.state.userName}</option>
            </select>
          </div>
        </div>
      </>
    );
  }
}
export default LoginPage;
