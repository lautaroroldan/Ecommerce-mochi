import React from 'react'
import "./CustomCard.css"
function CustomCard({children,title,subTitle,header,footer,className}:any) {
  return (
        <div className='border-2 rounded border-white w-auto relative overflow-hidden card mb-4 md:mb-0'>
          <div className='card-image-container'>
            {header}
          </div>
          <div className='card-body p-2'>
            <div className='text-xl text-amber-500 font-barlow'>
              {title}
            </div>
            <div className='text-black'>
              {subTitle}
            </div>
          </div>   
        </div>
  )
}

export default CustomCard