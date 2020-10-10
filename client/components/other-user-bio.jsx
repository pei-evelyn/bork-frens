import React from 'react';

function OtherUserBio(props) {
  return (
    <div className="row mx-2 my-4">
      <div className="col">
        <form>
          <div className="form-row">
            <div className="form-group col">
              <label>Breed</label>
              <input className="form-control" placeholder={props.breed} disabled />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <label>Gender</label>
              <input className="form-control" placeholder={props.gender} disabled/>
            </div>
            <div className="form-group col-6">
              <label>DOB</label>
              <input className="form-control" placeholder={props.age} disabled/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>Frenliness Level</label>
              <input className="form-control" placeholder={props.level} disabled />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtherUserBio;
