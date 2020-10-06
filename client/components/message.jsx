import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: []
    };
    this.getInfo = this.getInfo.bind(this);
  }

  getInfo() {

    fetch('/api/users')
      .then(response => response.json())
      .then(data => this.setState({ dog: this.state.dog.concat(data) }));
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    return (
      null
    );
  }
}
