import React from 'react';

function TitleAndLocation(props) {
  return (
    <div className="row mb-5">
      <div className="col-12">
        <h2 className="mb-4">Let&apos;s find new frens!</h2>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-map-marker-alt"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Los Angeles, CA" disabled />
        </div>
      </div>
    </div>
  );
}

function GoogleMaps(props) {
  return (
    <h1>hello</h1>
  );
}

class FindFrensMapped extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <div className="bg-white container-fluid">
          <div className="header row pt-3 mb-4">
            <div className="col-12 d-flex flex-wrap
            justify-content-between">
              <i className="fas fa-angle-left fa-2x"></i>
              <h5 className="mt-1">{this.props.text}</h5>
              <i className="fa fa-bars fa-2x" ></i>
            </div>
          </div>
          <TitleAndLocation />
          <GoogleMaps/>
        </div>
      </>
    );
  }
}

export default FindFrensMapped;
