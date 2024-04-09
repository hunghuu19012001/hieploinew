import {NavbarWithMegaMenu} from '../../../component/navbar/NavbarMain'
import Footer from '../../../component/Footer/Footer'
import { Carousel } from "@material-tailwind/react";
import airblade from '../../../assets/images/xehonda/airblade.png'

import lead from '../../../assets/images/xehonda/lead.png'
import sh125i160i from '../../../assets/images/xehonda/sh125i160i.png'
import sh350i from '../../../assets/images/xehonda/sh350i.png'
import shmode from '../../../assets/images/xehonda/shmode.png'

import vario from '../../../assets/images/xehonda/vario.png'
import vario160 from '../../../assets/images/xehonda/vario160.png'
import vision from '../../../assets/images/xehonda/vision.jpg'
import visionphienbancodien from '../../../assets/images/xehonda/visionphienbancodien.png'
import wavealpha110 from '../../../assets/images/xehonda/wavealpha110.png'
import wavealphaphienbanrcodien from '../../../assets/images/xehonda/wavealphaphienbancodien.png'
import waversx from '../../../assets/images/xehonda/waversx.png'

import blade2023 from '../../../assets/images/xehonda/blade2023.png'
import future from '../../../assets/images/xehonda/future.jpg'
import supercupc125 from '../../../assets/images/xehonda/supercupc125.png'
import winnerx2024 from '../../../assets/images/xehonda/winnerx2024.jpg'
import cbr150r from '../../../assets/images/xehonda/cbr150r.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';

const Hondapage = () => {
  const xegaRef = useRef(null);
  const xesoRef = useRef(null);
  const xecontayRef = useRef(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const xega = [
    {
      id: 1,
      name: 'Air Blade',
      href: '#',
      price: 'Liên hệ',
      imageSrc: airblade,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Vision phiên bản cổ điển',
      href: '#',
      price: 'Liên hệ',
      imageSrc: visionphienbancodien,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'SH Mode 125',
      href: '#',
      price: 'Liên hệ',
      imageSrc: shmode,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'SH 350i',
      href: '#',
      price: 'Liên hệ',
      imageSrc: sh350i,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'SH 125i/160i',
      href: '#',
      price: 'Liên hệ',
      imageSrc: sh125i160i,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Lead 125',
      href: '#',
      price: 'Liên hệ',
      imageSrc: lead,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: 'Vision',
      href: '#',
      price: 'Liên hệ',
      imageSrc: vision,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 8,
      name: 'Vario160',
      href: '#',
      price: 'Liên hệ',
      imageSrc: vario160,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 9,
      name: 'Vario 125',
      href: '#',
      price: 'Liên hệ',
      imageSrc: vario,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

    // More products...
  ]
  const xeso = [
    {
      id: 1,
      name: 'Wave alpha 110',
      href: '#',
      price: 'Liên hệ',
      imageSrc: wavealpha110,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Wave alpha phiên bản cổ điển',
      href: '#',
      price: 'Liên hệ',
      imageSrc: wavealphaphienbanrcodien,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Wave RSX',
      href: '#',
      price: 'Liên hệ',
      imageSrc: waversx,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Blade 2023',
      href: '#',
      price: 'Liên hệ',
      imageSrc: blade2023,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Future',
      href: '#',
      price: 'Liên hệ',
      imageSrc: future,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Super cup 125',
      href: '#',
      price: 'Liên hệ',
      imageSrc: supercupc125,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },]
  const xecontay = [
      {
        id: 1,
        name: 'Winner X 2024',
        href: '#',
        price: 'Liên hệ',
        imageSrc: winnerx2024,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'CBR150R',
        href: '#',
        price: 'Liên hệ',
        imageSrc: cbr150r,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },]
  return (
    <div>
        <div>
            <div className="">
              <NavbarWithMegaMenu />
            </div>
            <Carousel
                  placeholder=""
                  className="rounded-xl -z-50"
                  navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      {new Array(length).fill("").map((_, i) => (
                        <span
                          key={i}
                          className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                          }`}
                          onClick={() => setActiveIndex(i)}
                        />
                      ))}
                    </div>
                  )}
            >
                  <img
                    src="https://cdn.honda.com.vn/motorbikes/January2024/RK7Kxn0hDkGZH9LsqwqJ.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://cdn.honda.com.vn/motorbikes/December2023/Fl5DEjjKFPzsWfKRcAIh.jpg"
                    alt="image 2"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="https://cdn.honda.com.vn/motorbikes/January2024/iPDXQ7if3toZSvleSDgY.jpg"
                    alt="image 3"
                    className="h-full w-full object-cover"
                  />
            </Carousel>
            <div className="grid grid-cols-2 md:grid-cols-4 py-4 gap-2 text-gray-700 px-4 lg:px-0 lg:max-w-7xl mx-auto">
              <div className="flex flex-row border-2 px-10 py-2 rounded-3xl relative  my-auto w-full h-full cursor-pointer " onClick={() => scrollToRef(xegaRef)}>
                <div className='text-sm lg:text-xl lg:font-medium mx-auto'>
                  <a >XE TAY GA</a>
                </div>
                <div className="absolute text-xs lg:text-base right-4 top-1/2 transform -translate-y-1/2">
                  <FontAwesomeIcon  icon={faAngleDown} />
                </div>
              </div>
              <div className="flex flex-row border-2 px-10 py-2 rounded-3xl relative my-auto w-full h-full cursor-pointer" onClick={() => scrollToRef(xesoRef)}>
                <div className='text-sm lg:text-xl lg:font-medium mx-auto'>
                  <a >XE SỐ</a>
                </div>
                <div className="absolute text-xs lg:text-base right-4 top-1/2 transform -translate-y-1/2">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
              <div className="flex flex-row border-2 px-10 py-2 rounded-3xl relative my-auto w-full h-full cursor-pointer" onClick={() => scrollToRef(xecontayRef)}>
                <div className='text-sm lg:text-xl lg:font-medium mx-auto'>
                  <a >XE CÔN TAY</a>
                </div>
                <div className="absolute text-xs lg:text-base right-4 top-1/2 transform -translate-y-1/2">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
              <div className="flex flex-row border-2 px-10 py-2 rounded-3xl relative my-auto w-full h-full cursor-pointer">
                <div className='text-sm lg:text-xl lg:font-medium mx-auto'>
                  <a href=""> XE PK LỚN</a>
                </div>
                <div className="absolute text-xs lg:text-base right-4 top-1/2 transform -translate-y-1/2">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>

            <div  ref={xegaRef} className='px-4' >
                <div className="bg-red-50 border-t-4 border-button lg:max-w-7xl mx-auto">
                  <p className="text-center text-3xl font-bold py-2">XE TAY GA</p>
                </div>
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl pb-16 pt-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                      {xega.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                          </div>
                          <h3 className="mt-4 text-lg lg:text-2xl font-bold text-button">{product.name}</h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
            {/* //////////// */}
            <div className='px-4' ref={xesoRef}>
                <div className="bg-red-50 border-t-4 border-button lg:max-w-7xl mx-auto">
                  <p className="text-center text-3xl font-bold py-2">XE SỐ</p>
                </div>
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl pb-16 pt-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                      {xeso.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                          </div>
                          <h3 className="mt-4 text-lg lg:text-2xl font-bold text-button">{product.name}</h3>
                          <p ref={xecontayRef}  className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                      ))}
                    </div >
                  </div>
                </div>
            </div>
            {/* <p>-------------------------------------------------------------------------------------------------------------------------------</p> */}
            <div className='px-4' >
                <div className="bg-red-50 border-t-4 border-button lg:max-w-7xl mx-auto">
                  <p className="text-center text-3xl font-bold py-2">XE CÔN TAY</p>
                </div>
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl pb-16 pt-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                      {xecontay.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                          </div>
                          <h3 className="mt-4 text-lg lg:text-2xl font-bold text-button">{product.name}</h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Hondapage
