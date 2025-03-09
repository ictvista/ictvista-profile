import React from 'react';
import Slider from 'react-slick';
import img1 from '../image/testomonial/test.jpeg';
import img2 from '../image/testomonial/test.jpeg';
import img3 from '../image/testomonial/test.jpeg';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsData = [
  { id: 1, img: img1, name: 'Alice Smith', text: 'Great service! Highly recommended.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam corporis sint delectus dolorum suscipit. Vitae ratione excepturi laboriosam incidunt' },
  { id: 2, img: img2, name: 'Bob Johnson', text: 'Excellent experience, very professional team.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam corporis sint delectus dolorum suscipit. Vitae ratione excepturi laboriosam incidunt' },
  { id: 3, img: img3, name: 'Charlie Brown', text: 'Their work exceeded our expectations!Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam corporis sint delectus dolorum suscipit. Vitae ratione excepturi laboriosam incidunt' },
  { id: 4, img: img1, name: 'David Wilson', text: 'They truly care about their clients.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam corporis sint delectus dolorum suscipit. Vitae ratione excepturi laboriosam incidunt' },
  { id: 5, img: img2, name: 'Emma Taylor', text: 'Outstanding quality and communication.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam corporis sint delectus dolorum suscipit. Vitae ratione excepturi laboriosam incidunt' },
  { id: 6, img: img3, name: 'Frank White', text: 'Would definitely work with them again!Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident numquam corporis sint delectus dolorum suscipit. Vitae ratione excepturi laboriosam incidunt' },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
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
        },
      },
    ],
  };

  return (
    <div className="py-10  text-white mt-20 mb-20">
      <div className="container  mx-auto px-4">
       
        <div className="text-center text-xl sm:text-2xl font-semibold mb-10">
          <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
        </div>
        
       
        <Slider {...settings}>
          {TestimonialsData.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center mb-6   p-6 bg-gray-900 border-5 shadow-grey-900  border-grey-600 shadow-lg rounded-lg w-45% sm:w-80 mx-auto">
              <div className="text-green-400 bold text-4xl ">“</div>
              <p className="text-sm mt-4 max-w-xs ">{item.text}</p>
              <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full mt-6 border-2 border-green-400" />
              <p className="text-lg font-semibold text-green-400 mt-2">{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
