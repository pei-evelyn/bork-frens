import React from 'react';
import FrenListItem from './fren-list-item';

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
    fetch(`/api/frens/${userId}`)
      .then(res => res.json())
      .then(frens => this.setState({
        userId: userId,
        frens: frens
      }));
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-white text-center font-weight-normal fren-list-total">{this.state.frens.length} Frens</h2>
        <div className="row no-gutters d-flex align-items-end">
          <div className="col content-container mx-3 mt-2">
            {this.state.frens.map(fren => {
              return <FrenListItem
                key={fren.userId}
                image={fren.image}
                location={fren.location}
                name={fren.name}
                userId={fren.userId}
                setView={this.props.setView}
              />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default FrensList;
