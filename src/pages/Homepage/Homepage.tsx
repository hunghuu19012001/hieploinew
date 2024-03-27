import Navbar from '../../component/navbar/Navbar'
import Newproduct from '../../component/NewProduct/Newproduct'
// import Footer from '../../component/Footer/Footer'
// import Searchbar from './Searchbar'
// import banner3 from "../../assets/images/banner3.jpg"
import shbg from "../../assets/images/shbg.png"
import bannerbg from "../../assets/images/slide.png"
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import './banner.css'
const Homepage = () => {
    useEffect(() => {
        anime({
            targets: '.ani_image',
            translateX: 70,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine'
        });
    },[]);
  return (
    <div>
        <div className='flex flex-col flex-row'>
            <div><Navbar/></div>
{/* 
            <div className='flex justify-center my-20	'>
                <img  src={banner3} />
            </div>
            <div><Searchbar/></div> */}
            
                    <section className="home relative text-white">
                              <div className="content flex flex-col md:flex-row">
                                <div className="left md:w-2/5  w-5/6 md:p-8 p-4 md:pl-40 md:mt-40 ">

                                    <h2 className="md:text-4xl  mb-8 ">Cửa Hàng Xe Máy - Xe Điện</h2>
                                    <h1 className='md:text-8xl text-5xl mb-8 font-bold text-center md:text-left'>HIỆP LỢI</h1>
                                    {/* <p className="text-white">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                                    <div>
                                        <ul className=''>
                                            <li className='flex items-center mb-2 text-base'>
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
                                    </div>
                                  </div>

                                  <div className="right md:w-3/5 w-full overflow-x-hidden md:mt-24">
                                      <div className="ani_image 	">
                                        <img className='w-full h-full ' src={shbg} alt="" />
                                      </div>
                                  </div>
                              </div>
                                {/* banner-background */}
                              <div className=" absolute top-0 -z-50  h-96 md:h-full md:w-full" >
                                    <img className='bannerbg md:bg-contain bg-cover   md:h-full md:w-full' src={bannerbg} alt="" />
                              </div>

                  </section>
                  <div><Newproduct/></div>
           
        </div>



        {/* <div><Footer/></div> */}
    </div>
  )
}

export default Homepage