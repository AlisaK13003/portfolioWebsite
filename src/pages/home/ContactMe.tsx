// src/components/ContactMe.tsx
import React from 'react';

const ContactMe: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-primary text-black tsukimi-rounded-regular">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 tsukimi-rounded-medium">Contact Me</h2>
        <p className="mb-8">Don't hesitate to reach out - I am always open to a coffee chat.</p>
        <div className="max-w-lg mx-auto bg-secondary p-8 rounded-[20px]">
          <form>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="name">Name</label>
              <input 
                className="w-full p-3 rounded-[10px] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                type="text" 
                id="name" 
                name="name" 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="email">Email</label>
              <input 
                className="w-full p-3 rounded-[10px] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                type="email" 
                id="email" 
                name="email" 
                required 
              />
            </div>
            <div className="mb-6">
              <label className="block text-left mb-2" htmlFor="message">Message</label>
              <textarea 
                className="w-full p-3 rounded-[10px] bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                id="message" 
                name="message" 
                rows={5} 
                required 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-6 py-3 rounded-[30px] bg-accent text-white tsukimi-rounded-medium hover:bg-secondary"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
