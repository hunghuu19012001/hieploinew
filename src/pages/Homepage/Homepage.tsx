// import Navbar from '../../component/navbar/Navbar'
// import Newproduct from '../../component/NewProduct/Newproduct'
import Xehonda from '../Homepage/Xehonda'
import Xeyamaha from '../Homepage/Xeyamaha'
import Xekazuki from '../Homepage/Xekazuki'
// import Choosebanner from '../Homepage/Choosebanner'
import Introhome from '../Homepage/Introhome'
import CarouselHotDeal from './CarouselHotDeal'
// import Footer from '../../component/Footer/Footer'
// import Searchbar from './Searchbar'
// import banner3 from "../../assets/images/banner3.jpg"
import exbg from "../../assets/images/xeyamaha/xecontay/cacphienban/exciter/Ex155VvaPhienBanCaoCap/60NamYamahaTranhTaiMotogb.png"
// import bannerbg from "../../assets/images/slide.png"
// import bannerbg from "../../assets/images/bg-banner.jpg"
import bannerbg from "../../assets/images/bgbannertest.png"
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import './banner.css'
import Footer from '../../component/Footer/Footer'
import {NavbarWithMegaMenu}  from '../../component/navbar/NavbarMain'
const Homepage = () => {
    useEffect(() => {
        anime({
            targets: '.ani_image',
            translateX: 50,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine'
        });
    },[]);
  return (
    
        <div className='flex flex-col flex-row'>
            <div><NavbarWithMegaMenu /></div>
            
{/*     
            <div className='flex justify-center my-20	'>
                <img  src={banner3} />
            </div>
            <div><Searchbar/></div> */}
            
                    <section className="home relative text-white md:h-screen ">
                              <div className="content flex flex-col md:flex-col ">
                                <div className="left md:w-4/5 md:mx-auto   w-5/6 mx-auto md:p-8 px-4 pt-4  md:mt-40 ">

                                    <h2 className="hidden md:block md:text-7xl md:font-bold  mb-6 text-center text-xl">Cửa Hàng Xe Máy - Xe Điện <span className="md:my-10 md:text-8xl hidden md:block">HIỆP LỢI</span></h2>
                                    <h2 className="sm:hidden sm:block  mb-4 text-center text-lg">Xe Máy - Xe Điện </h2>
                                    <h1 className='sm:hidden sm:block text-4xl font-bold text-center'>HIỆP LỢI</h1>
                                    {/* <p className=' md:text-center md:text-6xl md:mr-60 md:font-semibold'>HIỆP LỢI</p> */}
                                    {/* <p className="md:text-3xl text-xs font-bold md:font-semibold md:my-10 my-5 md:text-center text-center">UY TÍN - CHUYÊN NGHIỆP - NHANH CHÓNG</p>
                                    <p className='md:mb-10 md:text-2xl text-sm'>Với hơn 20 năm hoạt động từ năm 1998, chúng tôi tự hào là địa chỉ được hàng ngàn khách hàng tin dùng. Sứ mệnh của chúng tôi không chỉ là bán xe máy mà còn là mang lại sự an tâm và hài lòng tối đa cho mỗi khách hàng.</p> */}
                                    

                                    {/* <div className='hidden md:block'>
                                        <ul className='md:text-lg'>
                                            <li className='flex items-center mb-2 '>
                                                <svg className="w-6 h-6 mr-2 text-white-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <p>Bán các loại xe máy, xe đạp điện: Honda, Yamaha, kazuki</p>
                                                
                                            </li>
                                            <li className='flex items-center mb-2'>
                                                <svg className="md:w-6 md:h-6 w-4 h-4 mr-2 text-white-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <p>Sỉ lẻ các phụ tùng chính hãng</p>

                                            </li>
                                            <li className='flex items-center mb-2'>
                                                <svg className="w-6 h-6 mr-2 text-white-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <p>Tư vấn chuyên nghiệp về bảo dưỡng và sửa chữa các loại xe</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="button flex mt-8	">
                                        <button className="btn1 btn-primary mr-4 rounded-full md:px-12 md:py-4 px-4 border-2 border-white md:text-base text-xs">Xem Thêm</button>
                                        <button className="btn2 btn-secondary rounded-full bg-white text-black md:px-12 md:py-4 px-4 py-2 md:text-base text-xs">Liên Hệ</button>
                                    </div> */}
                                  </div>

                                  <div className="  w-full overflow-x-hidden ">
                                      <div className="ani_image ">
                                        <img className='mx-auto w-36 h-36 md:w-auto md:h-auto' src={exbg} alt="" />
                                      </div>
                                  </div> 
                              </div>
                                {/* banner-background */}
                              <div className=" absolute top-0 -z-50  md:h-full md:w-full " >
                                    <div className="banner-overlay w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
                                    <img className='bannerbg md:bg-contain bg-cover   md:h-full md:w-full bg-black opacity-100' src={bannerbg} alt="" />
                              </div>

                  </section>
                  {/* <div><Choosebanner/></div> */}
                  <div><CarouselHotDeal/></div>
                  {/* <div><Newproduct/></div> */}
                  <div><Xehonda /></div>
                  <div><Xeyamaha /></div>
                  <div><Xekazuki /></div>
                  <div><Introhome /></div>
                  <div><Footer /></div>
                  

                  
                
        </div>

        

        /* <div><Footer/></div> */
    
  )
}

export default Homepage