import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import Router, { useRouter } from 'next/router';
import Layout from '../components/Layout'
import SkeleLoad from '../components/SkeleLoad'

import ResultOne from '../components/ResultOne'
import airports from '../lib/airports.json'
import Flights from '../lib/Flights.json'

import { FaHome, FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaTelegramPlane, FaArrowRight } from "react-icons/fa";
import axios from 'axios'


const oneway = () =>  {

  const router = useRouter()
  const {from} = router.query;
  const {to} = router.query;
  const {ddate} = router.query;
  const {adlt} = router.query;
  const {clt} = router.query;
  
  // let dates = new Intl.DateTimeFormat('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(ddate);
  // console.log(from);

  const [Flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://skys.p.rapidapi.com/search',
      params: {
        adults: adlt,
        origin: from,
        destination: to,
        departureDate: ddate,
        cabinClass: clt,
        currency: 'BDT'
      },
      headers: {
        'X-RapidAPI-Key': 'b3904cxxxxxxxxxxxxxxxxxxxxxxxxxxxncad301f2a599',
        'X-RapidAPI-Host': 'skys.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      // console.log(response.data);
      setFlights(response.data);
      setLoading(false);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  const FlightD = JSON.stringify({Flights});
  const FlightJS = JSON.parse(FlightD);


  const FlightsData = [];
  FlightsData.push(FlightJS);
  
  // console.log(FlightsData);
  // console.log(router.query);

  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>One Way - FlightPlan </title>
        </Head>
        <div className="row">
          <div className="col-12">
            <div className="card">
                <div className="col-12">
                  <h2 className="btn btn-primary titelFl">One Way</h2>
                </div>
              <div className="card-body p-3 bg-primary">
                <div className="row">
                  <div className="col-12 text-white d-flex justify-content-between"> 
                    <span>
                    {
                      airports.filter((airport)=>{
                        if(from == airport.code){
                          return airport
                        }
                      }).map((airport,key)=>{
                        return <>{airport.name +' ('+airport.code+')'} </>
                      })
                    } <FaArrowRight/>  {
                      airports.filter((airport)=>{
                        if(to == airport.code){
                          return airport
                        }
                      }).map((airport,key)=>{
                        return <>{airport.name +' ('+airport.code+')'} </>
                      })
                    } </span>  <span>{ddate}</span> 
                    <Link href="/home"><a  className="btn btn-dark">search again</a></Link>
                  </div>
                  <div className="col-12 text-white"></div>
                </div>
              </div>
            </div>
          </div>
          {
            loading ? (<>
            <SkeleLoad />
            </>
            ):(
            <>
            {
              FlightsData[0].Flights.error ? (<>
                <div className='row mt-4'>
                  <div className='col-12 text-center'><h2 className='text-danger'>{FlightsData[0].Flights.message}</h2></div>
                </div>
              </>):(<>
              {
                FlightsData[0].Flights.context == undefined ? (<></>):(<>
                {
                  // console.log(FlightsData[0].Flights.context.totalResults)

                  FlightsData[0].Flights.context.totalResults == 0 ? (
                    <>
                    <div className='row mt-4'>
                      <div className='col-12 text-center'><h2 className='text-danger'>No results found</h2></div>
                    </div>
                    </>
                    ):(
                    <>
                    <ResultOne Flights={FlightsData[0]} />
                    </>
                    )
                
                }
                </>) 
              }
              </>)
              }
            </>
            ) 
          }
          
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default oneway;
