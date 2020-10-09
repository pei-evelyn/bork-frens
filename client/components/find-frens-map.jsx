import React from 'react';

function TitleAndLocation(props) {
  return (
    <div className="row mb-4">
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
  let map; // eslint-disable-line

  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBXaGa_0y9f5zPqpMrHkdlVC6CCauE1nl4&callback=initMap';
  script.defer = true;

  window.initMap = function () {
    map = new google.maps.Map(document.getElementById('map'), { // eslint-disable-line
      center: { lat: 34.052, lng: -118.243 },
      zoom: 8
    });
  };

  document.head.appendChild(script);

  return (
    <div id="map"></div>
  );
}

function NumOfFrensNearby(props) {
  return (
    <div className="col-7 d-flex">
      <h4 className="align-self-center">
        <span className="badge badge-info mr-2">{props.totalNum}</span>
        frens nearby!
      </h4>
    </div>
  );
}

function ListButton(props) {
  return (
    <div className="col-5 d-flex justify-content-end">
      <button
        type="button"
        className="btn btn-lg btn-info"
        onClick={() => props.setView('frensNearby', {})}>View List</button>
    </div>
  );
}

class FindFrensMapped extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfFrens: 0,
      userLocation: undefined
    };
  }

  componentDidMount() {
    const userLocation = this.props.location.replaceAll(' ', '%20');
    const userId = this.props.userId;
    fetch(`/api/find-frens/${userLocation}/${userId}`)
      .then(res => res.json())
      .then(numOfFrensNearby => this.setState({
        numOfFrens: parseInt(numOfFrensNearby.numOfFrensNearby, 10),
        userLocation: this.props.location
      }))
      .catch(err => console.error(err));
  }

  render() {
    if (typeof this.state.userLocation === 'undefined') {
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
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="bg-white container-fluid">
            <div className="header row pt-3 mb-4">
              <div className="col-12 d-flex flex-wrap
            justify-content-between">
                <i className="fas fa-angle-left fa-2x"></i>
                <h5 className="mt-1">{this.props.text}</h5>
                <i className="fa fa-bars fa-2x"></i>
              </div>
            </div>
            <TitleAndLocation />
            <GoogleMaps />
            <div className="row mt-4">
              <NumOfFrensNearby totalNum={this.state.numOfFrens} />
              <ListButton setView={this.props.setView} />
            </div>
          </div>
        </>
      );
    }

  }
}

export default FindFrensMapped;
