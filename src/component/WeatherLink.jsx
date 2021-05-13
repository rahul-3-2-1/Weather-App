import React from 'react';
import {NavLink} from 'react-router-dom';

const Homelink=()=>{
    return(
        <>
        <NavLink  className="weather  text-decoration-none style-txt" to='/weather'>Click here</NavLink>
        
        </>
    )
}

export default Homelink;