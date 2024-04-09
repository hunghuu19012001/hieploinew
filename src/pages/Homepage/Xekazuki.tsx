// import honda from "../../assets/images/icons/kazukibig.png"
// import yamaha from "../../assets/images/icons/yamaha.png"
import KazukiJeekMen from '../../assets/images/xedien/xekazuki/KazukiJeekMen.png'
import KazukiLx150 from '../../assets/images/xedien/xekazuki/KazukiLx150.jpg'
import VecreaLx150 from '../../assets/images/xedien/xekazuki/VecreaLx150.png'
import XmenKazukiStar from '../../assets/images/xedien/xekazuki/XmenKazukiStar.jpg'
import Button from '@mui/material/Button';
// import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const xekazuki = () => {
  return (
    <div>
      <section className="latest top">
            <div className="scontainer text-center w-4/5 m-auto md:p-12">
                <div className="heading text-left relative md:mb-10 mt-10 my-5 bg-red-100 rounded-md flex flex-row justify-between">
                    <h1 className="md:text-4xl font-normal text-2xl w-fit bg-button text-white p-1 rounded-md">KAZUKI</h1>
                    {/* <div className="lines relative w-full flex1">
                        <div className="line border border-solid border-gray-300 h-3 absolute left-0 top-12 z-10"> <FontAwesomeIcon className="absolute right-0 top-0 text-white" icon={faCircle}/> </div>
                        <button>50% OFF</button>
                        <div className="line line2 absolute right-0 left-59%"> <FontAwesomeIcon className="absolute left-full" icon={faCircle}/> </div>
                    </div> */}
                    <section className="grid w-full place-content-end bg-slate-900">
                        <button className="btn group flex items-center bg-transparent p-2 px-6 md:text-xl text-sm font-thin tracking-widest text-white">
                            <span className="relative pr-4 pb-1 text-black after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-button after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Xem tất cả</span>
                            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-2 fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-button">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                            </svg>
                        </button>
                    </section>
                </div>

                <div className="content md:grid md:grid-cols-4 gap-7 top flex flex-col">
                    <div className="box p-3 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={XmenKazukiStar} alt="" />
                            <div className="flex1 flex justify-between items-center text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                {/* <FontAwesomeIcon icon={faHeart} className="text-xl"/> */}
                                {/* <img className="text-xl" src={honda} alt="" /> */}
                            </div>
                        </div>

                        {/* <div className="detalis ">
                            <h3 className="font-semibold text-xl">Air Blade</h3>
                            <p>(Bản tiêu chuẩn)</p>
                            <h2 className="font-normal text-lg text-green-600 mx-0 my-5"> <span>Khoảng Liên hệ</span> </h2>
                            <button className="text-sm">Xem Chi Tiết</button>
                        </div> */}
                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">Xmen Kazuki Star</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">Liên hệ</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={VecreaLx150} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                {/* <img className="text-xl" src={honda} alt="" />                             */}
                            </div>
                        </div>

                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">Vecrea Lx 150</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">Liên hệ</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={KazukiLx150} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                {/* <img className="text-xl" src={honda} alt="" /> */}
                            </div>
                        </div>

                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">Kazuki Lx 150</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">Liên hệ</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={KazukiJeekMen} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                {/* <img className="text-xl" src={honda} alt="" /> */}
                            </div>
                        </div>

                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">Kazuki Jeek Men</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">Liên hệ</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    
                    
                    

                </div>
                                

            </div>
        </section>
    </div>
  )
}

export default xekazuki
