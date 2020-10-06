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
      <div className="header col-12 text-white d-flex flex-wrap
        justify-content-between container pt-3 mb-5">
        <i className="fas fa-angle-left fa-2x"></i>
        <h5 className="mt-1">Frens List</h5>
        <i className="fa fa-bars fa-2x" ></i>
      </div>
    );
  }
}

export default Header;
