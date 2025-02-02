import  { useState } from 'react';
import Footer from '../../../../component/Footer/Footer'
import { NavbarWithMegaMenu } from '../../../../component/navbar/NavbarMain'
import {useParams} from 'react-router-dom';
import DetailProductData from '../../../../data/DetailProduct.json'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button
  } from "@material-tailwind/react";
import PriceColor from './PriceColor';


const DetailProduct: React.FC = () => {
    ////according
    const [open, setOpen] = useState<number | null>(null);
    const [popupData, setPopupData] = useState<{ image: string, title: string, description: string } | null>(null);

    const handleOpen = (index: number) => {
        setOpen(open === index ? null : index);
    };
    const handleImageClick = (image: string, title: string, description: string) => {
        setPopupData({ image, title, description });
    };
    const handleClose = () => {
        setPopupData(null);
    };
    ////according
    const {productId} = useParams<{productId?: string}>(); //lay id tu href

    if (!productId) {
        console.log(productId)
        // Nếu không có productId, hiển thị thông báo và kết thúc hàm
        return <div>Không tìm thấy sản phẩm</div>;
        
    }
    const productIdString = productId.toString(); //chuyen doi sang chuoi

    const product = DetailProductData.bikes.find((item) => item.id === productIdString);
    if (!product) {
        return <div>Khong tim thay san pham</div>
    }


  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarWithMegaMenu />
      <div className="container mx-auto px-4 py-8">
        <img src={product.banner} alt={product.name} className="w-full h-64 object-cover rounded-lg shadow-lg mb-8" />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img src={product.avatar} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg mb-4" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-xl text-red-500 font-semibold">{product.price}</p>
            </div>

            <Accordion placeholder="" open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
              <AccordionHeader placeholder="" onClick={() => handleOpen(1)} className={`border-b-0 transition-colors ${open === 1 ? 'text-blue-500' : ''}`}>
                THIẾT KẾ
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                {product.design ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {product.design.map((designItem, designIndex) => (
                                <div key={designIndex} className="mb-4 cursor-pointer" onClick={() => handleImageClick(designItem.image, designItem.title, designItem.description)}>
                                    <img src={designItem.image} alt={designItem.title} className="w-full h-auto object-cover rounded-lg shadow-lg mb-2" />
                                    <p>{designItem.title}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Thông tin về thiết kế đang được cập nhật.</p>
                    )}
              </AccordionBody>
            </Accordion>

            <Accordion placeholder="" open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
              <AccordionHeader placeholder="" onClick={() => handleOpen(2)} className={`border-b-0 transition-colors ${open === 2 ? 'text-blue-500' : ''}`}>
                ĐỘNG CƠ - CÔNG NGHỆ
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                {product.engineTechnology ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {product.engineTechnology.map((engineTechItem, engineTechIndex) => (
                                <div key={engineTechIndex} className="mb-4 cursor-pointer" onClick={() => handleImageClick(engineTechItem.image, engineTechItem.title, engineTechItem.description)}>
                                    <img src={engineTechItem.image} alt={engineTechItem.title} className="w-full h-auto object-cover rounded-lg shadow-lg mb-2" />
                                    <p>{engineTechItem.title}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Thông tin về động cơ - công nghệ đang được cập nhật.</p>
                    )}
              </AccordionBody>
            </Accordion>

            <Accordion placeholder="" open={open === 3} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
              <AccordionHeader placeholder="" onClick={() => handleOpen(3)} className={`border-b-0 transition-colors ${open === 3 ? 'text-blue-500' : ''}`}>
                TIỆN ÍCH - AN TOÀN
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal">
                
                    {product.convenienceSafety ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {product.convenienceSafety.map((convSafetyItem, convSafetyIndex) => (
                                <div key={convSafetyIndex} className="mb-4 cursor-pointer" onClick={() => handleImageClick(convSafetyItem.image, convSafetyItem.title, convSafetyItem.description)}>
                                    <img src={convSafetyItem.image} alt={convSafetyItem.title} className="w-full h-auto object-cover rounded-lg shadow-lg mb-2" />
                                    <p>{convSafetyItem.title}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Thông tin về tiện ích - an toàn đang được cập nhật.</p>
                    )}

              </AccordionBody>
            </Accordion>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Bảng giá và màu sắc</h3>
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <PriceColor />
          </div>
        </div>

        <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Thông Số Kỹ Thuật</h3>
                    {product.technicalSpecifications ? (
                        <div className="p-4 bg-white rounded-lg shadow-lg">
                            {product.technicalSpecifications.map((spec, specIndex) => (
                                <div key={specIndex} className={`mb-4 flex flex-col md:flex-row px-4 ${specIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'} p-2 rounded-md`} >
                                    <h4 className="font-bold md:w-1/2">{spec.title}</h4>
                                    <ul className=" ml-5 md:w-1/2">
                                        {spec.values.map((value, valueIndex) => (
                                            <li key={valueIndex}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Thông tin về thông số kỹ thuật đang được cập nhật.</p>
                    )}
          </div>
      </div>
      
      <Footer />
      {popupData && (
                <Dialog placeholder open={Boolean(popupData)} handler={handleClose}>
                    <DialogHeader placeholder>{popupData.title}</DialogHeader>
                    <DialogBody placeholder divider>
                        <img src={popupData.image} alt={popupData.title} className="w-full h-auto object-cover rounded-lg shadow-lg mb-2" />
                        <p className="text-gray-800">{popupData.description}</p>
                    </DialogBody>
                    <DialogFooter placeholder>
                        <Button placeholder variant="text" color="red" onClick={handleClose} className="mr-1">
                            <span>Close</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            )}

                
    </div>
  )
}

export default DetailProduct
