import React from 'react'
import SimpleMap from '../components/common/Map/Map'

function Location() {

  
  return (
    <div className='bg-gray-100  h-[83vh] md:h-[90vh] flex justify-center items-center'>
      <SimpleMap />
      
      {/* <iframe
       aria-readonly src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28331.067237302883!2d85.0337382!3d27.426159549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1719062870996!5m2!1sen!2snp" 
        className='w-full h-full' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        
    </div>
  )
}

export default Location