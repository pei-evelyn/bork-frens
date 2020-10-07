import React from 'react';

function FrenListItem(props) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between px-2">
        <img className="" src={props.fren.frenImage} alt="Image" />
        <div className="d-flex flex-column align-items-start text-left">
          <h5 className="mt-4 mb-0">{props.fren.frenName}</h5>
          <p className="text-left">{props.fren.frenLocation}</p>
        </div>
        <i className="far fa-comment-alt fa-lg"></i>
      </div>
    </>
  );
}

export default FrenListItem;
// { props.fren.frenImage }
// /images/shake - weight.jpg
// my - card - img - top card - img - top
// my - card - body card - body
// my - card - title card - title
// my - card - text card - text
