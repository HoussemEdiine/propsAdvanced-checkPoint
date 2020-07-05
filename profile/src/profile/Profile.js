import React from 'react'
import PropTypes from 'prop-types';

export default function Profile(props) {
    return (
        <div className='App'>
            <div className='card text-center' style={{width:'500px',marginLeft:'35%',marginTop:'35px' }}>
            <div className="card-header" style={{backgroundColor:'skyblue'}}>
              <h2><b>Profile User</b></h2>
  </div>
            
         <h3>{props.fullName}</h3>
         <h3>{props.profission}</h3>
         <p>{props.bio}</p>
         <a  href='/'  onClick={props.handleName}>
         ProfileUser
        </a>
        <div className='App' style={props.style}>
            {props.children}
        </div>
        </div>
        
        </div>
        
    )
}
Profile.propsTypes ={
fullName: PropTypes.string,
profission:PropTypes.string,
handleName:PropTypes.func,
bio: PropTypes.string,
style:PropTypes.object
}


Profile.defaultProps={
    fullName:'unknwon',
    handleName: () => {return alert('please insert user !')},
    profission: 'plz insert profession',
    bio : 'insert bio',
    style :{
        margin : '5px'
      }
}
