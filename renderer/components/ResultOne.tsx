import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { FaHome, FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaTelegramPlane, FaArrowRight } from "react-icons/fa";

interface Props {
  Flights?: JSON
  FlightData?: string
}

const ResultOne: React.FC<Props> = (props: Props) =>  {
  const Flights = props;
  const FlightD = JSON.stringify(Flights.Flights);
  const FlightJS = JSON.parse(FlightD);
  const FlightDT = FlightJS.Flights.itineraries;
  const FlightNT = JSON.stringify({FlightDT});
  const FlightRl = JSON.parse(FlightNT);
  const FlightDL = FlightRl.FlightDT;

  const FlightsData = [];
  FlightsData.push(FlightDL);

  // console.log(FlightsData);


  function timeSho(dateTime){
    const Takeof = new Intl.DateTimeFormat('en', { hour: 'numeric',minute: 'numeric', hour12: true }).format(new Date(dateTime));
    return Takeof
  }

  function time_convert(num){ 
    var hours = Math.round(num / 60);  
    var minutes = num % 60;
    return hours + ":" + minutes + " Min";         
  }


  let comname =  [];
  FlightsData.map((Flight) => {
    Flight.buckets.map((buckets) =>{
      buckets.items.map((items) =>{
        comname.push({name : items.legs[0].carriers.marketing[0].name, isChecked:true});
      })
    })
  })

  const uniqueIds = [];
  const airlines = comname.filter(element => {
    const isDuplicate = uniqueIds.includes(element.name);
    if (!isDuplicate) {
      uniqueIds.push(element.name);
      return true;
    }
    return false;
  });

  // console.log(airlines);

  const [airline, setAirline] = useState([]);
  
  useEffect(() => {
    setAirline(airlines);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    
      let tempAir = airline.map((airline) =>
      airline.name === name ? { ...airline, isChecked: checked } : airline
    );
    setAirline(tempAir);
  };



return (
  <React.Fragment>
    <div className="row overflow-auto mt-2 mb-5">
      <div className="col-sm-12 col-md-4 col-lg-3 mt-3 mb-4">
        <div className="row">
          <div className="col-12 mt-2">
            <div className="accordion" id="Airlines">
              <div className="accordion-item text-end">
                <h2 className="accordion-header" id="headingOne">
                  <div className="accordion-button"  data-mdb-toggle="collapse" data-mdb-target="#collapseAirlines" aria-expanded="true" aria-controls="collapseAirlines">
                    <div className="w-100 d-flex justify-content-between p-2">
                      Airlines
                    </div>
                  </div>
                </h2>
                {/* <span className="resets"  onChange={handleReset}>RESET</span> */}
                
                <div id="collapseAirlines" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#Airlines">
                  <div className="accordion-body">
                    <FormGroup>
                      {
                        airline.map((airline, kye) => (
                          <>
                          {
                            // console.log(airline.name)
                            airline.name ? (<FormControlLabel control={<Checkbox defaultChecked
                              name={airline.name}
                              // checked={airline?.isChecked || true}
                              onChange={handleChange}
                              key={kye}
                            
                            />} label={airline.name} />):(<></>)
                            
                          }
                          </>
                        ))
                      }
                    </FormGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="col-sm-12 col-md-8 col-lg-9 mb-4 p-3">
      {
          
          airline.map((airline, kye) => (
            <>
            {
              // console.log(airline)
              // airline.isChecked == true ? (<>{airline.name}</>):(<></>)
            FlightsData.map((Flight, key) => ( 
              <>
            {   
              Flight.buckets.map((bucket, key) =>(
                <div className="row" key={key} id={bucket.id}>
                    {
                      bucket.items.map((items, key) =>(
                        <>
                        {
                          // console.log(items)
                          airline.isChecked == true ? (<>
                          {airline.name == items.legs[0].carriers.marketing[0].name ? (<>
                            <div className="card border shadow-5 bg-light w-100 mb-2">
                              <div className="row p-3">
                                <div className="col-2 border-end">
                                  <div className="row">
                                    <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                                      <img className="shadow-2-strong carriers mt-1" src={items.legs[0].carriers.marketing[0].logoUrl} alt={items.legs[0].carriers.marketing[0].name} />
                                    </div>
                                    <div className="col-12 d-flex align-items-center justify-content-center">
                                      <h6 className='airname'>{items.legs[0].carriers.marketing[0].name}</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-7  border-end ">
                                  <div className="row">
                                    <div className="col-12"><span className="text-primary">One way flights</span></div>
                                    <div className="col-12 d-flex justify-content-between">
                                        <div className="text-success"><strong>{items.legs[0].origin.name + ' (' + items.legs[0].origin.id + ')'}</strong></div>
                                        <div><FaArrowRight/></div>
                                        <div  className="text-success"><strong>{items.legs[0].destination.name + ' (' + items.legs[0].destination.id + ')'}</strong></div>
                                    </div>
                                    <div className="col-12">
                                      <div className="row">
                                        <div className="col-6">
                                          <div className="desicon text-start">
                                            <FaPlaneDeparture className="text-danger"/>
                                          </div>
                                          <div className="desinfo  text-start">
                                            <h6>Take off</h6>
                                            <span className="timeSho">{ timeSho(items.legs[0].departure)}</span>
                                          </div>
                                        </div>
                                        <div className="col-6 flat-right">
                                          <div className="desinfo text-end">
                                            <h6>Landing</h6>
                                            <span className="timeSho">{ timeSho(items.legs[0].arrival)}</span>
                                          </div>
                                          <div className="desicon text-end">
                                            <FaPlaneArrival className="text-danger"/>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-12">
                                      <p>Flight Duration {time_convert(items.legs[0].durationInMinutes)} </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-3">
                                  <div className="row">
                                    <div className="col-12 mt-3 d-flex align-items-center justify-content-center"><h5>{items.price.formatted}</h5></div>
                                    <div className="col-12 mt-3 d-flex align-items-center justify-content-center"><button  className="btn btn-primary">Book Now</button></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>):(<></>)}
                          </>):(<></>)
                        }
                        </>
                      ))
                    }
                </div>
              ))
            } 
              </>
            ))
        
            }
            </>
          ))
        }
      </div>
    </div>

  </React.Fragment>
  );
};


export default ResultOne;
