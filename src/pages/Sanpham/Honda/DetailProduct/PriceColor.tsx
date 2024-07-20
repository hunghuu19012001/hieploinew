import { useState } from 'react';
import DetailProductData from '../../../../data/DetailProduct.json';
import { useParams } from 'react-router-dom';

const PriceColor = () => {
  const { productId } = useParams<{ productId?: string }>();
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

  const handleColorClick = (index: number) => {
    setSelectedColorIndex(index);
  };

  const product = DetailProductData.bikes.find((item) => item.id === productId);
  if (!product || !product.priceAndColor) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  // Nhóm các màu theo title
  const groupedColors = product.priceAndColor.reduce((acc, colorItem, index) => {
    if (!acc[colorItem.title]) {
      acc[colorItem.title] = [];
    }
    acc[colorItem.title].push({ ...colorItem, index });
    return acc;
  }, {} as Record<string, { title: string, color: string, colorHex: string[], image: string, index: number }[]>);

  return (
    <div className="mt-8">
      {/* <h3 className="text-xl font-bold text-gray-800 mb-4">Bảng giá và màu sắc</h3> */}
      <div className="flex flex-row justify-between p-4 bg-white rounded-lg shadow-lg">
        <div>
          {Object.keys(groupedColors).map((title) => (
            <div key={title} className="mb-6 flex flex-col">
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">{title}</h4>
                <div className="flex flex-wrap gap-8">
                  {groupedColors[title].map((colorItem) => (
                    <div key={colorItem.index} className="flex items-center space-x-4">
                      <div
                        key={colorItem.index}
                        className={` w-16 h-16 rounded-full border-opacity-50 border-2 border-gray-600 cursor-pointer flex items-center justify-center ${selectedColorIndex === colorItem.index }`}
                        onClick={() => handleColorClick(colorItem.index)}
                      >
                        <div
                          className="w-8 h-16 rounded-l-full border-r"
                          style={{ backgroundColor: colorItem.colorHex[0] }}
                        />
                        
                        <div
                          className="w-8 h-16 rounded-r-full"
                          style={{ backgroundColor: colorItem.colorHex[1] }}
                        />
                        {/* {selectedColorIndex === colorItem.index && <span className="text-black">✓</span>} */}
                        {/* <span className="ml-4 text-sm text-gray-600">{colorItem.color}</span> */}

                      </div>
                      <span className="text-sm text-black-600">{colorItem.color}</span>

                    </div>
                    
                  ))}
                  
                </div>
              </div>
          </div>
          ))}
        </div>
        <div className="mt-4">
          <img
            src={product.priceAndColor[selectedColorIndex].image}
            alt={product.priceAndColor[selectedColorIndex].color}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceColor;
