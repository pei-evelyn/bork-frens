import React from 'react';

function OtherUserButtons(props) {

  return (
    <div className="row">
      <div className="col d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-info mr-2"
          onClick={() => props.handleFrenReq()}>
          {props.frenReqText}
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-2"
          onClick={() => props.handleMessageReq()}
        >MESSAGE</button>
      </div>
    </div>
  );
}

export default OtherUserButtons;
