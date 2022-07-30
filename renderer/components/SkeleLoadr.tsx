import React, { useEffect, useState } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { FaHome, FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaTelegramPlane, FaArrowRight } from "react-icons/fa";


  const SkeleLoad = () =>  {
   
return (
  <React.Fragment>
    <div className="row overflow-auto mt-2 mb-5">
      <div className="col-sm-12 col-md-4 col-lg-3 mt-3 mb-4">
        <div className="row">
          <div className="col-12 mt-2">
            <div className="accordion" id="Airlines">
              <div className="accordion-item text-end">
                <h2 className="accordion-header">
                  <div className="accordion-button" aria-expanded="true">
                    <Typography className="div w-100 d-flex justify-content-between p-2" variant="h5">
                      <Skeleton  animation="wave" className="w-75" />
                    </Typography>
                  </div>
                </h2>
                
                <div id="collapseAirlines" className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    <Typography className="div w-100" variant="h6">
                      <Skeleton  animation="wave" className="w-75" />
                      <Skeleton  animation="wave" className="w-75" />
                      <Skeleton  animation="wave" className="w-75" />
                      <Skeleton  animation="wave" className="w-75" />
                      <Skeleton  animation="wave" className="w-75" />
                      <Skeleton  animation="wave" className="w-75" />
                      <Skeleton  animation="wave" className="w-75" />
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="col-sm-12 col-md-8 col-lg-9 mb-4 p-3">
          <Card className="card border shadow-5 bg-light w-100 mb-2">
            <div className="row p-3">
              <div className="col-2 border-end">
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-7 border-end ">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                      <Typography className="div mt-2 w-100" variant="h6">
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                      </Typography>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">

                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h5">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h2">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="card border shadow-5 bg-light w-100 mb-2">
            <div className="row p-3">
              <div className="col-2 border-end">
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-7 border-end ">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                      <Typography className="div mt-2 w-100" variant="h6">
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                      </Typography>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">

                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h5">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h2">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="card border shadow-5 bg-light w-100 mb-2">
            <div className="row p-3">
              <div className="col-2 border-end">
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-7 border-end ">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                      <Typography className="div mt-2 w-100" variant="h6">
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                      </Typography>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">

                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h5">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h2">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="card border shadow-5 bg-light w-100 mb-2">
            <div className="row p-3">
              <div className="col-2 border-end">
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-7 border-end ">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                      <Typography className="div mt-2 w-100" variant="h6">
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                      </Typography>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">

                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h5">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h2">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="card border shadow-5 bg-light w-100 mb-2">
            <div className="row p-3">
              <div className="col-2 border-end">
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-7 border-end ">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                      <Typography className="div mt-2 w-100" variant="h6">
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                      </Typography>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">

                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h5">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h2">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="card border shadow-5 bg-light w-100 mb-2">
            <div className="row p-3">
              <div className="col-2 border-end">
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Skeleton  animation="wave" className="shadow-2-strong carriers mt-1"  variant="circular"  />
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div mt-2 w-100 text-center" variant="h6">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-7 border-end ">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                      <Typography className="div mt-2 w-100" variant="h6">
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                          <Skeleton  animation="wave" className="w-100" />
                      </Typography>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">

                  <div className="col-12 mt-4 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h5">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <Typography className="div w-100 text-center" variant="h2">
                      <Skeleton  animation="wave" className="w-100" />
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Card>
      </div>
    </div>

  </React.Fragment>
  );
};


export default SkeleLoad;
