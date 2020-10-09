import React from 'react';
import SideNav from './side-nav';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ''
    };
    this.switchBackView = this.switchBackView.bind(this);
  }

  switchBackView() {
    let history = this.props.history;
    if (history.length > 0) {
      history = history.pop();
    }
    this.props.switchViewBack(history.name, history.params, this.props.history);
  }

  render() {
    return (
      <div className="header col-12 text-white d-flex flex-wrap
        justify-content-between container pt-3 mb-5">
        <i className="fas fa-angle-left fa-2x" onClick={() => this.switchBackView()}></i>
        <h5 className="mt-1 mx-auto">{this.props.text}</h5>
        <SideNav setView={this.props.setView} />
      </div>
    );
  }
}

export default Header;
