import React from 'react'
import img1 from '../../image/service-page/Seopage/Seo1.jpg'
import img2 from '../../image/service-page/Seopage/Seo4.jpg'
import img3 from '../../image/service-page/Seopage/Seo3.svg'

const Seo = () => {
  return (
    <div>
       <div>
   
   <h1 className='text-2xl my-4 text-center font-bold'>SEO Optimization</h1>
   <div className='p-10 max-w-5xl mx-auto'>
     <div class="flex flex-col md:flex-row items-center gap-6 mb-10">
         <img src={img1} alt="" 
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
         Features: Keyword research, on-page and off-page SEO, technical SEO, content optimization, and link-
building strategies.
Benefits: Improved search rankings, increased organic traffic, better user experience, and higher
conversions.

                        </p>
         <img src={img2} alt="" 
         className='w-full md:w-1/2 rounded-lg shadow-lg'/>
     </div>
 </div>

 <div className='h-100 '>
 <h1 className='text-2xl my-10 text-center font-bold'>Workflow</h1>
 <img src={img3} alt="" 
         className='w-50% mx-auto'/>
 </div>

 <div>
 <h1 className='text-2xl my-10 text-center mt-40 font-bold'>Why US</h1>
 <p class=" items-center text-gray-800 max-w-5xl mx-auto text-lg mb-6">
 Why Choose Us: Our SEO experts implement effective strategies that enhance your website&#39;s visibility,
 driving more organic traffic and boosting your business growth.
         </p>
 </div>
 </div>

    </div>
  )
}

export default Seo