import React from "react";
import { motion } from "framer-motion";

// Import images
import img1 from "../image/technology/01.svg";
import img2 from "../image/technology/02.svg";
import img3 from "../image/technology/03.svg";
import img4 from "../image/technology/04.svg";
import img5 from "../image/technology/05.svg";
import img6 from "../image/technology/06.svg";
import img7 from "../image/technology/07.svg";
import img8 from "../image/technology/08.svg";
import img9 from "../image/technology/09.svg";
import img10 from "../image/technology/10.svg";
import img11 from "../image/technology/11.svg";
import img12 from "../image/technology/12.svg";
import img13 from "../image/technology/13.svg";
import img14 from "../image/technology/14.svg";
import img15 from "../image/technology/15.svg";
import img16 from "../image/technology/16.svg";
import img17 from "../image/technology/17.svg";
import img18 from "../image/technology/18.svg";
import img19 from "../image/technology/19.svg";
import img20 from "../image/technology/20.svg";
import img21 from "../image/technology/21.svg";
import img22 from "../image/technology/22.svg";

// Image Arrays
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22];

// Animation Variants
const marqueeVariants = {
animate: {
x: ["0%", "-100%"],
transition: {
x: {
repeat: Infinity,
repeatType: "loop",
duration: 150, // Adjust speed
ease: "linear",
},
},
},
};

const Technology = () => {
return (
<div className="  w-full py-6 bg-white overflow-hidden mt-20 ">
{/* Title */}
<div className="text-center text-xl sm:text-2xl font-semibold mb-20 rem  text-gray-800">
<h2 className="text-3xl font-bold text-center mb-20">Technology We Use</h2>
</div>

{/* Marquee Wrapper */}
<div className=" relative w-full flex  bg-[#4B88A2] space-y-4 overflow-hidden flex-shrink-0">
{/* Marquee (Both Lines in One Row) */}
<div className="flex space-x-4">
{/* First Line */}
<motion.div className="flex space-x-6 min-w-full" variants={marqueeVariants} animate="animate">
{[...images, ...images].map((image, index) => (
<div key={`line1-${index}`} className="flex items-center justify-center ">
<img src={image} alt={`Tech ${index + 1}`} className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain " />
</div>
))}
</motion.div>

{/* Second Line (Offset for Seamless Effect) */}
<motion.div className="flex space-x-6 min-w-full " variants={marqueeVariants} animate="animate">
{[...images, ...images].map((image, index) => (
<div key={`line2-${index}`} className="flex items-center justify-center ">
<img src={image} alt={`Tech ${index + 1}`} className="h-20 max-w-20 sm:h-24  md:h-28 lg:h-32 object-contain" />
</div>
))}
</motion.div>
</div>
</div>
</div>
);
};

export default Technology;


