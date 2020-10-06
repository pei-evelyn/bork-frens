import React from 'react';

function Request(props) {
  return (
    <div className="row">
      <div className="col-4">
        <img className="fren-request-img" src={props.image} alt={props.name}/>
      </div>
      <div className="col-5">
        <p>
          <span>{props.name}</span>
          would like to be your fren!
        </p>
      </div>
      <div className="col">
        <i className="fas fa-check"></i>
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
}

function FrenRequests(props) {
  const frenRequests = props.frenReq;
  const frenList = frenRequests.map(req => {
    return (
      <Request
        key={req.requestId}
        image={req.requesterImage}
        name={req.requesterName}
      />
    );
  });
  return (
    <div className="container">
      {frenList}
    </div>
  );
}

export default FrenRequests;
