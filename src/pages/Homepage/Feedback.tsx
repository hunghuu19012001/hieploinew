import React from 'react';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'tailwindcss/tailwind.css';



const Feedback: React.FC = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)' }}>
      <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen flex justify-center">
        <div className="grid grid-cols-2 gap-4 items-center z-10">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
              A smile <br className="hidden sm:block lg:hidden" /> is an inexpensive way to change your looks
            </h2>
            <p className="mt-4 text-gray-300">Goals are just dreams with deadlines</p>
            <div className="flex flex-row items-center space-x-3 mt-5">
              <a href="https://www.behance.net/ajeeshmon" target="_blank" className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-600 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300">
                <svg className="w-4 fill-gray-100" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.072 9.301s1.892-.147 1.892-2.459c0-2.315-1.548-3.441-3.51-3.441H0v12.926h6.454s3.941.129 3.941-3.816c-.001-.001.171-3.21-2.323-3.21zM2.844 5.697h3.61s.878 0 .878 1.344c0 1.346-.516 1.541-1.102 1.541H2.844V5.697zm3.427 8.332H2.844v-3.455h3.61s1.308-.018 1.308 1.775c0 1.512-.977 1.669-1.491 1.68zm9.378-7.341c-4.771 0-4.767 4.967-4.767 4.967s-.326 4.941 4.767 4.941c0 0 4.243.254 4.243-3.437H17.71s.072 1.391-1.988 1.391c0 0-2.184.152-2.184-2.25h6.423c.001-.001.709-5.612-4.312-5.612zm1.941 3.886h-4.074s.266-1.992 2.182-1.992 1.892 1.992 1.892 1.992zm.507-6.414H12.98v1.594h5.117V4.16z"/>
                </svg>
              </a>
              <a href="https://codepen.io/uidesignhub" target="_blank" className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-gray-900 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300">
                <svg className="h-5 fill-gray-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 15.047a.846.846 0 0 1-.008.112l-.006.037-.016.072c-.003.015-.008.028-.013.042l-.022.063-.02.042c-.004.008-.009.014-.013.022l-.02.035-.028.037c-.004.005-.007.012-.012.017l-.031.03-.04.026c-.005.003-.012.006-.018.009l-.039.018-.051.022c-.011.003-.019.01-.03.013l-.05.015-.062.015c-.009.002-.017.005-.027.007l-.065.008-.076.007c-.01.001-.02.002-.03.002h-21c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1h5.02l2.243-3.896c.078-.135.216-.225.367-.241l.142-.017c.136-.008.266.045.355.136l1.724 1.724 1.724-1.724c.189-.189.469-.228.705-.098l.155.075c.151.074.253.226.275.396l.094.728 1.746 1.746 1.746-1.746c.062-.067.141-.121.23-.156l.14-.051c.215-.078.467.008.582.208l1.755 3.043h6.72c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1zm-12.245 2.042l-1.494-.536-.532-1.493c-.03-.085-.099-.142-.182-.153l-.11-.014-1.406-.503-.56-1.556 1.518-2.635.848.847v5.95c0 .24.114.463.306.603l.082.055.002.002c.15.093.332.141.512.141.108 0 .215-.018.316-.054l.056-.022 1.42-.782-.78 1.421-.024.053c-.055.13-.086.272-.086.423 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.058-.021.759-.418.415.759.059.105c.086.154.229.254.393.285l.088.014c.09 0 .17-.028.246-.078l.048-.03.98-.539-.535.981-.034.063c-.07.129-.107.274-.107.422 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.02.761-.418.414.759.088.158c.086.154.229.254.393.285l.088.014c.09 0 .17-.028.246-.078l.048-.03.98-.539-.537.982-.034.064c-.072.133-.11.281-.11.434 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.056-.022 1.438-.793-.793 1.438-.024.044c-.085.157-.129.335-.129.517 0 .415.337.75.75.75.108 0 .214-.023.316-.063l.057-.02 1.42-.782-.782 1.42-.025.045c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.783 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.02 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.02 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .414.336.75.75.75.108 0 .214-.023.316-.063l.057-.021 1.42-.782-.782 1.421-.024.044c-.085.157-.129.335-.129.517 0 .41.332.75.742.75h5.518v-.002z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ajeeshmon/" target="_blank" className="w-10 h-10 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-900 hover:drop-shadow-lg cursor-pointer transition ease-in duration-300">
                <svg className="h-5 fill-gray-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.69 2c-.38 0-.69.31-.69.69v18.62c0 .38.31.69.69.69h14.62c.38 0 .69-.31.69-.69V2.69c0-.38-.31-.69-.69-.69H4.69zm11.85 17.45h-2.64v-8.8c0-1.32-.47-2.22-1.65-2.22-1.23 0-1.95.83-2.27 1.64-.12.29-.15.69-.15 1.09v9.29H8.35V9.4c0-1.32-.47-2.22-1.65-2.22-1.23 0-1.95.83-2.27 1.64-.12.29-.15.69-.15 1.09v9.29H2.69V7.15h2.64v1.38c.58-.92 1.56-1.78 3.36-1.78 2.45 0 4.3 1.55 4.3 4.89v5.81zM21.31 0H2.69C1.21 0 0 1.21 0 2.69v18.62C0 22.79 1.21 24 2.69 24h18.62c1.49 0 2.69-1.21 2.69-2.69V2.69C24 1.21 22.79 0 21.31 0z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="sm:flex hidden relative sm:max-w-md w-full sm:w-72">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <Swiper
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="swiper"
                >
                  <SwiperSlide>
                    <div className="rounded-xl shadow-lg p-8 bg-white">
                      <p className="text-sm text-gray-500">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.”</p>
                      <div className="mt-4">
                        <h4 className="text-lg font-bold text-gray-800">John Doe</h4>
                        <p className="text-sm text-gray-500">CEO, ABC Company</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="rounded-xl shadow-lg p-8 bg-white">
                      <p className="text-sm text-gray-500">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</p>
                      <div className="mt-4">
                        <h4 className="text-lg font-bold text-gray-800">Jane Smith</h4>
                        <p className="text-sm text-gray-500">Designer, XYZ Company</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="rounded-xl shadow-lg p-8 bg-white">
                      <p className="text-sm text-gray-500">“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.”</p>
                      <div className="mt-4">
                        <h4 className="text-lg font-bold text-gray-800">David Johnson</h4>
                        <p className="text-sm text-gray-500">CTO, PQR Company</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
