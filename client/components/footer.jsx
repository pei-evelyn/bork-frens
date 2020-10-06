import React from 'react';
class Footer extends React.Component {
  render() {
    return (
      <footer className="position-fixed px-3 pb-2">
        <div className="row navbar d-flex justify-content-between">
          <i className="fas fa-home fa-2x"></i>
          <i className="far fa-envelope fa-2x"></i>
          <i className="fas fa-map-marker-alt fa-2x"></i>
          <i className="fas fa-users fa-2x"></i>
          <i className="fas fa-user-circle fa-2x"></i>
        </div>
      </footer>
    );
  }
}

export default Footer;
