import React from 'react';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
    this.handleClick = this.handleClick.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  handleClick(event) {
    this.setState(function (state) {
      if (!this.state.isShown) {
        return { isShown: true };
      } else {
        return { isShown: false };
      }
    });
  }

  hideMenu() {
    this.setState(function () {
      return { isShown: false };
    });
  }

  render() {
    let modalStyles = 'modal-overlay';
    let cssClass = 'side-menu';
    if (!this.state.isShown) {
      cssClass = 'side-menu';
    } else {
      modalStyles += ' show-modal';
      cssClass += ' show';
    }
    return (
      <>
        <div className={modalStyles} onClick={this.hideMenu}></div>
        <i className="fa fa-bars fa-2x position-absolute" onClick={this.handleClick}></i>
        {/* <i className="fas fa-bars mobile-menu-icon" onClick={this.handleClick}></i> */}
        <div className={cssClass}>
          <p className="menu-title">Menu</p>
          <p href="#" className="link text-left ml-4" onClick={this.hideMenu}>Home</p>
          <p href="#" className="link text-left ml-4" onClick={this.hideMenu}>Messages</p>
          <p href="#" className="link text-left ml-4" onClick={this.hideMenu}>Frens</p>
          <p href="#" className="link text-left ml-4" onClick={this.hideMenu}>Find Frens</p>
          <p href="#" className="link text-left ml-4" onClick={this.hideMenu}>My Profile</p>
        </div>
      </>
    );

  }
}

export default SideNav;
