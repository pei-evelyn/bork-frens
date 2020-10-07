import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ['husky', 'bob'],
      userId: {}
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch('./api/users')
      .then(res => res.json())
      .then(user => {
        this.setState({
          user: user
        });
      }).catch(err => console.error(err));
  }

  render() {
    return (
      <>
        <div className="login-background pt-5 text-white col">
          <i className="d-flex justify-content-center fas fa-bone fa-3x"></i>
          <h2 className="d-flex justify-content-center mb-5">borkfrens</h2>
          <div className="d-flex justify-content-center">
            <select onChange={() => this.props.setView('homePage', {})}
              className="form-control-lg col-11">
              <option key={this.state.userId} className="col-9">Select User</option>
              {this.state.userName.map(user => {
                return (
                  <option key={this.state.userId} className="col-9">{user}</option>
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
