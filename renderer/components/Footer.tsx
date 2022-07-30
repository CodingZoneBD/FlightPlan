import React,{ useEffect }  from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaFacebookF,FaGoogle, FaInstagram, FaLinkedinIn, FaGithub} from "react-icons/fa";

const Footer = () => {
    const todaysDate = new Date()
    const currentYear = todaysDate.getFullYear()
    
  return (
    <footer className="fixed-bottom mt-auto bg-dark text-center text-white">
        {/* <div className="container p-1">
            <section className="">
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaFacebookF className='faicon' /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaGoogle className='faicon' /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaFacebookF className='faicon' /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaInstagram className='faicon' /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaLinkedinIn className='faicon' /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaGithub className='faicon' /></a>
            </section>
        </div> */}
        <div className="text-center ftcop p-3">
        Copyright © {currentYear}. FlightPlan All Rights Reserved.
        </div>
    </footer>
  )
}

export default Footer;
