import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
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
          users: allUsers
        });
      }).catch(err => console.error(err));
  }

  handleChange(event) {
    const index = event.target.selectedIndex;
    const selected = event.target.childNodes[index];
    const optionId = selected.getAttribute('userId');
    this.props.addUser({
      user: event.target.value,
      userId: parseInt(optionId)
    });
    this.props.setView('homepage', {});
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
              {this.state.users.map(user => {
                return (
                  <option key={user.userId} userid={user.userId}>{user.userName}</option>
                );
              })}

            </select>
          </div>
        </div>
      </>
    );
  }
}
export default LoginPage;
