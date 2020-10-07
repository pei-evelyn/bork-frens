import React from 'react';
// import FrensListItem from './frens-list-item';
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
        this.setState({ frens: frens });
        // console.log(frens);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center text-white">{this.state.frens.length} Frens</h2>
        <div className="row d-flex align-items-end">
          <div className="col content-container mx-3 mt-4">
            {/* {this.state.frens.map(fren => {
              return (
                <FrensListItem key={fren.userId} fren={fren} />
              );
            })} */}
            <div className="d-flex align-items-center justify-content-between px-2">
              <img className="" src="" alt="Image" />
              <div className="d-flex flex-column align-items-start text-left">
                <h5 className="mt-4 mb-0">Kaydo</h5>
                <p className="text-left">Irvine</p>
              </div>
              <i className="far fa-comment-alt fa-lg"></i>
            </div>
            <div className="d-flex align-items-center justify-content-between px-2">
              <img className="" src="" alt="Image" />
              <div className="d-flex flex-column align-items-start text-left">
                <h5 className="mt-4 mb-0">Pupperino</h5>
                <p className="text-left">Tustin</p>
              </div>
              <i className="far fa-comment-alt fa-lg"></i>
            </div>
            <div className="d-flex align-items-center justify-content-between px-2">
              <img className="" src="" alt="Image" />
              <div className="d-flex flex-column align-items-start text-left">
                <h5 className="mt-4 mb-0">Zelda</h5>
                <p className="text-left">Santa Ana</p>
              </div>
              <i className="far fa-comment-alt fa-lg"></i>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default FrensList;
