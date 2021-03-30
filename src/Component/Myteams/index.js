import React, { useState } from 'react';
import '../Myteams/style.css';

function MyTeams() {
  const [buttons, setButtons] = useState(false);
  return (
    <div className="myTeams">
      <h2>My teams</h2>
      <button id="addIcon">
        <div>+</div>
      </button>
      <hr id="hr1" />

      <div className="myTeamsContainer">
        <table cellSpacing="0">
          <thead>
            <tr id="firstRow">
              <th scope="col">
                <a className="sort-by">
                  Name{' '}
                  <div>
                    <i className="sort-by-asc"></i>
                    <i className="sort-by-desc"></i>
                  </div>{' '}
                </a>{' '}
              </th>
              <th scope="col">
                <a className="sort-by">
                  Description{' '}
                  <div>
                    <i className="sort-by-asc"></i>
                    <i className="sort-by-desc"></i>
                  </div>{' '}
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              onMouseOver={() => {
                setButtons(!buttons);
              }}
              onMouseLeave={() => {
                setButtons(!buttons);
              }}
            >
              <td>Barcelona</td>
              <td>
                Barcelona Squad{' '}
                <div className={buttons ? 'icons' : 'iconsHide'}>
                  <button
                    className="btns"
                    onClick={(e) => {
                      console.log(e.target + ' Exlcui');
                    }}
                  >
                    <span className="material-icons pink">delete</span>
                  </button>
                  <button
                    className="btns"
                    onClick={(e) => {
                      console.log(e.target + ' Edita');
                    }}
                  >
                    <span className="material-icons pink">create</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr
              onMouseOver={() => {
                setButtons(!buttons);
              }}
              onMouseLeave={() => {
                setButtons(!buttons);
              }}
            >
              <td>Barcelona</td>
              <td>
                Barcelona Squad{' '}
                <div className={buttons ? 'icons' : 'iconsHide'}>
                  <button
                    className="btns"
                    onClick={(e) => {
                      console.log(e.target + ' Exlcui');
                    }}
                  >
                    <span className="material-icons pink">delete</span>
                  </button>
                  <button
                    className="btns"
                    onClick={(e) => {
                      console.log(e.target + ' Edita');
                    }}
                  >
                    <span className="material-icons pink">create</span>
                  </button>
                </div>
              </td>
            </tr>
            <tr
              onMouseOver={() => {
                setButtons(!buttons);
              }}
              onMouseLeave={() => {
                setButtons(!buttons);
              }}
            >
              <td>Barcelona</td>
              <td>
                Barcelona Squad{' '}
                <div className={buttons ? 'icons' : 'iconsHide'}>
                  <button
                    className="btns"
                    onClick={(e) => {
                      console.log(e.target + ' Exlcui');
                    }}
                  >
                    <span className="material-icons pink">delete</span>
                  </button>
                  <button
                    className="btns"
                    onClick={(e) => {
                      console.log(e.target + ' Edita');
                    }}
                  >
                    <span className="material-icons pink">create</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyTeams;
