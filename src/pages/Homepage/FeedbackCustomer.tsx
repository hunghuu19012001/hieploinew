import React from 'react';

const testimonials = [
  {
    name: 'Jessica Devis',
    handle: '@jessicadevis',
    text: 'The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces.',
    date: 'Jan 17, 2024',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Mary Joshiash',
    handle: '@maryjoshiash',
    text: 'It’s like having a superpower in your toolkit. The ability to craft custom designs quickly and efficiently with simple classes is unparalleled.',
    date: 'Jan 18, 2024',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    name: 'Marcell Glock',
    handle: '@MarcelGlock',
    text: 'The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces.',
    date: 'Jan 19, 2024',
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    name: 'Linde Michele',
    handle: '@lindemichele',
    text: 'With its clear and concise classes, I can easily communicate design intentions to my colleagues. It’s a must-have tool for any web developer.',
    date: 'Jan 20, 2024',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    name: 'Lucian Eurel',
    handle: '@lucianeurel',
    text: 'I’ve tried several CSS frameworks, but MaterialTailwind is on a whole different level. It strikes the perfect balance between flexibility and design.',
    date: 'Jan 21, 2024',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
  {
    name: 'Misha Stam',
    handle: '@mishastam',
    text: 'Active community support makes it easy to get started. It’s the ideal framework for achieving Design excellence in web applications.',
    date: 'Jan 22, 2024',
    image: 'https://randomuser.me/api/portraits/women/30.jpg',
  },
];


const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col justify-between shadow-custom-card">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4"
          src={testimonial.image}
          alt={testimonial.name}
        />
        <div>
          <h4 className="font-semibold text-lg flex items-center">
            {testimonial.name}
            <span className="text-blue-500 ml-2">✔</span>
          </h4>
          <p className="text-gray-500">{testimonial.handle}</p>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        {testimonial.text} <span>🎉</span>
      </p>

      {/* Footer - See on & Date */}
      <div className="flex justify-between items-center text-gray-500">
        <a href="#" className="flex items-center text-sm font-semibold hover:text-blue-500">
          See on
          <span className="ml-1">❌</span>
        </a>
        <span className="text-sm">{testimonial.date}</span>
      </div>
    </div>
  );
};



const FeedbackCustomer = () => {
  return (
    <section className="py-12 bg-white">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-left mb-12">
          <h2 className="text-sm text-gray-500 uppercase tracking-wide">Testimonials</h2>
          <h3 className="text-4xl font-bold mt-2">Đánh giá của khách hàng</h3>
          <p className="text-left text-gray-500 mt-4 max-w-2xl ">
            That's the main thing people are controlled by! Thoughts - their perception of themselves!
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackCustomer;