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
