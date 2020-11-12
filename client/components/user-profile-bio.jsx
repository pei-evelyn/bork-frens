import React from 'react';

function UserProfileBio(props) {
  return (
    <div className="row mx-2 my-4">
      <div className="col">
        <form>
          <div className="form-row">
            <div className="form-group col">
              <label>My Breed</label>
              <input className="form-control" value={props.breed} disabled />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <label>My Gender</label>
              <input className="form-control" value={props.gender === 1 ? 'Male' : 'Female'} disabled />
            </div>
            <div className="form-group col-6">
              <label>DOB</label>
              <input className="form-control" value={props.age} disabled />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label>My Frenliness Level</label>
              <input className="form-control" value={props.level} disabled />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default UserProfileBio;
