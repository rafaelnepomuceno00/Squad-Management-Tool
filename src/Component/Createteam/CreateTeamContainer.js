import React from 'react';
import './style.css';
function CreateTeamContainer() {
  return (
    <div className="createTeamCopntainer">
      <h2>Create your team</h2>
      <hr />
      <fieldset>
        <legend>Team information</legend>
        <form>
         
        <div className="formDiv">
        <div className="divForm">
            <label htmlFor="teamName">Team Name</label>
            <input name="teamName" type="text" placeholder="Insert team name" />
          </div>
          <div className="divForm">
            <label htmlFor="webSite">Team website</label>
            <input name="webSite" type="text" />
          </div>
        </div>
        <div className='formDiv'>
        <div className="divForm">
            <label htmlFor="description">Description</label>
            <input name="description" type="text" />
          </div>
          <div className="divForm">
            <label htmlFor="teamType">Team Type</label>
            <input type="radio" name="teamType" id="" />
            <input type="radio" name="teamType" id="" />
          </div>
        </div>
          tagps
        </form>
      </fieldset>
    </div>
  );
}

export default CreateTeamContainer;
