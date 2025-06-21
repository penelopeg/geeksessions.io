import React from 'react'
import Image from 'next/image'

const Activity = (props) => {
  return (
    <article className="flex-1 mb-6 sm:mb-0 p-6 rounded-lg">
      <Image 
        alt={props.title} 
        className="w-12 h-12 mx-auto mb-7" 
        src={props.imageSrc} 
        width={48} 
        height={48}
      />
      <h3 className="font-bold text-2xl mb-4">{props.title}</h3>
      <p className="text-lg mb-2">
        {props.description}
      </p>
    </article>
  )
}

export default Activity
