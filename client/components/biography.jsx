import React from 'react';

function Biography(props) {
  return (
    <div className="row mx-2">
      <div className="col">
        <form>
          <div className="form-row">
            <div className="form-group col">
              <label>My Breed</label>
              <input className="form-control" placeholder={props.breed} disabled />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <label>My Gender</label>
              <input className="form-control" placeholder={props.gender} disabled/>
            </div>
            <div className="form-group col-6">
              <label>My Age</label>
              <input className="form-control" placeholder={props.age} disabled/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>My Frenliness Level</label>
              <input className="form-control" placeholder={props.level} disabled />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Biography;
