import React from 'react';

const PricingPlans = () => {
  return (
    <div className="max-h-screen flex flex-col items-center mb-80 md:mb-10">
      {/* Background Section */}
      <div 
        className="w-full h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-white" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://cdn.pixabay.com/photo/2014/07/31/23/10/biker-407123_1280.jpg')` }}
      >

        {/* Main Content */}
        <div className="text-center mt-20">
          <h2 className="text-lg md:text-2xl font-semibold uppercase mb-4">CỬA HÀNG XE MÁY - XE ĐIỆN</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">HIỆP LỢI</h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto mb-16">
							Điểm đến tin cậy cho mọi nhu cầu về xe máy
          </p>
        </div>

        {/* Social Icons */}
        <div className="absolute top-0 right-0 p-6 space-x-4 flex">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
      </div>

      {/* Cards */}
      <div className="relative w-full -mt-16 px-4 md:px-0">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-screen-2xl mx-auto p-8 border-2 bg-white rounded-lg">
          {/* First Card */}
          <div className="bg-white text-black p-6 rounded-lg  flex flex-col space-y-4 md:w-1/3 group hover:bg-gray-900 hover:text-white transition duration-300">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4z" />
              </svg>
              <h3 className="font-bold text-xl">HONDA</h3>
            </div>
            <p className="text-sm">
								Honda nổi tiếng với những dòng xe máy bền bỉ, tiết kiệm nhiên liệu, và phù hợp cho cả việc đi lại hàng ngày lẫn những chuyến đi xa.            </p>
								<button className=" flex items-center bg-transparent md:text-base text-sm font-thin tracking-widest text-white">
                <span className="relative pr-4 pb-1 text-black group-hover:text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Xem tất cả</span>
              <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-white">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </button>
					</div>

          {/* Second Card */}
          <div className="bg-white text-black p-6 rounded-lg flex flex-col space-y-4 md:w-1/3 group hover:bg-gray-900 hover:text-white transition duration-300">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M12 3l9 9-9 9" />
              </svg>
              <h3 className="font-bold text-xl">YAMAHA</h3>
            </div>
            <p className="text-sm">
								Yamaha mang đến nhiều lựa chọn xe máy đa dạng, từ xe tay ga cho đến xe thể thao mạnh mẽ, đáp ứng nhu cầu của mọi loại người dùng            </p>
								<button className=" flex items-center bg-transparent md:text-base text-sm font-thin tracking-widest text-white">
                <span className="relative pr-4 pb-1 text-black group-hover:text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Xem tất cả</span>
              <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-white">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </button>
					</div>

          {/* Third Card */}
          <div className="bg-white text-black p-6 rounded-lg  flex flex-col space-y-4 md:w-1/3 group hover:bg-gray-900 hover:text-white transition duration-300">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10H7z" />
              </svg>
              <h3 className="font-bold text-xl">XE ĐIỆN</h3>
            </div>
            <p className="text-sm">
								Hãy đón đầu xu hướng tương lai với dòng xe máy điện thân thiện với môi trường, tiết kiệm chi phí và hiệu quả trong việc di chuyển.            </p>
						<button className=" flex items-center bg-transparent md:text-base text-sm font-thin tracking-widest text-white">
                <span className="relative pr-4 pb-1 text-black group-hover:text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Xem tất cả</span>
              <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-white">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
