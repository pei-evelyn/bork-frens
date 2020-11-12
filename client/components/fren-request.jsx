import React from 'react';

function Request(props) {
  return (
    <div className="row no-gutters border-bottom px-3 py-4">
      <div className="col-3 mr-3">
        <img className="fren-request-img " src={props.image} alt={props.name} />
      </div>
      <div className="col-6 d-flex align-items-center">
        <p className="mb-0 pr-1">
          <span>{props.name} </span>
          wants to be your fren!
        </p>
      </div>
      <div className="col d-flex justify-content-around align-items-center">
        <i className="fas fa-check fa-lg icon-accept" onClick={() => props.handleAccept(props.requestId)}></i>
        <i className="fas fa-times fa-lg icon-deny" onClick={() => props.handleReject(props.requestId)}></i>
      </div>
    </div>
  );
}

function FrenRequests(props) {
  const frenRequests = props.frenReq;
  let frenList;
  if (frenRequests.length > 0) {
    frenList = frenRequests.map(req => {
      return (
        <Request
          key={req.requestId}
          image={req.requesterImage}
          name={req.requesterName}
          handleAccept={props.handleAccept}
          handleReject={props.handleReject}
          requestId={req.requestId}
          reqText={props.requestText}
        />
      );
    });
  } else {
    return (
      <h3 className="d-flex justify-content-center mt-4">No Fren Requests</h3>
    );
  }

  return (
    <div className="container-fluid p-0 mt-2">
      {frenList}
    </div>
  );
}

export default FrenRequests;
