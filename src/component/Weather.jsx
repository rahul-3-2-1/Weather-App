import React,{useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,faCloud,faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'

// import useAsyncFn from 'react-use';


const Weather=()=>{
    const [city,setCity]=useState("");
    const [display,setDisplay]=useState("");
    const [temp,setTemp]=useState("");
    const [icon,setIcon]=useState("");
    const [decider,setDecider]=useState(false);
    const [show,setShow]=useState("");
    const [country,setCountry]=useState("")
    // const [time,setTime]=useState("");
    // const [country,setCountry]=useState("");
    
    const [ct,setCt]=useState("");
    const update=(event)=>{
        const data=event.target.value;
        setCt(data);
        setCity(data);

    }

    
   
   
    
    const settime=()=>{
        let localTime;
        const days=["Mon","Tue","Wed","Thrus","Fri","Sat","Sun"];
        const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Oct","Nov","Dec"];
            const dt=new Date();
        const dat=dt.getDate();
        const mn=month[dt.getMonth()];
        let [hr,mt]=[dt.getHours(),dt.getMinutes()];
        const period=hr>=0&&hr<12?"Am":"Pm";
        hr=hr===0?hr+12:hr>12&&hr<23?hr-12:hr;

        const tm=`${hr}:${mt} ${period}`;
        const day=  days[dt.getDay()-1];
        // const space= <tr/>;
        

        
        localTime=<div>{mn} | {dat} | {day}  <br/>{tm}   </div>;
        
    
        

       

        
        setDisplay(localTime);

        


    }
    
      
    setInterval(settime,60000);
    
    
    
    
    
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3f19970935ab9499871849c2702ee1d7`;
    

    const fetchData= async (event)=>{
        event.preventDefault();
        
        if(city==="")
        {
            setShow("you cant leave out city name");
            setDecider(false);
            setTemp("");
            setIcon("");
            

            return;
        }
        // setCt(city);
        
        try{
        const response =await axios.get(url);
        
       const realData=[response.data];
       
       const tempi=(realData[0].main.temp);
       const valTemp=<h1>{tempi} <sup>o</sup>C</h1>
                setTemp(valTemp);
       const moosm=realData[0].weather[0].main;
        const cnt=realData[0].sys.country;
       
    //    console.log(cnt);
    //    console.log(realData[0].sys.country);

    //    setCountry(cnt);
       settime();
       setCountry(<div>{ct},{cnt}</div>);
        
       
            
       
       setDecider(true);
       console.log(moosm);
       if(moosm==="Sunny")
       {
      
        const seti= <p className="sun"><FontAwesomeIcon icon={faSun}/></p>
        setIcon(seti);
    }
       else if(moosm==="Rain")
       {
         const seti= <p className="rain"><FontAwesomeIcon icon={faCloudShowersHeavy}/></p>
         setIcon(seti);
        }
       else{
         const seti= <p className="cloud"><FontAwesomeIcon icon={faCloud}/></p>
         setIcon(seti);
        }
        setCity("");
        setShow("");
        
        

        
    
            
        }
        catch{
            setShow("PLZZ enter proper data");
            setDecider(false);
            setTemp("");
            setIcon("");
        }



    }

       


    
    
    return(
        <>
        
            <div className=" d-flex justify-content-center">
                <div className="form-div wt-div  bg-dark bg-gradient">
                        <form className="position" onSubmit={fetchData}>
                        <input className="bg-dark bg-gradient w-100 d-block style-input" type="text" onChange={update} value={city}placeholder="Enter your city " />
                        <input   type="submit" value="click Here" className="wth-btn"/>
                        </form> 
                        <div className="textarea">
                            <div className="mssg-display"><div className={decider?"flex-dp":"hidden"}>{display} {country}</div>{show}</div>
                            <div className="row temp-div">
                                <div className="col temp">{temp}</div>
                                <div className="col icon">{icon}</div>
                            </div>

                        </div>

                </div>


            </div>

        
        </>
    )
}

export default Weather;