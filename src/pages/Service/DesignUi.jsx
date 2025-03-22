import React from 'react'
import img from '../../image/service-page/Design_Ui/U1.jpg'
import img1 from '../../image/service-page/Design_Ui/U2.jpg'
import img2 from '../../image/service-page/Design_Ui/U3.svg'

const DesignUi = () => {
  return (
    <div>
      <div>
    
    <h1 className='text-2xl my-4 text-center font-bold'>UI/UX Design</h1>
    <div className='p-10 max-w-5xl mx-auto'>
      <div class="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img src={img} alt="" 
          className='w-full md:w-1/2 rounded-lg shadow-lg'/>
          <p class=" md:w-1/2 text-gray-800 text-lg">
          Simple navigation, responsive layouts, and contemporary aesthetics are all features of our UI/UX
design that guarantee a smooth, user-friendly experience. To increase customer happiness, we prioritize
interesting interactions, quick performance, and accessibility. Our visually striking designs enhance
company identification, increase conversions, and provide a polished online presence by putting an
emphasis on usability and organized content.
          </p>
      </div>

      {/* Second Row */}
      <h1 className='text-2xl my-10 text-center font-bold'>Features & Benifits</h1>
      <div class="flex flex-col md:flex-row items-center gap-6">
        
          <p class="w-full md:w-1/2 text-gray-800 text-lg">
          Features: Intuitive interfaces, visually appealing design, responsive layouts, user-centered approach, and
interactive elements.
Benefits: Improved user satisfaction, increased conversions, enhanced brand loyalty, better usability,
and engagement.

          </p>
          <img src={img1} alt="" 
          className='w-full md:w-1/2 rounded-lg shadow-lg'/>
      </div>
  </div>

  <div className='h-100'>
  <h1 className='text-2xl my-10 text-center font-bold'>Workflow</h1>
  <img src={img2} alt="" 
          className='w-50% mx-auto'/>
  </div>

  <div>
  <h1 className='text-2xl my-10 text-center font-bold'>Why US</h1>
  <p class=" items-center text-gray-800 max-w-5xl mx-auto text-lg mb-6">
  Why Choose Us: Our UI/UX experts design seamless experiences that captivate users, boost conversions,
  and provide lasting impressions for your brand.
          </p>
  </div>
  </div>
    </div>
  )
}

export default DesignUi