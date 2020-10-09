import React from 'react';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  handleToggleClick(event) {
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
    let modalStyles = 'modal-overlay m-0 p-0';
    let cssClass = 'side-menu';
    if (!this.state.isShown) {
      modalStyles += ' hide';
      cssClass = 'side-menu pt-4 ';
    } else {
      modalStyles += ' block';
      cssClass += ' show pt-4';
    }

    return (
      <>
        <div className={modalStyles} onClick={this.hideMenu}></div>
        <i className="fa fa-bars fa-2x position-absolute" onClick={() => this.handleToggleClick()}></i>

        <div className={cssClass} onClick={this.hideMenu}>

          <p className="link text-left ml-4" onClick={() => { this.props.setView('homepage', 6); }}>Home</p>
          <p className="link text-left ml-4" onClick={() => { this.props.setView('conversation', 6); }}>Messages</p>
          <p className="link text-left ml-4" onClick={() => { this.props.setView('frenRequestList', 9); }}>Fren Requests</p>
          <p className="link text-left ml-4" onClick={() => { this.props.setView('frensList', 6); }}>Frens</p>
          <p className="link text-left ml-4" onClick={() => { this.props.setView('frensNearby', 8); }}>Find Frens</p>
        </div>
      </>
    );

  }
}

export default SideNav;
