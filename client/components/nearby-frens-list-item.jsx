import React from 'react';

function NearbyFrensListItem(props) {
  return (
    <div className="row border-bottom d-flex align-items-center h-25">
      <div className="col-4">
        <img className="fren-request-img rounded-circle ml-1" src="https://scx1.b-cdn.net/csz/news/800/2018/2-dog.jpg" alt={props.name} />
      </div>
      <div className="col-5 mt-2">
        <p className="d-flex flex-column">
          <span className="mb-0">{props.name}</span>
          <span>{props.location}</span>
        </p>
      </div>
      <div className="col cursor-pointer">
        <i className="fas fa-plus-circle fa-2x"></i>
      </div>
    </div>
  );
}

export default NearbyFrensListItem;
