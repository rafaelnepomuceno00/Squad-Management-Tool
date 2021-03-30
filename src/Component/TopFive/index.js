import React from 'react';
import '../TopFive/style.css';
function TopFive() {
  return (
    <div className="topFive">
      <h2>Top 5</h2>
      <hr id="hr2" />
      <div className="topFiveContainer">
        <div className="top5">
          <p className="topFiveTitle">Highest avg Age</p>
          <div className="innerContainer">
            <div className="teamTop5">
              <p className="nameTeams5">Inter</p>
              <p className="pointTeams5">31.9</p>
            </div>
            <div className="teamTop5">
              <p className="nameTeams5">Milan</p>
              <p className="pointTeams5">21.6</p>
            </div>
            <div className="teamTop5">
              <p className="nameTeams5">barcelona</p>
              <p className="pointTeams5">22.0</p>
            </div>
            <div className="teamTop5">
              <p className="nameTeams5">arcenal</p>
              <p className="pointTeams5">22.1</p>
            </div>
            <div className="teamTop5">
              <p className="nameTeams5">PSG</p>
              <p className="pointTeams5">22.5</p>
            </div>
          </div>
        </div>
        <div className="top5">
          <p className="topFiveTitle">Lowest avg Age</p>
          <div className="innerContainer">
            <div className="teamTop5">
              <p className="nameTeams5">Inter</p>
              <p className="pointTeams5">31.9</p>
            </div>
            <div className="teamTop5">
              <p className="nameTeams5">Milan</p>
              <p className="pointTeams5">21.6</p>
            </div>
            <div className="teamTop5">
              <p className="nameTeams5">barcelona</p>
              <p className="pointTeams5">22.0</p>
            </div>
            <div className="teamTop5">
              <p className="nameTeams5">arcenal</p>
              <p className="pointTeams5">22.1</p>
            </div>
            <div className="teamTop5">
              <p className="nameTeams5">PSG</p>
              <p className="pointTeams5">22.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFive;
