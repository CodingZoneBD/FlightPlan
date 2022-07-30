import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Router from 'next/router'
import { toast } from "react-toastify";
import Layout from '../components/Layout'
import airports from '../lib/airports.json'

import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaTelegramPlane, FaArrowRight } from "react-icons/fa";

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import moment from "moment";
import Select, { OnChangeValue } from 'react-select'
import 'react-dates/initialize';
import { SingleDatePicker, DateRangePicker } from "react-dates";
import { exit } from 'process';



const Home = () =>  {

  const [date, setDate] = useState(null);
  const [focus, setFocus] = useState(false);
  const [state, setState] = React.useState({
    FlyingFrom: '',
    FlyingTo: '',
    deDate: date,
    classType: 'Economy',
  });


  const ariptData =  airports.map((airports) => (
      { 
          value: `${airports.code}` ,
          label: `${airports.name} (`+airports.code+`)`
      }
  ),)

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setState({
      ...state,
      classType: value
    });
  };

  const handleChangeFrom = (newValue) => {
    setState({
      ...state,
      FlyingFrom: newValue.value
    });
  };

  const handleChangeTo = (newValue)  => {
    setState({
      ...state,
      FlyingTo: newValue.value
    });
  };

  const [adult, setAdult] = useState(1);

  const IncrementHandler = (e) => {
    setAdult( adult === 16 ? adult : adult + 1);
  };

  const DecrementHandler = (e) => {
    setAdult(adult === 1 ? adult : adult - 1);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let dates = new Intl.DateTimeFormat('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
    const FlyiFrom = state.FlyingFrom;
    const FlyiTo   = state.FlyingTo;
    const deDate   = dates;
    const Adult    = adult;
    const classt    = state.classType;
    
    if(FlyiFrom == '' || FlyiTo == '' || deDate == ''){
      toast.error('⚠️ Please Select Location & Date', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      Router.push({
        pathname: './oneway',
        query: { from:FlyiFrom, to:FlyiTo, ddate:deDate, adlt:Adult , clt:classt },
      })
    }
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };


  const handleSubmitRound = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let dates = new Intl.DateTimeFormat('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(startDate);
    let rates = new Intl.DateTimeFormat('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(endDate);
    const FlyiFrom = state.FlyingFrom;
    const FlyiTo   = state.FlyingTo;
    const deDate   = dates;
    const reDate   = rates;
    const Adult    = adult;
    const classt   = state.classType;

    if(FlyiFrom == '' || FlyiTo == '' || deDate == '' || reDate == ''){
      toast.error('⚠️ Please Select Location & Dates', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      Router.push({
        pathname: './round',
        query: { from:FlyiFrom, to:FlyiTo, ddate:deDate, reDate:reDate, adlt:Adult , clt:classt },
      })
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <React.Fragment>
      <Layout>
        <Head>
          <title>FlightPlan - Plan your travel itinerary with us!!!</title>
        </Head>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <ul className="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="btn nav-link active" id="ex-with-icons-tab-2" data-mdb-toggle="tab" href="#Way" role="tab"
                        aria-controls="Way" aria-selected="false"><i className="fas fa-chart-line fa-fw me-2"></i>One Way</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="btn nav-link" id="ex-with-icons-tab-1" data-mdb-toggle="tab" href="#Round" role="tab"
                        aria-controls="Round" aria-selected="true"><i className="fas fa-chart-pie fa-fw me-2"></i>Round Trip</a>
                    </li>
                  </ul>
                </h5>
                <div className="tab-content" id="ex-with-icons-content">
                  <div className="tab-pane fade show active" id="Way" role="tabpanel" aria-labelledby="ex-with-icons-tab-2">
                    <form className="row g-3" onSubmit={handleSubmit}>
                      <div className="col-md-6 col-lg-3">
                        <div className="input-group border-0 mb-3">
                            <span className="input-group-text" id="search-addon">
                            <FaPlaneDeparture className="inlg"/>
                            </span>
                            <div className="form-control border-0 form-outline">
                                <Select className="select-input selectsr" 
                                onChange={handleChangeFrom}
                                options={ariptData} placeholder="Flying From" />
                            </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="input-group border-0 mb-3">
                            <span className="input-group-text" id="search-addon">
                            <FaPlaneArrival className="inlg"/>
                            </span>
                            <div className="form-control border-0 form-outline">
                                <Select className="select-input selectsr" 
                                onChange={handleChangeTo}
                                options={ariptData} placeholder="Flying To" />
                            </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="input-group border-0 mb-3">
                            <span className="input-group-text" id="search-addon">
                            <FaCalendarAlt className="inlg"/>
                            </span>
                            <div className="form-control border-0 form-outline">
                                <SingleDatePicker
                                    className="form-control"
                                    date={date} // momentPropTypes.momentObj or null
                                    onDateChange={(date) => setDate(date)} // PropTypes.func.isRequired
                                    focused={focus} // PropTypes.bool
                                    onFocusChange={({ focused }) => setFocus(focused)} // PropTypes.func.isRequired
                                    numberOfMonths={1}
                                    displayFormat="DD/MMM/YYYY"
                                    showClearDate={true}
                                    isOutsideRange={() => false}
                                    placeholder="Departure"
                                />
                            </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <button type="submit" className="btn btn-success w-100">Search flights <FaTelegramPlane className="subbt"/> </button>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <Button className="btn btn-primary" aria-describedby={id} variant="contained" onClick={handleClick}>
                           {adult} Travellers, {state.classType} 
                        </Button>
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                        >
                          <Typography sx={{ p: 2 }}>
                          <div className="p-2">
                            <ul className="m-0 p-0">
                              <li className="fs-14 d-flex justify-content-between">
                                  <input type="hidden" name="Adult" value={adult} />
                                  <span>
                                      <span className="font-weight-500">{adult}</span>
                                      <span className="fs-14 font-weight-500"> Adult<span>s</span></span>
                                  </span>
                                  <div className="spinner d-flex">
                                      <span className="minus"  onClick={DecrementHandler}>-</span>
                                      <span className="plus" onClick={IncrementHandler}>+</span>
                                  </div>
                              </li>
                              {/* <li className="fs-14 d-flex justify-content-between">
                                  <input type="hidden" name="Child" value={state.Child} />
                                  <span>
                                      <span className="font-weight-500">0</span>
                                      <span className="fs-14 font-weight-500"> Child</span>
                                      <span className="cat-info fs-12"> 2-12 years</span>
                                  </span>
                                  <div className="spinner d-flex">
                                      <span className="minus">-</span>
                                      <span className="plus">+</span>
                                  </div>
                              </li>
                              <li className="fs-14 d-flex justify-content-between">
                                  <input type="hidden" name="Infant" value={state.Infant} />
                                  <span>
                                      <span className="font-weight-500">0</span>
                                      <span className="fs-14 font-weight-500 ms-1"> Infant</span>
                                      <span className="cat-info fs-12 ms-1">Below 2 years</span>
                                  </span>
                                  <div className="spinner d-flex">
                                      <span className="minus">-</span>
                                      <span className="plus">+</span>
                                  </div>
                              </li> */}
                            </ul>
                            <div className="class-type mt-2">
                              <select className="form-select" name='classType' onChange={selectChange} aria-label="Default select example">
                                <option value="economy" selected>Economy</option>
                                <option value="premiumeconomy">Premium Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First</option>
                              </select>
                            </div>
                            <div className="">
                                <button className="btn btn-dark w-100 mt-1" type="submit">Confirm</button>
                            </div>
                          </div>
                          </Typography>
                        </Popover>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="Round" role="tabpanel" aria-labelledby="ex-with-icons-tab-1">
                    <form className="row g-3"  onSubmit={handleSubmitRound}>
                      <div className="col-md-6 col-lg-3">
                        <div className="input-group border-0 mb-3">
                            <span className="input-group-text" id="search-addon">
                            <FaPlaneDeparture className="inlg"/>
                            </span>
                            <div className="form-control border-0 form-outline">
                                <Select className="select-input selectsr" 
                                onChange={handleChangeFrom}
                                options={ariptData} placeholder="Flying From" />
                            </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="input-group border-0 mb-3">
                            <span className="input-group-text" id="search-addon">
                            <FaPlaneArrival className="inlg"/>
                            </span>
                            <div className="form-control border-0 form-outline">
                                <Select className="select-input selectsr" 
                                onChange={handleChangeTo}
                                options={ariptData} placeholder="Flying To" />
                            </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="input-group d-flex flex-row border-0 mb-3">
                            <span className="input-group-text" id="search-addon">
                            <FaCalendarAlt className="inlg"/>
                            </span>
                            <div className="border-0 form-outline">
                                <DateRangePicker
                                id="dateRang"
                                  startDate={startDate}
                                  startDateId="start-date"
                                  endDate={endDate}
                                  endDateId="end-date"
                                  onDatesChange={handleDatesChange}
                                  focusedInput={focusedInput}
                                  onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                                  numberOfMonths={1}
                                  displayFormat="DD/MMM/YYYY"
                                  showClearDate={true}
                                  startDatePlaceholderText="Departure"
                                  endDatePlaceholderText="Return Date"
                                />
                            </div>
                            
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <button type="submit" className="btn btn-success w-100">Search flights <FaTelegramPlane className="subbt"/> </button>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <Button className="btn btn-primary" aria-describedby={id} variant="contained" onClick={handleClick}>
                           {adult} Travellers, {state.classType} 
                        </Button>
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                        >
                          <Typography sx={{ p: 2 }}>
                          <div className="p-2">
                            <ul className="m-0 p-0">
                              <li className="fs-14 d-flex justify-content-between">
                                  <input type="hidden" name="Adult" value={adult} />
                                  <span>
                                      <span className="font-weight-500">{adult}</span>
                                      <span className="fs-14 font-weight-500"> Adult<span>s</span></span>
                                  </span>
                                  <div className="spinner d-flex">
                                      <span className="minus"  onClick={DecrementHandler}>-</span>
                                      <span className="plus" onClick={IncrementHandler}>+</span>
                                  </div>
                              </li>
                            </ul>
                            <div className="class-type mt-2">
                              <select className="form-select" name='classType' onChange={selectChange} aria-label="Default select example">
                                <option value="economy" selected>Economy</option>
                                <option value="premiumeconomy">Premium Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First</option>
                              </select>
                            </div>
                            <div className="">
                                <button className="btn btn-dark w-100 mt-1" type="submit">Confirm</button>
                            </div>
                          </div>
                          </Typography>
                        </Popover>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Home;


