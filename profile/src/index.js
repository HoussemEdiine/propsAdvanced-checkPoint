import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Profile from './profile/Profile'
// variables
let fullName = 'Houssem  Ediine Maissoudi'
let handleName = () =>{
  return alert("ProfilUser: Houssem")

}
let bio ='my name is Maisoudi Houssem Ediine, Im an embedded system engineer and  android developer Im currently working as a system administrator at Medisys-consulting '
let img = <img src='images.jpg' alt='load' height='240' width='240'/>
let style = {
  margin : '5px'
}
let profission = 'Fullstack js Developer'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Profile handleName={handleName} fullName={fullName} style={style} profission={profission}  bio={bio}>
        {img}
      </Profile>

  </React.StrictMode>,
  document.getElementById('root')
);
