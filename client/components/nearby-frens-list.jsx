import React from 'react';
import NearbyFrensListItem from './nearby-frens-list-item';

class NearbyFrensList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frens: []
    };
    this.getFrens = this.getFrens.bind(this);
  }

  componentDidMount() {
    this.getFrens();
  }

  getFrens() {
    const userId = parseInt(this.props.userId);
    const location = 'Irvine';
    fetch(`./api/users/find-frens/list/${location}/${userId}`)
      .then(res => res.json())
      .then(allFrens => {
        const newFrens = [];
        newFrens.push(allFrens);
        this.setState({
          frens: newFrens
        });
      }).catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container col-11">
        <h6 className="text-white d-flex justify-content-center mb-0">{this.state.frens.totalUsers} Frens Nearby</h6>
        <p className="text-white d-flex justify-content-center mb-0"></p>
        <div className="row d-flex align-items-end">
          <div className="col content-container mx-3 mt-1">
            {this.state.frens.map(fren => {
              return (
                <NearbyFrensListItem
                  key={fren.userId}
                  image={fren.imageUrl}
                  name={fren.dogName}
                  location={fren.location}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default NearbyFrensList;
