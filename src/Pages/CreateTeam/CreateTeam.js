import React from 'react';
import'../../App.css'
import CreateTeamContainer from '../../Component/Createteam/CreateTeamContainer';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';

function CreateTeam() {
  return <>
<Header/>
<div className="container">
<CreateTeamContainer/>
</div>
<Footer/>
  </>;
}

export default CreateTeam;
