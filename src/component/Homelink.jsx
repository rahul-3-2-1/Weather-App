import React from 'react';
import {NavLink} from 'react-router-dom';

const Homelink=()=>{
    return(
        <>
        <div className=" bg-dark bg-gradient">
        <div style={{paddingRight:"0px",paddingLeft:"0px"}} className="text-light d-flex flex-row justify-content-between container na mx-auto py-3 ">
        <div style={{fontSize:"1.6rem"}}>WeatherAPP</div>

        <NavLink  className=" text-light home d-block text-decoration-none siz" to='/'>Home</NavLink>
        </div>
        </div>
        </>
        
    )
}

export default Homelink;