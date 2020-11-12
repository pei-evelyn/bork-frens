import React from 'react';

function OtherUserButtons(props) {

  return (
    <div className="row">
      <div className="col d-flex justify-content-center">
        <button
          type="button"
          className="btn green-btn mr-2"
          onClick={() => props.handleFrenReq(props.senderId, props.recipientId)}>
          {props.frenReqText}
        </button>
        <button
          type="button"
          className="btn grey-btn ml-2"
          onClick={() => props.handleMessageReq()}
        >MESSAGE</button>
      </div>
    </div>
  );
}

export default OtherUserButtons;
