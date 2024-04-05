import {NavbarWithMegaMenu} from '../../../component/navbar/NavbarMain'
import Footer from '../../../component/Footer/Footer'
import { Carousel } from "@material-tailwind/react";
import CanelyVirgo from '../../../assets/images/xedien/xekazuki/CanelyVirgo.jpg'
import canelyS from '../../../assets/images/xedien/xekazuki/canelyS.png'
import GogoDeluxe from '../../../assets/images/xedien/xekazuki/GogoDeluxe.png'
import GogoS from '../../../assets/images/xedien/xekazuki/GogoS.png'
import KazukiCrea from '../../../assets/images/xedien/xekazuki/KazukiCrea.png'
import KazukiJeekMen from '../../../assets/images/xedien/xekazuki/KazukiJeekMen.png'
import KazukiLx150 from '../../../assets/images/xedien/xekazuki/KazukiLx150.jpg'
import VecreaLx150 from '../../../assets/images/xedien/xekazuki/VecreaLx150.png'
import XmenKazukiStar from '../../../assets/images/xedien/xekazuki/XmenKazukiStar.jpg'
import XmenKazukiZ1 from '../../../assets/images/xedien/xekazuki/XmenKazukiZ1.png'
import XmenKazukiZ2 from '../../../assets/images/xedien/xekazuki/XmenKazukiZ2.jpg'
import XmenKazukiZ3 from '../../../assets/images/xedien/xekazuki/XmenKazukiZ3.png'




const Xedienpage = () => {
  const xedien = [
    {
      id: 1,
      name: 'Canely Virgo',
      href: '#',
      price: 'Liên Hệ',
      imageSrc: CanelyVirgo,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Canely S',
      href: '#',
      price: 'Liên hệ',
      imageSrc: canelyS,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Gogo Deluxe',
      href: '#',
      price: 'Liên hệ',
      imageSrc: GogoDeluxe,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Gogo S',
      href: '#',
      price: 'Liên hệ',
      imageSrc: GogoS,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Kazuki Crea',
      href: '#',
      price: 'Liên hệ',
      imageSrc: KazukiCrea,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Kazuki Jeek Men',
      href: '#',
      price: 'Liên hệ',
      imageSrc: KazukiJeekMen,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }, 
    {
      id: 7,
      name: 'Kazuki Lx150',
      href: '#',
      price: 'Liên hệ',
      imageSrc: KazukiLx150,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }, 
    {
      id: 8,
      name: 'Vecrea Lx150',
      href: '#',
      price: 'Liên hệ',
      imageSrc: VecreaLx150,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }, 
    {
      id: 9,
      name: 'Xmen Kazuki Star',
      href: '#',
      price: 'Liên hệ',
      imageSrc: XmenKazukiStar,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }, 
    {
      id: 10,
      name: 'Xmen Kazuki Z1',
      href: '#',
      price: 'Liên hệ',
      imageSrc: XmenKazukiZ1,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }, 
    {
      id: 11,
      name: 'Xmen Kazuki Z2',
      href: '#',
      price: 'Liên hệ',
      imageSrc: XmenKazukiZ2,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }, 
    {
      id: 12,
      name: 'Xmen Kazuki Z3',
      href: '#',
      price: 'Liên hệ',
      imageSrc: XmenKazukiZ3,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
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
                    src="https://kazukidtp.vn/wp-content/uploads/2024/01/z5097456631314_8c9a9f0c4d8c6ad64eb1661afcea64c3.jpg"
                    alt="image 1"
                    className=" w-full object-cover"
                  />
                  <img
                    src="https://kazukidtp.vn/wp-content/uploads/2022/06/Kazuki-v3-01-scaled.jpg"
                    alt="image 2"
                    className=" w-full object-cover"
                  />
                  <img
                    src="https://kazukidtp.vn/wp-content/uploads/2022/08/xemn-kazuki-02.jpg"
                    alt="image 3"
                    className=" w-full object-cover"
                  />
            </Carousel>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 py-4 gap-2 text-gray-700 px-4 lg:px-0 lg:max-w-7xl mx-auto">
              <div className="flex flex-row border-2 px-10 py-2 rounded-3xl relative  my-auto w-full h-full cursor-pointer">
                <div className='text-sm lg:text-xl lg:font-medium mx-auto'>
                  <a href="">XE ĐIỆN</a>
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
            </div> */}

            <div className='px-4 mt-10'>
                <div className="bg-orange-100 border-t-4 border-orange-900 lg:max-w-7xl mx-auto">
                  <p className="text-center text-3xl font-bold py-2">XE ĐIỆN</p>
                </div>
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl pb-16 pt-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                      {xedien.map((product) => (
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
            
            

        </div>
        <Footer/>
    </div>
  )
}

export default Xedienpage
