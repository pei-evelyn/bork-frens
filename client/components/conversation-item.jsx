import React from 'react';

function ConversationData(props) {
  return (
    <>
      <div className="row no-gutters border-bottom px-2 py-4"
        onClick={() => props.setView('chat',
          {
            userId: props.user,
            name: props.name
          })}>
        <div className="col-2 mr-3">
          <img className="conversation-img ml-3" src={props.image} alt="Image of Fren" />
        </div>

        <div className="col-9 d-flex flex-column">
          <div className="row d-flex justify-content-between ml-3">
            <p className="fren-name-fren-list conversation-text font-weight-bold mb-1">{props.name} </p>
            <p className="conversation-text mr-3 font-weight-light">{convertTime(props.time)}</p>
          </div>
          <p className="pb-0 font-weight-light conversation-text ml-3">{props.message}</p>
        </div>
      </div>
    </>
  );
}

function convertTime(props) {
  const time = new Date(props);
  const stringTime = time.toLocaleTimeString(
    'en-us',
    {
      hour: '2-digit',
      minute: '2-digit'
    });
  return stringTime;
}

function Conversations(props) {
  const conversationProps = props.conversations;
  const conversationList = conversationProps.map(req => {
    return (
      <ConversationData
        key={req.userId}
        image={req.imageUrl}
        message={req.messageContent}
        name={req.dogName}
        time={req.sentAt}
        user={req.userId}
        setView={props.setView}
      />
    );
  });
  return (
    <div className="container-fluid p-0 mt-2">
      {conversationList}
    </div>
  );
}

export default Conversations;
