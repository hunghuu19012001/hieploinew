import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BiMenu, BiX } from 'react-icons/bi';
import logohieploi from "../../assets/images/logohieploi.png"

function Navbar() {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen]= useState(false)
  const toggleNavMenuMobile = ()=> {setIsNavMenuMobileOpen(!isNavMenuMobileOpen)};
  const closeNavMenuMobile = () => {setIsNavMenuMobileOpen(!isNavMenuMobileOpen)};


  const [isCrolled, setIsCrolled] = useState(false);
  useEffect ( () => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      const scrolled = window.scrollY > scrollThreshold;
      setIsCrolled(scrolled);
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
},[]);

  return (
    // <div className={`md:fixed  top-0 w-full shadow-lg shadow-indigo-500/10 ${isCrolled ? "bg-white" : ""}`}>
    <div className={`md  top-0 w-full shadow-lg shadow-indigo-500/10 bg-white	 ${isCrolled ? "bg-white" : ""}`}>
      {/* bg-blue-950 */}
      <div className=" p-4 md:px-4  w-full">
          <div className="flex md:flex md:justify-between items-center md:mx-10 md:mr-28 ">
              <div className='flex-shrink-0 flex-initial w-80'>
                  <a href='/'>
                      <img className="mx-auto" src={logohieploi} alt="" />
                  </a>
              </div>
              <div>
                  <BiMenu className="text-green-600 cursor-pointer md:hidden flex-none w-9 h-9 " onClick={toggleNavMenuMobile}></BiMenu>

              </div>
              <div className={`text-white font-extrabold flex items-center space-x-16 hidden md:block  bg-white p-3 rounded-3xl text-lg`}>
                    <Link id="home" to="#" >Giới thiệu</Link>
                    <Link id="legalservices" to='#'>Xe máy</Link>

                    <Link id="visa"  to="#">Xe điện</Link>
                    <Link id="fasttrack" to="/fasttrack" >Lái xe an toàn</Link>
                    {/* <Link id="cruise" to="#" >Cruise</Link> */}
                    <Link id="travelinsurance" to="#" >Tin Tức</Link>
                    <Link id="contactus" to="/contactus" >Liên hệ</Link>

              </div>  
          </div>   

          
      </div>

      <div className={`opacity-90 text-bold shadow-lg bg-slate-50 md:hidden fixed inset-y-0 right-0 z-50 w-1/2 ${isNavMenuMobileOpen ? 'flex' : 'hidden'}`}>
        {/* thêm lớp flex-col items-center justify-center h-full */}
        
            <div className="flex flex-col items-start justify-start h-full mt-5 ml-2" >
                    <Link to="/" >Giới thiệu</Link>
                    <Link to='#'>Xe máy</Link>
                    <Link  to="#">Xe điện</Link>
                    <Link  to="/fasttrack" >Lái xe an toàn</Link>
                    <Link to="#"   >Cruise</Link>
                    <Link to="#"    >Tin Tức</Link>
                    <Link to="#"    >Liên hệ</Link>

            </div>
          
            <div className="absolute top-4 right-4 cursor-pointer bg-blue-950 rounded-md" onClick={closeNavMenuMobile}>
              <BiX className="text-white w-6 h-6" />
            </div>
      </div>


    </div>
  )
}

export default Navbar