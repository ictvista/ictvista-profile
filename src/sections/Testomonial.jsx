/* import React from 'react';
import Slider from 'react-slick';
import img1 from '../image/testomonial/test-img4 .jpg'
import img2 from '../image/testomonial/test-img1.jpg'
import img3 from '../image/testomonial/test-img5.jpg'
import img4 from '../image/testomonial/test-img3.jpg'
import img5 from '../image/testomonial/test-img7.jpg'
import img6 from '../image/testomonial/test.jpeg'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsData = [
  { id: 1, img: img1, name: 'Tarek Rahman', text: 'This software solution has revolutionized our workflow. It’s fast, efficient, and integrates smoothly with our existing systems. Our productivity has increased, and we are now able to handle more tasks in less time. I highly recommend it!' },
  { id: 2, img: img2, name: 'Anika Tasnim', text: 'We needed a flexible solution, and this software exceeded our expectations. It’s easy to use, customizable, and provides everything we need. The support team is excellent, and the product has greatly improved our efficiency.' },
  { id: 3, img: img3, name: 'Faiaz Nahian', text: 'This software has been a game-changer for us. It significantly improved our systems speed and reliability. The easy-to-navigate interface has made it simpler for our team to manage projects and collaborate efficiently.' },
  { id: 4, img: img4, name: 'Farhana Alam', text: 'After trying various software, this one stands out. It’s secure, reliable, and scalable. The customer support team is always responsive, and the software has helped us save time and resources. We’re thrilled with the results.' },
  { id: 5, img: img5, name: 'Sabab Abid', text: 'We’ve seen a major improvement in both productivity and team satisfaction since implementing this software. The customization options are fantastic, and its helped us stay organized and meet tight deadlines with ease.' },
  { id: 6, img: img6, name: 'Meherun Nessa', text: 'The software exceeded our expectations! It’s robust, scalable, and supports our growth as we continue to expand. The seamless integration with our existing tools has saved us countless hours and enhanced our teams performance.' },
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
 */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../image/testomonial/test-img4 .jpg'
import img2 from '../image/testomonial/test-img1.jpg'
import img3 from '../image/testomonial/test-img5.jpg'
import img4 from '../image/testomonial/test-img3.jpg'
import img5 from '../image/testomonial/test-img7.jpg'
import img6 from '../image/testomonial/test.jpeg'

const TestimonialsData = [
  { id: 1, img: img1, name: "Tarek Rahman", text: "This software solution has revolutionized our workflow. It’s fast, efficient, and integrates smoothly with our existing systems. Our productivity has increased, and we are now able to handle more tasks in less time. I highly recommend it!" },
  { id: 2, img: img2, name: "Anika Tasnim", text: "We needed a flexible solution, and this software exceeded our expectations. It’s easy to use, customizable, and provides everything we need. The support team is excellent, and the product has greatly improved our efficiency." },
  { id: 3, img: img3, name: "Faiaz Nahian", text: "This software has been a game-changer for us. It significantly improved our system’s speed and reliability. The easy-to-navigate interface has made it simpler for our team to manage projects and collaborate efficiently." },
  { id: 4, img: img4, name: "Farhana Alam", text: "After trying various software, this one stands out. It’s secure, reliable, and scalable. The customer support team is always responsive, and the software has helped us save time and resources. We’re thrilled with the results." },
  { id: 5, img: img5, name: "Sabab Abid", text: "We’ve seen a major improvement in both productivity and team satisfaction since implementing this software. The customization options are fantastic, and it has helped us stay organized and meet tight deadlines with ease." },
  { id: 6, img: img6, name: "Meherun Nessa", text: "The software exceeded our expectations! It’s robust, scalable, and supports our growth as we continue to expand. The seamless integration with our existing tools has saved us countless hours and enhanced our team’s performance." },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,  // SHOW ONE AT A TIME
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
  };

  return (
    <div className=" text-gray-900 py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Title & Description */}
        <div className="md:w-1/3 text-left">
          <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say</h2>
          <p className="text-gray-600 mt-4 max-w-md">
            See how our customers have benefited from our services and how it has improved their workflow.
          </p>
        </div>

        {/* Right Side - Testimonials Slider */}
        <div className="md:w-2/3 mt-10 md:mt-0">
          <Slider {...settings} className="max-w-2xl mx-auto">
            {TestimonialsData.map((item) => (
              <div key={item.id} className="h-[400px] w-full md:w-[600px] flex flex-col justify-between text-center p-8 bg-green-50 shadow-lg rounded-xl mx-auto">
                <div className="text-blue-500 text-5xl font-bold">“</div>
                <p className="text-lg text-gray-700 leading-relaxed mb-7">{item.text}</p>
                <div className="flex flex-col items-center">
                  <img src={item.img} alt={item.name} className="w-25 h-25 rounded-full  border-blue-400 shadow-md" />
                  <p className="text-xl font-semibold text-blue-600 mt-2">{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
