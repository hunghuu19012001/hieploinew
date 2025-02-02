import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import jenus from "../../assets/images/xeyamaha/xega/cacphienban/jenus/dacbiet/DacBiet.png"
import exciter from '../../assets/images/xeyamaha/xecontay/cacphienban/exciter/Ex155VvaPhienBanCaoCap/60NamYamahaTranhTaiMotogb.png'
import siriusfi from '../../assets/images/xeyamaha/xeso/siriusfi/vanhduc/HoanToanMoi.png'
import vision from '../../assets/images/xehonda/visionphienbancodien.png'
import shmode from '../../assets/images/xehonda/shmode.png'
import next from '../../assets/home-page-product-next.png'
import back from '../../assets/home-page-product-back.png'

const fakeData = [
  {
    id: 1,
    title: 'Honda CBR150R',
    imageUrl: jenus,
    rating: 4.8,
    description: 'Honda CBR150R với thiết kế thể thao và động cơ mạnh mẽ 150cc.',
    price: '50 triệu VND',
		colors: ['#ffffff', '#ff0000', '#0000ff', '#000000'],  // Các màu sắc cho sản phẩm

  },
  {
    id: 2,
    title: 'Yamaha Exciter 155',
    imageUrl: exciter,
    rating: 4.9,
    description: 'Yamaha Exciter 155 mang phong cách đột phá, động cơ mạnh mẽ, tiết kiệm nhiên liệu.',
    price: '48 triệu VND',
		colors: ['#ff0000', '#0000ff', '#000000'],  // Các màu sắc cho sản phẩm

  },
  {
    id: 3,
    title: 'VinFast Klara S',
    imageUrl: siriusfi,
    rating: 4.7,
    description: 'Xe máy điện VinFast Klara S, tiết kiệm nhiên liệu, thân thiện môi trường.',
    price: '30 triệu VND',
		colors: ['#ffffff', '#ff0000', '#0000ff', '#000000'],  // Các màu sắc cho sản phẩm

  },
  {
    id: 4,
    title: 'Honda SH Mode',
    imageUrl: vision,
    rating: 5.0,
    description: 'Honda SH Mode với thiết kế sang trọng và động cơ eSP mạnh mẽ.',
    price: '60 triệu VND',
		colors: ['#ffffff', '#ff0000', '#0000ff', '#000000'],  // Các màu sắc cho sản phẩm

  },
  {
    id: 5,
    title: 'VinFast Feliz',
    imageUrl: shmode,
    rating: 4.6,
    description: 'VinFast Feliz – xe điện với thiết kế trẻ trung và công nghệ hiện đại.',
    price: '25 triệu VND',
		colors: ['#ffffff', '#ff0000', '#0000ff', '#000000'],  // Các màu sắc cho sản phẩm

  },
];

export function BookingCard({ data }) {
  return (
    <Card placeholder="" className="w-full max-w-[26rem] shadow-lg flex flex-col h-full">
      <CardHeader placeholder="" floated={false}  className="relative h-56">
        <img
          src={data.imageUrl}
          alt={data.title}
					className="h-auto w-full object-contain" 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/20" />
        <IconButton
          placeholder=""
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody placeholder="" className="flex-grow min-h-[200px]">
        <div className="mb-3 flex items-center justify-between">
          <Typography placeholder="" variant="h5" color="blue-gray" className="font-medium">
            {data.title}
          </Typography>
          {/* <Typography
            placeholder=""
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            {data.rating}
          </Typography> */}
        </div>
        <Typography placeholder="" color="gray" className="text-sm">
          {data.description}
        </Typography>
        {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content={data.price}>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clipRule="evenodd"
                />
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
            </span>
          </Tooltip>
        </div> */}
				<div className="mt-4 flex space-x-2">
          {data.colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border-1 border-gray-300"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </CardBody>
      <CardFooter placeholder="" className="pt-3">
        <Button placeholder="" size="sm" fullWidth={true} className="bg-white text-black border-1 border-gray-500">
          Xem Chi Tiết
        </Button>
      </CardFooter>
    </Card>
  );
}
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={next} alt="Next" />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={back} alt="Previous" />
    </div>
  );
};
const CarouselHotDeal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
		nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {

          slidesToShow: 1,
          slidesToScroll: 1,
					arrows: false
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto md:py-12 text-left mb-12">
      <h2 className="text-4xl font-bold mt-2 px-4">Sản Phẩm Bán Chạy</h2>
			<p className="text-left text-gray-500 mt-4 max-w-2xl mb-8 px-4">
         Những sản phẩm đã được bán nhiều nhất trong suốt thời gian qua !
      </p>
      <Slider {...settings}>
        {fakeData.map((item) => (
          <div className="p-2" key={item.id}>
            <BookingCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselHotDeal;
