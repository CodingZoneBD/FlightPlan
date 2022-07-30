import React, { ReactNode, useEffect  } from 'react'  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

const Layout = ({children}) => {

  useEffect(() =>{        
    document.body.style.userSelect = "none";
  });

  return (
    <React.Fragment>
      <Header />
      <ToastContainer />
      <div className="container-fluid mainbody">{children}</div>
      <Footer />
    </React.Fragment>
  )

}

export default Layout