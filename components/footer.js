import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex flex-col fixed right-0 top-1/2 transform -translate-y-1/2">
      <a
        className="rounded-tl-md py-3.5 px-3.5 bg-gray-600 hover:bg-opacity-70 transition-colors"
        href="https://instagram.com/geeksessionsfaro"
        rel="noopener"
        target="_blank"
      >
        <Image className="h-4 w-4" alt="instagram" src="/assets/icon_instagram.svg" width={16} height={16} />
      </a>
      <a
        className="py-3.5 px-3.5 bg-gray-600 hover:bg-opacity-70 transition-colors"
        href="https://www.youtube.com/@geeksessionsfaro1099"
        rel="noopener"
        target="_blank"
      >
        <Image className="h-4 w-4" alt="youtube" src="/assets/icon_youtube.svg" width={16} height={16} />
      </a>
      <a
        className="py-3.5 px-3.5 bg-gray-600 hover:bg-opacity-70 transition-colors"
        href="https://github.com/geeksessions"
        rel="noopener"
        target="_blank"
      >
        <Image className="h-4 w-4" alt="github" src="/assets/icon_github.svg" width={16} height={16} />
      </a>
      <a
        className="py-3.5 px-3.5 bg-gray-600 hover:bg-opacity-70 transition-colors"
        href="https://pt-pt.facebook.com/GeekSessionsFaro"
        rel="noopener"
        target="_blank"
      >
        <Image className="h-4 w-4" alt="facebook" src="/assets/icon_facebook.svg" width={16} height={16} />
      </a>
      <a
        className="rounded-bl-md py-3.5 px-3.5 bg-gray-600 hover:bg-opacity-70 transition-colors"
        href="https://twitter.com/GeekSessionsFAO"
        rel="noopener"
        target="_blank"
      >
        <Image className="h-4 w-4" alt="twitter" src="/assets/icon_twitter.svg" width={16} height={16} />
      </a>
    </footer>
  )
}

export default Footer
