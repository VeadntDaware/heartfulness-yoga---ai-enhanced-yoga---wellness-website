
import React from 'react';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#bcfce9] rounded-full flex items-center justify-center">
              <span className="font-serif font-bold text-teal-900">H</span>
            </div>
            <span className="font-serif text-xl font-bold">Heartfulness Yoga</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            A sanctuary for your mind and body. Join us to discover the transformative power of yoga.
          </p>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#bcfce9] hover:text-teal-900 transition-colors cursor-pointer text-gray-600">
                <Instagram className="w-4 h-4" />
             </div>
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#bcfce9] hover:text-teal-900 transition-colors cursor-pointer text-gray-600">
                <Facebook className="w-4 h-4" />
             </div>
             <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#bcfce9] hover:text-teal-900 transition-colors cursor-pointer text-gray-600">
                <Twitter className="w-4 h-4" />
             </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-900">Navigation</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><Link to="/classes" className="hover:text-black">Classes</Link></li>
            <li><Link to="/instructors" className="hover:text-black">Instructors</Link></li>
            <li><Link to="/pricing" className="hover:text-black">Pricing</Link></li>
            <li><Link to="/ai-guide" className="hover:text-black">AI Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-900">Company</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-black">About Us</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Blog</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
           <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-gray-900">Newsletter</h4>
           <p className="text-gray-500 text-sm mb-4">Subscribe to receive updates and free tips.</p>
           <div className="flex gap-2">
             <input type="email" placeholder="Your email" className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-full text-sm focus:outline-none focus:border-black" />
             <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800">
               <ArrowRight className="w-4 h-4" />
             </button>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs text-gray-400">
        <p>&copy; 2024 Heartfulness Yoga. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black">Terms of Service</a>
          <a href="#" className="hover:text-black">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
