import React from 'react';

class FrensList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frens: []
    };
    this.getAllFrens = this.getAllFrens.bind(this);
  }

  componentDidMount() {
    this.getAllFrens();
  }

  getAllFrens() {
    fetch('/api/frens/7')
      .then(response => response.json())
      .then(frens => {
        // this.setState({ frens: frens });
        return frens;
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex align-items-end">
          <div className="col content-container mx-3 mt-4">
            {/* {this.state.frens.map(fren => {
                <FrenListItem key={this.fren.userId}/>
              })} */}
          </div>
        </div>
      </div>

    );
  }
}

export default FrensList;
