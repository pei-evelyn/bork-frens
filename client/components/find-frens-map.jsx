import React from 'react';
import SideNav from './side-nav';
// import SideNav from './side-nav';

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

  const script = document.createElement('script');
  const apiKey = process.env.GOOGLE_API_KEY;
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}.&callback=initMap`;
  script.defer = true;

  window.initMap = function () {
    map = new google.maps.Map(document.getElementById('map'), { // eslint-disable-line
      center: { lat: 34.052, lng: -118.243 },
      zoom: 10
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
        dogs nearby
      </h4>
    </div>
  );
}

function ListButton(props) {
  return (
    <div className="col-5 d-flex justify-content-end">
      <button
        type="button"
        className="btn btn-lg green-btn text-white"
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
    this.switchBackViewHistory = this.switchBackViewHistory.bind(this);
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

  switchBackViewHistory() {
    let history = this.props.history;
    if (history.length > 0) {
      history = history.pop();
    }
    this.props.switchViewBack(history.name, history.params, this.props.history);
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
                <i className="fas fa-angle-left fa-2x" onClick={() => this.switchBackViewHistory()}></i>
                <h5 className="mt-1 mx-auto">{this.props.text}</h5>
                <SideNav setView={this.props.setView} />
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
