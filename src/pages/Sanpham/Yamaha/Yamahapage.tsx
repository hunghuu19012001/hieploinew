import {NavbarWithMegaMenu} from '../../../component/navbar/NavbarMain'
import Footer from '../../../component/Footer/Footer'
import { Carousel } from "@material-tailwind/react";
import freego from '../../../assets/images/xeyamaha/xega/cacphienban/freego/phienbandacbiet/FreegoSAbsMauHoanToanMoi.png'
import grande from '../../../assets/images/xeyamaha/xega/cacphienban/grande/phienbandacbiet/MauHoanToanMoi.png'
import jenus from '../../../assets/images/xeyamaha/xega/cacphienban/jenus/dacbiet/DacBiet.png'
import latte from '../../../assets/images/xeyamaha/xega/cacphienban/latte/gioihan/MauMoi.png'
import nvx from '../../../assets/images/xeyamaha/xega/cacphienban/nvx/caocap/MauHoanToanMoi.png'

import jupiter from '../../../assets/images/xeyamaha/xeso/jupiter/MauMoi.png'
import jupiterfin from '../../../assets/images/xeyamaha/xeso/jupiterfin/caocap/MauMoi.png'
import sirius from '../../../assets/images/xeyamaha/xeso/sirius/BanhDuc/MauMoi.png'
import siriusfi from '../../../assets/images/xeyamaha/xeso/siriusfi/vanhduc/HoanToanMoi.png'

import exciter from '../../../assets/images/xeyamaha/xecontay/cacphienban/exciter/Ex155VvaPhienBanCaoCap/60NamYamahaTranhTaiMotogb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Yamahapage = () => {
  const xega = [
    {
      id: 1,
      name: 'FREEGO',
      href: '#',
      price: '$48',
      imageSrc: freego,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'GRANDE',
      href: '#',
      price: '$35',
      imageSrc: grande,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'JENUS',
      href: '#',
      price: '$89',
      imageSrc: jenus,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'LATTE',
      href: '#',
      price: '$35',
      imageSrc: latte,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'NVX',
      href: '#',
      price: '$35',
      imageSrc: nvx,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },  
    ]
    const xeso = [
      {
        id: 1,
        name: 'JUPITER',
        href: '#',
        price: '$48',
        imageSrc: jupiter,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'JUPIER FIN',
        href: '#',
        price: '$35',
        imageSrc: jupiterfin,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'SIRIUS',
        href: '#',
        price: '$89',
        imageSrc: sirius,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'SIRIUS FI',
        href: '#',
        price: '$35',
        imageSrc: siriusfi,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      ]
      const xecontay = [
        {
          id: 1,
          name: 'EXCITER',
          href: '#',
          price: '$48',
          imageSrc: exciter,
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        ]
  return (
    <div>
        <div>
            <div className="">
              <NavbarWithMegaMenu />
            </div>
            <Carousel
                  placeholder=""
                  className="rounded-xl md:mt-28"
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
                    src="https://yamaha-motor.com.vn/wp/wp-content/uploads/2021/09/08j_web.png"
                    alt="image 1"
                    className=" w-full object-cover"
                  />
                  <img
                    src="https://yamaha-motor.com.vn/wp/wp-content/uploads/2022/07/Finn-digital-01.jpg"
                    alt="image 2"
                    className=" w-full object-cover"
                  />
                  <img
                    src="https://yamaha-motor.com.vn/wp/wp-content/uploads/2022/09/55b2fbb82e896100b3e0f00094a58e74.jpg"
                    alt="image 3"
                    className=" w-full object-cover"
                  />
            </Carousel>
            <div className="grid grid-cols-2 md:grid-cols-4 py-4 gap-2 text-gray-700 px-4 lg:px-0 lg:max-w-7xl mx-auto">
              <div className="flex flex-row border-2 px-10 py-2 rounded-3xl relative  my-auto w-full h-full cursor-pointer">
                <div className='text-sm lg:text-xl lg:font-medium mx-auto'>
                  <a href="">XE TAY GA</a>
                </div>
                <div className="absolute text-xs lg:text-base right-4 top-1/2 transform -translate-y-1/2">
                  <FontAwesomeIcon  icon={faAngleDown} />
                </div>
              </div>
              <div className="flex flex-row border-2 px-10 py-2 rounded-3xl relative my-auto w-full h-full cursor-pointer">
                <div className='text-sm lg:text-xl lg:font-medium mx-auto'>
                  <a href="">XE SỐ</a>
                </div>
                <div className="absolute text-xs lg:text-base right-4 top-1/2 transform -translate-y-1/2">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
              <div className="flex flex-row border-2 px-10 py-2 rounded-3xl relative my-auto w-full h-full cursor-pointer">
                <div className='text-sm lg:text-xl lg:font-medium mx-auto'>
                  <a href="">XE CÔN TAY</a>
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

            <div className='px-4'>
                <div className="bg-orange-100 border-t-4 border-orange-900 lg:max-w-7xl mx-auto">
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
                          <h3 className="mt-4 text-lg lg:text-2xl font-bold text-orange-900">{product.name}</h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
            {/* //////////// */}
            <div className='px-4'>
                <div className="bg-orange-100 border-t-4 border-orange-900 lg:max-w-7xl mx-auto">
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
                          <h3 className="mt-4 text-lg lg:text-2xl font-bold text-orange-900">{product.name}</h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
            {/* <p>-------------------------------------------------------------------------------------------------------------------------------</p> */}
            <div className='px-4'>
                <div className="bg-orange-100 border-t-4 border-orange-900 lg:max-w-7xl mx-auto">
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
                          <h3 className="mt-4 text-lg lg:text-2xl font-bold text-orange-900">{product.name}</h3>
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

export default Yamahapage
