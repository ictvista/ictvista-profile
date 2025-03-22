import React from 'react'
import img from '../../image/service-page/Marketing/M1.png'
import imgmarketing from '../../image/service-page/Marketing/M2.jpg'
import imgmarketing1 from '../../image/service-page/Marketing/M3.svg'

const Marketing = () => {
  return (
    <div>
       <div>
    
    <h1 className='text-2xl my-4 text-center font-bold'>Marketing</h1>
    <div className='p-10 max-w-5xl mx-auto'>
      <div class="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img src={img} alt="" 
          className='w-full md:w-1/2 rounded-lg shadow-lg'/>
          <p class=" md:w-1/2 text-gray-800 text-lg">
          By providing strategic digital solutions, our marketing services aid in the expansion of enterprises. To
increase brand awareness and engagement, we are experts in SEO, content marketing, social media
management, and targeted advertising. We ensure a strong online presence and long-term business
success by maximizing conversions, generating leads, and driving traffic through data-driven plans and
innovative campaigns. 
          </p>
      </div>

      {/* Second Row */}
      <h1 className='text-2xl my-10 text-center font-bold'>Features & Benifits</h1>
      <div class="flex flex-col md:flex-row items-center gap-6">
        
          <p class="w-full md:w-1/2 text-gray-800 text-lg">
          Features: Targeted campaigns, social media integration, SEO, email marketing, market research, and
brand strategy.
Benefits: Increased brand awareness, customer loyalty, higher ROI, and sustained business growth.

          </p>
          <img src={imgmarketing} alt="" 
          className='w-full md:w-1/2 rounded-lg shadow-lg'/>
      </div>
  </div>

  <div className='h-100'>
  <h1 className='text-2xl my-10 text-center font-bold'>Workflow</h1>
<img src={imgmarketing1} alt="" 
              className='w-50% mx-auto'/>
  </div>

  <div>
  <h1 className='text-2xl my-10 text-center mt-30 font-bold'>Why US</h1>
  <p class=" items-center text-gray-800 max-w-5xl mx-auto text-lg mb-6">
  Why Choose Us: We craft data-driven, tailored marketing strategies that connect with your audience
  and drive measurable results for your brand.
          </p>
  </div>
  </div>
    </div>
  )
}

export default Marketing