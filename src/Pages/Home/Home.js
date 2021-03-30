import React from 'react';
import '../../App.css';
import FieldHome from '../../Component/FieldHome';
import Footer from '../../Component/Footer';
import Header from '../../Component/Header';
import MyTeams from '../../Component/Myteams';
import TopFive from '../../Component/TopFive';
function Home() {
  return (
    <>
      <Header />

      <div className="container">
    <MyTeams/>
        <div className="row">

        <TopFive/>
        <FieldHome></FieldHome>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
