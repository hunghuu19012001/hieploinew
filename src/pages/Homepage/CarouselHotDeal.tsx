import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jenus from "../../assets/images/xeyamaha/xega/cacphienban/jenus/dacbiet/MauMoi.png"
import exciter from '../../assets/images/xeyamaha/xecontay/cacphienban/exciter/Ex155VvaPhienBanCaoCap/60NamYamahaTranhTaiMotogb.png'
import siriusfi from '../../assets/images/xeyamaha/xeso/siriusfi/vanhduc/HoanToanMoi.png'
import vision from '../../assets/images/xehonda/visionphienbancodien.png'
import shmode from '../../assets/images/xehonda/shmode.png'
const CarouselHotDeal = () => {
  const popularBikes = [
    { id: 1, name: 'Jenus', image: jenus, link: '/xe-honda' },
    { id: 2, name: 'Sirius Fi', image: siriusfi, link: '/xe-yamaha' },
    { id: 3, name: 'Exciter', image: exciter , link: '/xe-yamaha' },
    { id: 4, name: 'Vision', image: vision , link: '/xe-honda' },
    { id: 5, name: 'SH Mode', image: shmode, link: '/xe-honda' },
    // Thêm các xe máy khác vào đây
  ];

  // Cấu hình slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Thiết lập slider tự động chạy
    autoplaySpeed: 2000, // Đặt thời gian giữa các slide là 3 giây
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className='w-4/5 mx-auto mt-10 md:p-12'>
      {popularBikes.map((bike) =>(
        // <div key={bike.id} className="px-4">
        //   <div className="bg-white rounded-lg overflow-hidden shadow-md relative group">
        //     <img src={bike.image} alt={bike.name} className="w-full h-64 object-cover" />
        //     <div className="p-4 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        //       <div className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white py-2 px-4 rounded-md transition-colors duration-300">
        //         <a href={bike.link} className="text-xl font-bold">{bike.name}</a>
        //         <div className="text-sm">Xem chi tiết</div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div key={bike.id} className="px-2">
          <div className="da relative flex  flex-col justify-center rounded-xl overflow-hidden bg-white">
            <div className="absolute inset-0 bg-center dark:bg-black"></div>
            <div className="group flex flex-col gap-5 relative m-0   shadow-xl  sm:mx-auto sm:max-w-lg bg-blue-gray-50 ">
              <div className=" z-10 gap-3 bg-white h-5/6 w-full overflow-hidden rounded-xl border-2 border-gray-200  opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70 hover:border-red-100">
                <img src={bike.image} alt={bike.name} className="animate-fade-in rounded-xl block h-80 w-auto scale-100 transform  object-center opacity-100 transition duration-300 group-hover:scale-110"  />
                <div className="p-4 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className=" bg-gray-800 bg-opacity-70 ">
                  {/* hover:bg-opacity-70 text-white py-5 px-5 rounded-full transition-colors duration-300 bg-red-800 bg-opacity-50*/}
                    {/* <a href={bike.link} className="text-base font-semibold">Xem chi tiết</a> */}
                    <button
                        className="relative text-center h-20 w-60 transition-all duration-500 
                            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all
                            before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50
                            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
                            after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
                    >
                        <span className="relative text-white uppercase font-medium">Xem chi tiết</span>
                    </button>
                  </div>
              </div>
              </div>
              <div className=" bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out ">
                <h1 className="font-serif text-2xl font-bold text-red-900 ">{bike.name}</h1>
                <h1 className="text-sm font-light text-gray-800 ">Liên hệ</h1>
              </div>
            </div>
          </div>
          
        </div>
        
      ))}
    </Slider>
  )
}

export default CarouselHotDeal
