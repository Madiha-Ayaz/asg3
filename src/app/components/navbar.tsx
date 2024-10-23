import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <nav className='w-full   bg-black p-2  text-white text-2xl'>
      <div className='container mx-auto flex justify-end space-x-4'>
        <Link href="#" className="hover:text-gray-200  no-underline hover:underline">Home</Link>
        <Link href="#contactUs" className="hover:text-gray-200  no-underline hover:underline">Contact Us</Link>
        <Link href="#Abouts" className="hover:text-gray-200 no-underline hover:underline ">About</Link>
      </div>
    </nav>
  )
}

export default navbar