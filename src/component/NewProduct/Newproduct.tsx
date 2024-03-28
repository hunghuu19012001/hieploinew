import airblade from "../../assets/images/xe/air blade.png"
import blade from "../../assets/images/xe/blade.png"
import future from "../../assets/images/xe/future.png"
import lead from "../../assets/images/xe/lead.png"
import sh from "../../assets/images/xe/sh.png"
import sh350i from "../../assets/images/xe/sh350i.png"
import vario from "../../assets/images/xe/vario.png"
import grande from "../../assets/images/xe/grande.png"
import honda from "../../assets/images/icons/honda.png"
import yamaha from "../../assets/images/icons/yamaha.png"

import "../NewProduct/Newproduct.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Newproduct = () => {
  return (
    <div>
        <section className="latest top">
            <div className="scontainer text-center w-4/5 m-auto md:p-12">
                <div className="heading">
                    <h1>Latest Popular Bike</h1>
                    <div className="lines flex1">
                        <div className="line"> <i className="fas fa-circle"></i> </div>
                        <button>50% OFF</button>
                        <div className="line line2"> <i className="fas fa-circle"></i> </div>
                    </div>
                </div>

                <div className="content md:grid md:grid-cols-4 gap-7 top flex flex-col">
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={airblade} alt="" />
                            <div className="flex1 flex justify-between items-center text-green-600 absolute top-0 w-full">
                                <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label>
                                {/* <FontAwesomeIcon icon={faHeart} className="text-xl"/> */}
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <h3 className="font-semibold text-xl">Air Blade</h3>
                            <p>(Bản tiêu chuẩn)</p>
                            <h2 className="font-normal text-lg text-green-600 mx-0 my-5"> <span>Khoảng $2000</span> </h2>
                            <button className="text-sm">Xem Chi Tiết</button>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={blade} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label>
                                <img className="text-xl" src={honda} alt="" />                            
                            </div>
                        </div>

                        <div className="detalis ">
                            <h3 className="font-semibold text-xl">Blade</h3>
                            <p>(Bản tiêu chuẩn)</p>
                            <h2 className="font-normal text-lg text-green-600 mx-0 my-5"> <span>Khoảng $2000</span> </h2>
                            <button className="text-sm">Xem Chi Tiết</button>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={future} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label>
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <h3 className="font-semibold text-xl">Future</h3>
                            <p>(Bản tiêu chuẩn)</p>
                            <h2 className="font-normal text-lg text-green-600 mx-0 my-5"> <span>Khoảng $2000</span> </h2>
                            <button className="text-sm">Xem Chi Tiết</button>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={lead} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label>
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <h3 className="font-semibold text-xl">Lead</h3>
                            <p>(Bản tiêu chuẩn)</p>
                            <h2 className="font-normal text-lg text-green-600 mx-0 my-5"> <span>Khoảng $2000</span> </h2>
                            <button className="text-sm">Xem Chi Tiết</button>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={sh} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label>
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <h3 className="font-semibold text-xl">SH 125i/150i</h3>
                            <p>(Bản tiêu chuẩn)</p>
                            <h2 className="font-normal text-lg text-green-600 mx-0 my-5"> <span>Khoảng $2000</span> </h2>
                            <button className="text-sm">Xem Chi Tiết</button>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={sh350i} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label>
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <h3 className="font-semibold text-xl">SH 350i</h3>
                            <p>(Bản tiêu chuẩn)</p>
                            <h2 className="font-normal text-lg text-green-600 mx-0 my-5"> <span>Khoảng $2000</span> </h2>
                            <button className="text-sm">Xem Chi Tiết</button>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={vario} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label>
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <h3 className="font-semibold text-xl">Vario</h3>
                            <p>(Bản tiêu chuẩn)</p>
                            <h2 className="font-normal text-lg text-green-600 mx-0 my-5"> <span>Khoảng $2000</span> </h2>
                            <button className="text-sm">Xem Chi Tiết</button>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={grande} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label>
                                {/* <FontAwesomeIcon icon={faHeart} className="text-xl"/> */}
                                <img className="text-xl" src={yamaha} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <h3 className="font-semibold text-xl">Grande</h3>
                            <p>(Bản tiêu chuẩn)</p>
                            <h2 className="font-normal text-lg text-green-600 mx-0 my-5"> <span>Khoảng $2000</span> </h2>
                            <button className="text-sm">Xem Chi Tiết</button>
                        </div>
                    </div>
                </div>
            </div>
        </section> 

    </div>
  )
}

export default Newproduct
