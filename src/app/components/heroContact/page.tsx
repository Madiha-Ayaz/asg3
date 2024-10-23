import React from 'react';

const Page = () => {
  return (
   
    <div>
     
      <section  className="bg-green-100 py-12 full-screen">
        <h1 className="font-sans text-center mt-10 font-black text-7xl">
          Contact Me
        </h1>
        <div className="text-center mt-10">
          <span className="font-sans font-bold">Email:</span>
          <p className="hover:text-blue-700">madihaayaz248@gmail.com</p>
          <span className="font-sans font-bold">Contact:</span>
          <p className="hover:text-blue-700">12345678990</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
          <h1 className="text-3xl font-bold text-accent mb-4 text-center">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Collaboration is the key to success. Lets chat
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent"
              required
            />

            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
    
  );
};

export default Page;
