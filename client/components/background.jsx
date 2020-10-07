import React from 'react';
import FrenRequests from './fren-requests';

function Background(props) {
  return (
    <div className="container">
      <div className="row d-flex align-items-end">
        <div className="col content-container mx-3 mt-4">
          <FrenRequests />
        </div>
      </div>
    </div>
  );
}

export default Background;
