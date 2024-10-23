import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    
      
        <div>
      <section className="bg-gray-200 p-10 h-[300px] hover:bg-black">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/Agency-Portfolio-Website-Template-Free-PSD.webp"
              alt="Agency Portfolio Website Template"
              className="hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
              layout="fill"
            />
          </div>

          <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/download (6).jpeg"
              alt="Image 2"
              className="hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
              layout="fill"
            />
          </div>

          <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images (9).jpeg"
              alt="Image 3"
              className="hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
              layout="fill"
            />
          </div>
        </div>
      </section>

    
      <section className='p-10 bg-yellow-800 h-[200] flex flex-col justify-center'>
        <h1 className='text-white text-center'>
          Every great developer you know got there by solving problems they were unqualified to solve.
        </h1>
        <div className='flex space-x-5 items-center w-full justify-center mt-4'>
          <button className='text-black bg-white font-semibold py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300'>
            Hire me
          </button>
          <button className='text-black bg-white font-semibold py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300'>
            View my Projects
          </button>
        </div>
      </section>
    </div>

  );
};

export default Page;
