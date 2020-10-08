import React from 'react';
import SideNav from './side-nav';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ''
    };
  }

  render() {
    return (
      <div className="header col-12 text-white d-flex flex-wrap
        justify-content-between container pt-3 mb-5">
        <i className="fas fa-angle-left fa-2x"></i>
        <h5 className="mt-1">{this.props.text}</h5>
        <SideNav />
        {/* <i className="fa fa-bars fa-2x" ></i> */}
      </div>
    );
  }
}

export default Header;
