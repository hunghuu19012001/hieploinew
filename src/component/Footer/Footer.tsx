
import logohieploi from "../../assets/images/logohieploi.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF,FaGoogle ,FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="">
            
        <footer className="bg-black ">
            <div className="scontainer px-8 py-14 text-white md:grid md:grid-cols-6	md:gap-8 md:justify-between md:w-4/5 md:m-auto">
                <div className="box col-span-2">
                    <div className="logo md:mt-5">
                        <img src={logohieploi} alt=""/>
                    </div>
                    <p className=" mt-8 mb-3 text-xl font-semibold"> CỬA HÀNG XE MÁY - XE ĐIỆN HIỆP LỢI</p>
                    <p>Số GCNĐKDN: 0100774342</p>
                    <p>Cấp lần đầu: Ngày 22/09/2008</p>
                    <p>Đăng ký thay đổi lần thứ 10: Ngày 27/03/2020</p>
                    <p>Cơ quan cấp: Sở kế hoạch và đầu tư Tỉnh Bình Định</p>
                    <p>Địa chỉ: An Lương, Mỹ Chánh, Phù Mỹ, Bình Định</p>

                </div>

                <div className="box md:mr-5 col-span-3">
                    <h3 className="mt-8 mb-4 md:text-3xl md:font-semibold">THÔNG TIN LIÊN HỆ</h3>
                    <div className="grid lg:flex-row flex-col">
                        <ul className="grid lg:grid-cols-2  gap-2 md:gap-4 md:mt-4 ">
                            <div className="bg-gray-900 py-5 flex flex-row items-center hover:bg-black hover:text-gray-600 cursor-pointer lg:order-1">
                                <FontAwesomeIcon className="ml-10 mr-5" icon={faPhone} />
                                <a href="tel:+84917973844" className="md:text-3xl text-xl font-semibold pr-10 ">0917973844</a>
                            </div>
                            <div className="bg-gray-900 py-5 flex flex-row items-center hover:bg-black hover:text-gray-600 cursor-pointer lg:order-3">
                                <FontAwesomeIcon className="ml-10 mr-5" icon={faPhone} />
                                <a href="tel:+84917973844" className="md:text-3xl text-xl font-semibold pr-10 ">0914672688</a>
                            </div>
                            <div className="bg-gray-900 py-5 flex flex-row items-center hover:bg-black hover:text-gray-600 cursor-pointer lg:order-5">
                                <FontAwesomeIcon className="ml-10 mr-5" icon={faPhone} />
                                <a href="tel:+84917973844" className="md:text-3xl text-xl font-semibold pr-10 ">0914973844</a>
                            </div>
                            <div className="bg-gray-900 py-5 flex flex-row items-center hover:bg-black hover:text-gray-600 cursor-pointer lg:order-2">
                                <FontAwesomeIcon className="lg:ml-5 lg:mr-2  ml-2" icon={faEnvelope} />
                                <a href="mailto:+84917973844" className="lg:text-base lg:pr-2 text-base font-semibold ml-4">cuahangxemayhieploi@gmail.com</a>
                            </div>
                            
                            <div className="bg-gray-900 p-5 flex flex-row justify-between  hover:bg-black hover:text-gray-600  w-full lg:order-4">
                                <div><FaFacebookF className="w-10 h-10 p-2   border border-gray-300 rounded-full " /></div>
                                <div><FaGoogle className="w-10 h-10 p-2 flex   border border-gray-300 rounded-full " /></div>
                                <div><FaInstagram className="w-10 h-10 p-2 flex   border border-gray-300 rounded-full " /></div>
                                <div><FaTwitter className="w-10 h-10 p-2 flex  border border-gray-300 rounded-full " /></div>
                            </div>
                            
                            

                        </ul>
                        {/* <ul className="flex flex-col gap-2 md:gap-4 md:mt-4 mt-2">
                            <div className="bg-gray-900 py-5 flex flex-row items-center hover:bg-black hover:text-gray-600 cursor-pointer">
                                <FontAwesomeIcon className="lg:ml-10 lg:mr-5  ml-2" icon={faEnvelope} />
                                <a href="mailto:+84917973844" className="lg:text-base text-base font-semibold lg:pr-10 mx-auto">cuahangxemayhieploi@gmail.com</a>
                            </div>
                            <div className="bg-gray-900 py-5 flex flex-row  hover:bg-black hover:text-gray-600  w-full">
                                <FaFacebookF className="w-10 h-10 p-2 flex items-center justify-center border border-gray-300 rounded-full mx-4" />
                                <FaGoogle className="w-10 h-10 p-2 flex items-center justify-center border border-gray-300 rounded-full mx-4" />
                            </div>

                        </ul> */}
                    </div>

                </div>

                <div className="box col-span-1">
                    <h3 className="mt-8 mb-4 md:text-3xl md:font-semibold">DỊCH VỤ</h3>
                    <div className="flex flex-col gap-2 text-gray-500 mt-8">
                        <a>Thu cũ đổi mới</a>
                        <a>Tư vấn, bảo dưỡng</a>
                        <a>Bán bảo hiểm xe máy</a>
                        <a>Hỗ trợ thủ tục giấy tờ xe</a>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-white text-center p-5 text-xs lg:text-sm">© 2024 BẢN QUYỀN THUỘC CỬA HÀNG XE MÁY HIỆP LỢI</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer