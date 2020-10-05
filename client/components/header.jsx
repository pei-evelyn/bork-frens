import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: ''
    };
  }

  render() {
    return (
      <div className="col-12 text-whit d-flex flex-wrap justify-content-between container mt-3">
        <i className="fas fa-angle-left fa-2x"></i>
        <h5 className="mt-1">Frens List</h5>
        <i className="fa fa-bars fa-2x" ></i>
      </div>
    );
  }
}

export default Header;
