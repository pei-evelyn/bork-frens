import React from 'react';
import Frens from './frens';

class FrensList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      frens: []
    };
    this.getAllFrens = this.getAllFrens.bind(this);
  }

  componentDidMount() {
    this.getAllFrens();
  }

  getAllFrens() {
    const userId = parseInt(this.props.userId);
    fetch('/api/frens/10')
      .then(res => res.json())
      .then(frens => this.setState({
        userId: userId,
        frens: frens
      }));
  }

  render() {
    return (
      <div className="container">
        <div className="row no-gutters d-flex align-items-end">
          <div className="col content-container mx-3 mt-4">
            <Frens fren={this.state.frens} />
          </div>
        </div>
      </div>
    );
  }
}

export default FrensList;
