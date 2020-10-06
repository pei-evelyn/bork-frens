import React from 'react';
import Header from './header';
import Background from './background';
import Footer from './footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      isLoading: true
    };
    this.getInfo = this.getInfo.bind(this);
  }

  getInfo() {

    fetch('/api/users')
      .then(response => response.json())
      .then(data => this.setState({ message: this.state.message.concat(data) }));
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    return (
      <>
        <Header />
        <Background />
        <Footer />
      </>
    );
  }
}
