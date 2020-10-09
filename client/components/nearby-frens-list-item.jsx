import React from 'react';

function NearbyFrensListItem(props) {
  return (
    <div className="row border-bottom d-flex align-items-center h-25" onClick={props.onClick}>
      <div className="col-4">
        <img src={props.image} className="fren-request-img rounded-circle ml-1 cursor-pointer" />
      </div>
      <div className="col-5 mt-2">
        <p className="d-flex flex-column">
          <span className="mb-0">{props.name}</span>
          <span>{props.location}</span>
        </p>
      </div>
      <div className="col cursor-pointer">
      </div>
    </div>
  );
}

export default NearbyFrensListItem;
