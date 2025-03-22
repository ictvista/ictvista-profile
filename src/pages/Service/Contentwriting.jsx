import React from 'react'
import img from '../../image/service-page/Content/C1.png'
import imgcontent from '../../image/service-page/Content/C2.jpg'
import imgcontent2 from '../../image/service-page/Content/C3.svg'

const Contentwriting = () => {
  return (
    <div>
        <div>
    
    <h1 className='text-2xl my-4 text-center font-bold'>Content Writing</h1>
    <div className='p-10 max-w-5xl mx-auto'>
      <div class="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img src={img} alt="" 
          className='w-full md:w-1/2 rounded-lg shadow-lg'/>
          <p class=" md:w-1/2 text-gray-800 text-lg">
          Contrary to popular belief, Lorem Ipsum is not simply 
          random text. It has roots in a piece of classical Latin 
          literature from 45 BC, making it over 2000 years old. 
          Richard McClintock, Contrary to popular belief, Lorem 
          Ipsum is not simply random text. It has roots in a piece 
          of classical Latin literature from 45 BC, making it over 
          2000 years old. Richard McClintock, 
          </p>
      </div>

      {/* Second Row */}
      <h1 className='text-2xl my-10 text-center font-bold'>Features & Benifits</h1>
      <div class="flex flex-col md:flex-row items-center gap-6">
        
          <p class="w-full md:w-1/2 text-gray-800 text-lg">
          Features: SEO-optimized content, blog posts, social media writing, website copy, and persuasive
marketing materials.
Benefits: Boosts SEO rankings, engages audiences, improves brand messaging, and increases traffic and
conversions.

          </p>
          <img src={imgcontent} alt="" 
          className='w-full md:w-1/2 rounded-lg shadow-lg'/>
      </div>
  </div>

  <div className='h-100'>
  <h1 className='text-2xl my-10 text-center font-bold'>Workflow</h1>
  <img src={imgcontent2} alt="" 
          className='w-50% mx-auto'/>
  </div>

  <div>
  <h1 className='text-2xl my-10 text-center font-bold'>Why US</h1>
  <p class=" items-center text-gray-800 max-w-5xl mx-auto text-lg mb-6">
  Why Choose Us: Our expert content writers create compelling, high-quality content that resonates with
  your audience and supports your marketing goals.
          </p>
  </div>
  </div>
    </div>
  )
}

export default Contentwriting