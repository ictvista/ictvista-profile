import React from 'react'
import img from '../../image/service-page/Training/T2.jpg'
import imgtraining from '../../image/service-page/Training/T1.jpg'
import imgtraining1 from '../../image/service-page/Training/T3.svg'

const ProfessionalTraining = () => {
  return (
    <div>
         <div>
    
    <h1 className='text-2xl my-4 text-center  font-bold'>Professional Training</h1>
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
          Features: Custom training programs, workshops, certifications, hands-on learning, and industry-specific
courses.
Benefits: Enhanced employee skills, improved performance, career advancement, and higher
productivity.


          </p>
          <img src={imgtraining} alt="" 
          className='w-full md:w-1/2 rounded-lg shadow-lg'/>
      </div>
  </div>

  <div className='h-100'>
  <h1 className='text-2xl my-10 text-center font-bold'>Workflow</h1>
  <img src={imgtraining1} alt="" 
          className='w-50% h-50% mx-auto'/>
  </div>

  <div>
  <h1 className='text-2xl my-10 text-center mt-60 font-bold'>Why US</h1>
  <p class=" items-center text-gray-800 max-w-5xl mx-auto text-lg mb-6">
  Why Choose Us: We offer tailored, interactive training programs that empower your team with the
  latest skills and knowledge to thrive in their roles.
          </p>
  </div>
  </div>
    </div>
  )
}

export default ProfessionalTraining