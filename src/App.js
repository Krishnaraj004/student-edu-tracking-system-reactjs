import { useState } from 'react';
import './App.css';
import photo from './icon.png'
import logo from './logo.jpg'
import per from './percent[1].png'
import cap from './icons8-education-48.png'
import document from './users.png'
import attendance from './attendance.png'
import dashboard from './dashboard.png' 
import frame from './frame[1].png'
import adduser from './add-user.png'
import attlist from './attendant-list.png'
import classroom from './classroom.png'
import golf from './golf-club.png'
import hospital from './hospital.png'
function App() {

   const[rcount,setRcount] = useState(8);
   const[gcount,setGcount] = useState(13)
   const[pcount,setPcount] = useState(10)


  return (
    <div className='a'>
          <div className='hor' >
              <img src={logo} style={{width:"70px",height:"70px"}} alt='photo'/> 
                <h2>student management</h2>
          </div>
        <div className="App">
          <div className='nav'>
           
            <img src={document} style={{width:"70px",height:"70px"}} alt='photo' />
            <p>Student managemnent</p>
            <img src={frame} style={{width:"70px",height:"70px"}} alt='photo' />
            <p>Finance managemnent</p>
            <img src={per}style={{width:"70px",height:"70px"}} alt='photo' />
            <p>quality</p>
            <img src={dashboard} style={{width:"70px",height:"70px"}} alt='photo' />
            <p>dashboard</p>
            <img src={attendance} style={{width:"70px",height:"70px"}} alt='photo' />
            <p>attendance</p>
        </div>
 
      <div className='full'>
        <div className='colors'>
            <div className='red'>
            <img src={photo} style={{width:"70px",height:"70px" }} alt='photo'/>
            <p>{rcount}</p>
            <p>Regular students</p>
            </div>
            <div className='purple'>
            <img src={photo} style={{width:"70px",height:"70px"}} alt='photo'/>
            <p>{pcount}</p>
              <p>remedial students</p>
            </div>
            <div className='green'>
            <img src={photo} style={{width:"70px",height:"70px"}} alt='photo'/>
             <p>{gcount}</p>
              <p>in paid club</p>
            </div>
        </div>
      <div className='menu'>
          <div className='box'>
            <img src={adduser}></img>
              <p>Regular Enrollment</p>
          </div>
          <div className='box'>
          <img src={attlist}></img>
            <p>attendance</p>
          </div>
          <div className='box'>
          <img src={classroom}></img>
            <p>classroom management</p>
          </div>
          <div className='box'>
          <img src={golf}></img>
              <p>club management</p>
          </div>
          <div className='box'>
          <img src={hospital}></img>
            <p>clinic</p>
          </div>
      </div>

      </div>
         
      </div>
      
    </div>
  );
}

export default App;
