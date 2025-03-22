import React from 'react'
import img from "../../image/service-page/webdev/img.png"
 import imgweb from '../../image/service-page/webdev/Web Development-Flow.svg'
import imgweb1 from '../../image/service-page/webdev/webdev3.jpg'


const WebDevelopment = () => {
  return (
    <div>
       <div>

<h1 className='text-2xl my-4 text-center font-bold'>Web Development</h1>
<div className='p-10  max-w-5xl mx-auto'>
  <div class="flex flex-col md:flex-row items-center gap-6 mb-10">
      <img src={img} alt="" 
      className='w-full md:w-1/2 rounded-lg shadow-lg'/>
      <p class=" md:w-1/2 text-gray-800 text-lg">
      ICT Vista specializes in developing custom software solutions tailored to your business needs. By understanding
      your ideas, they create high-quality, complex software from scratch, ensuring exceptional service and reliability.
      </p>
  </div>

  {/* Second Row */}
  <h1 className='text-2xl my-10 text-center font-bold'>Features & Benifits</h1>
  <div class="flex flex-col md:flex-row items-center gap-6">
    
      <p class="w-full md:w-1/2 text-gray-800 text-lg">
      Features: Responsive design, CMS integration, e-commerce setup, security features, SEO optimization,
cross-browser compatibility.

Benefits: Global reach, brand credibility, scalability, cost-effective marketing, enhanced user
engagement, data-driven insights.
      </p>
   <img src={imgweb1} alt="" 
      className='w-full md:w-1/2 rounded-lg shadow-lg'/> 
  </div>
</div>

<div className='h-100'>
<h1 className='text-2xl my-10 text-center font-bold'>Workflow</h1>
<img src={imgweb} alt="" 
      className='w-50% mx-auto'/>
</div>

<div>
<h1 className='text-2xl my-10 text-center font-bold'>Why US</h1>
<p class=" items-center text-gray-800 max-w-5xl mx-auto text-lg mb-6">
Why Choose Us: We deliver custom, scalable web solutions tailored to your business needs, ensuring
optimal performance, security, and an exceptional user experience.
      </p>
</div>
</div>
    </div>
  )
}

export default WebDevelopment