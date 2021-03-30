import React from 'react';
import '../FieldHome/style.css';

function FieldHome() {
  return (
    <div className="field1">
      <div >
        <h3>Most Picked Player</h3>
        <div className='teste' >

        <img className='imgField1'src="https://randomuser.me/api/portraits/men/10.jpg" />
        <h3 className='percent1'>75%</h3>
        </div>
      </div>
      <div >
        <h3>Less Picked Player</h3>
        <div className='teste' >

        <img src="https://randomuser.me/api/portraits/men/27.jpg" />
        <h3 className='percent1'>25%</h3>
        </div>
      </div>
      
    </div>
  );
}

export default FieldHome;
