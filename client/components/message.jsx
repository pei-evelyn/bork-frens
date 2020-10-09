import React from 'react';

const Message = props => {

  return (
    <>
      <div className={!props.user ? 'message-container-left' : 'message-container-right'} >
        <img className={!props.user ? 'img-left mr-2' : 'img-right ml-2'} src={props.image}></img>
        <p className="chat-container">{props.message}</p>
      </div>
    </>
  );
};

export default Message;
