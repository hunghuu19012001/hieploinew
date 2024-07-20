import React, { ReactNode } from 'react';
import './LogosCarousel.css';

// import { FaFacebookF,FaGoogle ,FaTwitter, FaInstagram } from 'react-icons/fa';

interface Props {
  children: ReactNode;
}
const LogosCarousel: React.FC<Props> = ({ children }) =>{
    
  return (
    <div className="overflow-x-scroll infinite-scroll-container">
      <div className="infinite-scroll-content">{children}</div>
    </div>
  )
}

export default LogosCarousel
