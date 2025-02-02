import React, { useEffect, useRef } from 'react';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Disney_wordmark.svg', alt: 'Disney' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg', alt: 'Airbnb' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Spark_NZ_logo.svg', alt: 'Spark' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg', alt: 'Samsung' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Quora_logo_2015.svg', alt: 'Quora' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg', alt: 'Sass' },
];

const TrademarkCarousel: React.FC = () => {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const cloned = ul.cloneNode(true);
      ul.parentNode?.appendChild(cloned);
      (cloned as HTMLElement).setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <div className="relative flex flex-col justify-center bg-slate-900 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
					<h2 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight  text-gray-900 lg:mb-4 dark:text-white md:text-4xl">Các hãng xe có tại cửa hàng</h2>
						<p className="text-left text-gray-500 mt-4 max-w-2xl ">
							Tất cả các hãng xe máy và xe điện đều có mặt tại cửa hãng để quý khách có thể lựa chọn
						</p>
        <div className="text-center mt-10">
						
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul
              ref={logosRef}
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              {logos.map((logo, index) => (
                <li key={index}>
                  <img src={logo.src} alt={logo.alt}  className="h-8 w-auto"/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrademarkCarousel;
