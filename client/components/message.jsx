import React from 'react';

const Message = props => {

  return (
    <>
      <div className={props.sender !== props.current ? 'message-container-left' : 'message-container-right'} >
        <img className={props.sender !== props.current ? 'img-left mr-2' : 'img-right ml-2'} src={props.image}></img>
        <p className="chat-container">{props.message}</p>
      </div >
    </>
  );
};

export default Message;
