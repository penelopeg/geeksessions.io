import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 mt-5 px-6">
      <Image
        alt="Geek Sessions Faro"
        className="max-h-20 p-2"
        src="/assets/logo_white.svg"
        width={80}
        height={80}
      />
      <a
        className="flex items-center bg-gray-600 hover:bg-opacity-70 transition-colors text-gray-100 py-3 px-5 rounded-full text-sm"
        href="https://chat.geeksessions.io/"
        rel="noopener"
        target="_blank"
      >
        <Image 
          className="w-20 md:hidden"
          alt="discord"
          src="/assets/icon_discord_wordmark.svg"
          width={80}
          height={24}
        />
        <Image
          className="w-5 mr-2 hidden md:block"
          alt="discord"
          src="/assets/icon_discord.svg"
          width={20}
          height={20}
        />
        <span className="hidden md:block">Join us on Discord</span>
      </a>
    </header>
  )
}

export default Header
