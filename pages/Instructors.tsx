
import React from 'react';
import { instructors } from '../constants';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Instructors: React.FC = () => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Guides</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Meet the experienced instructors who will guide you on your journey to wellness and mindfulness.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {instructors.map((instructor, index) => (
          <div key={index} className="group flex flex-col">
            <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[4/5] shadow-lg">
              <img 
                src={instructor.img} 
                alt={instructor.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <div className="bg-white p-3 rounded-full hover:bg-[#bcfce9] transition-colors cursor-pointer shadow-xl">
                  <Instagram className="w-5 h-5 text-teal-900" />
                </div>
                <div className="bg-white p-3 rounded-full hover:bg-[#bcfce9] transition-colors cursor-pointer shadow-xl">
                  <Twitter className="w-5 h-5 text-teal-900" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-3xl mb-1">{instructor.name}</h3>
              <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-4">{instructor.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 px-4">
                {instructor.bio}
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
                <Mail className="w-4 h-4" /> Message
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-[#bcfce9] rounded-[3rem] p-12 md:p-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-teal-950 mb-6">Join our teaching team?</h2>
        <p className="text-teal-800 text-lg mb-8 max-w-xl mx-auto">
          We are always looking for passionate instructors to join our community and share their wisdom.
        </p>
        <button className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors shadow-lg">
          Apply to Teach
        </button>
      </div>
    </div>
  );
};

export default Instructors;
