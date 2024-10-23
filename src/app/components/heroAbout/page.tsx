import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGithub, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Page = () => {
  return (
    
    <div className='mt-5 min-h-screen bg-orange-100'>
    
      <section id="About Me">
        <h1 className='text-black text-center font-bold text-7xl font-sans'>About Me</h1>
        <div className='flex justify-center items-center mt-20'>
          <div className='flex flex-col items-center'>
            <div className='flex justify-center rounded-full overflow-hidden w-52 h-52 mt-5'>
              <Image
                src="/images (10).jpeg" // Ensure the image path is correct
                alt='my image'
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className='text-center mt-4 text-lg hover:text-blue-500 font-bold'>
              <p className='mb-2'>
                Hello! I am Madiha Ayaz, a passionate web developer with a strong foundation in frontend technologies.
              </p>
              <p className='mb-2'>
                With a background in teaching, I love sharing knowledge and helping others learn.
              </p>
              <p>
                My goal is to create engaging, user-friendly web experiences that leave a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section  id="skills"className='mt-20'>
  <h2 className='text-2xl font-bold text-center'>My Skills</h2>
  <div className='grid grid-cols-2 md:grid-cols-7 gap-4 mt-4'> 
    <div className='flex flex-col items-center'>
      <FontAwesomeIcon icon={faHtml5} className='text-3xl text-orange-600' /> {/* Change here */}
      <span>HTML</span>
    </div>
    <div className='flex flex-col items-center'>
      <FontAwesomeIcon icon={faCss3Alt} className='text-3xl text-blue-600' /> {/* Change here */}
      <span>CSS</span>
    </div>
    <div className='flex flex-col items-center'>
      <FontAwesomeIcon icon={faJs} className='text-3xl text-yellow-500' /> {/* Change here */}
      <span>JavaScript</span>
    </div>
    <div className='flex flex-col items-center'>
      <FontAwesomeIcon icon={faReact} className='text-3xl text-blue-400' /> {/* Change here */}
      <span>React</span>
    </div>
    <div className='flex flex-col items-center'>
      <FontAwesomeIcon icon={faGithub} className='text-3xl text-gray-800' /> {/* Change here */}
      <span>GitHub</span>
    </div>
    <div className='flex flex-col items-center'>
      <FontAwesomeIcon icon={faNodeJs} className='text-3xl text-green-600' /> {/* Change here */}
      <span>Node.js</span>
    </div>
  </div>
</section>
     
      <section  id="projects" className='mt-20'>
        <h2 className='text-2xl font-bold text-center'>My Projects</h2>
        <div className='flex justify-center mt-auto p-4'>
          <Image
            src="/1727387841076.jpeg"
            height={500}
            width={500}
            alt='projects'
            className="object-cover rounded-lg"
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
         
          <div className='bg-gray-500 rounded-lg shadow-lg p-6 text-white'>
            <h3 className='text-xl font-semibold'>Currency Converter</h3>
            <Image src="/currency-converter-plus-banner.width-800.jpg" alt='Project 1' width={200} height={150} className="rounded-md mb-4" />
            <p>A currency converter quickly converts one currency into another.</p>
            <p className='font-bold hover:text-blue-200'>
              <Link href="https://github.com/Madiha-Ayaz/currency-convertor-code.git">GitHub Link</Link>
            </p>
          </div>

          
          <div className='bg-gray-500 rounded-lg shadow-lg p-6 text-white'>
            <h3 className='text-xl font-semibold'>CLI Guessing Game</h3>
            <Image src="/Monday-24-May-2021-083914-AM-IST-1.png.webp" alt='Project 2' width={200} height={150} className="rounded-md mb-4" />
            <p>A guessing game challenges players to guess a hidden number.</p>
            <p className='font-bold hover:text-blue-200'>
              <Link href="https://github.com/Madiha-Ayaz/cli-guessing-game.git">GitHub Link</Link>
            </p>
          </div>

          
          <div className='bg-gray-500 rounded-lg shadow-lg p-6 text-white'>
            <h3 className='text-xl font-semibold'>ATM Machine</h3>
            <Image src="/images (11).jpeg" alt='Project 3' width={200} height={150} className="rounded-md mb-4" />
            <p>An ATM machine enables users to access cash and perform transactions.</p>
            <p className='font-bold hover:text-blue-200'>
              <Link href="https://github.com/Madiha-Ayaz/atmmachine.git">GitHub Link</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  
  );
};

export default Page;
