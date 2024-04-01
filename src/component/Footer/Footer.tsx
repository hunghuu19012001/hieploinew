
import logohieploi from "../../assets/images/logohieploi.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF,FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="">
            
        <footer className="bg-black ">
            <div className="scontainer px-8 py-14 text-white md:grid md:grid-cols-3	md:gap-8 md:justify-between md:w-4/5 md:m-auto">
                <div className="box">
                    <div className="logo md:mt-5">
                        <img src={logohieploi} alt=""/>
                    </div>
                    <p className="text-gray-500 mt-8 mb-3 "> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h1 className="text-white mt-4 mb-3 text-4xl font-semibold">+ 123 456 7898</h1>
                    <small>Email : gorkcoder@gmail.com</small>
                </div>

                <div className="box md:mr-5">
                    <h3 className="mt-8 mb-4 md:text-3xl md:font-semibold">Customer Services</h3>
                    <div className="flex flex-row justify-between text-gray-500 ">
                        <ul className="flex flex-col gap-2 md:gap-4 md:mt-4">
                            <li>Help</li>
                            <li>Contact Us</li>
                            <li>Warranty</li>
                            <li>Terms & Conditions</li>
                            <li>Shopping information</li>
                            <li>Gift Vocher</li>
                        </ul>
                        <ul className="flex flex-col gap-2  md:gap-4 md:mt-4">
                            <li>My Account</li>
                            <li>Arder Status </li>
                            <li>Payment</li>
                            <li>Oders </li>
                            <li>Cancellation </li>
                        </ul>
                    </div>
                </div>

                <div className="box">
                    <h3 className="mt-8 mb-4 md:text-3xl md:font-semibold">Let's stay in touch</h3>
                    <div className="input  mb-6 flex justify-between items-center bg-opacity-10 bg-white md:mt-8">
                        <input className="p-2 bg-transparent border-none text-sm p-3" type="email" placeholder="Email Address"/>
                        <FontAwesomeIcon className="m-4" icon={faArrowRightLong} />
                    </div>
                    <p className="text-gray-500 mt-4 mb-3">Get Update on sales specials and more</p>
                    <div className="social_media flex flex-row">
                        <FaFacebookF className="w-10 h-10 p-2 flex items-center justify-center border border-gray-300 rounded-full mr-4 mt-4" />
                        <FaGoogle className="w-10 h-10 p-2 flex items-center justify-center border border-gray-300 rounded-full mr-4 mt-4" />
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer