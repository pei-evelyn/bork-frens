import React from 'react';

function FrenListItem(props) {
  return (
    <>
      <div className="row no-gutters border-bottom px-2 py-4">

        <div className="col-3 mr-3">
          <img className="fren-request-img" src={props.image} alt="Image of Fren" />
        </div>

        <div className="col-6 d-flex align-items-start flex-column text-left ml-3">
          <p className="fren-name-fren-list mb-0">{props.name} </p>
          <p className="pb-0">{props.location}</p>
        </div>

        <div className="col d-flex align-items-center mr-2" onClick={() => props.setView('chat', props.userId)}>
          <i className="far fa-comment-alt fa-lg mb-4"></i>
        </div>

      </div>
    </>
  );
}

export default FrenListItem;
