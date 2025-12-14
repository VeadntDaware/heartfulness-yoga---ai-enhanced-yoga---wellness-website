
import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavLink: React.FC<{ to: string; children: React.ReactNode; active?: boolean }> = ({ to, children, active }) => (
  <Link 
    to={to} 
    className={`font-medium text-sm tracking-wide transition-colors duration-200 ${
      active ? 'text-teal-900 font-bold border-b-2 border-teal-300' : 'text-gray-600 hover:text-black'
    }`}
  >
    {children}
  </Link>
);

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#bcfce9] rounded-full flex items-center justify-center">
            <span className="font-serif font-bold text-teal-900">H</span>
          </div>
          <span className="font-serif text-xl font-semibold tracking-tight">Heartfulness Yoga</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
          <NavLink to="/classes" active={location.pathname === '/classes'}>Classes</NavLink>
          <NavLink to="/instructors" active={location.pathname === '/instructors'}>Instructors</NavLink>
          <NavLink to="/pricing" active={location.pathname === '/pricing'}>Pricing</NavLink>
          <NavLink to="/ai-guide" active={location.pathname === '/ai-guide'}>
            <span className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> AI Guide</span>
          </NavLink>
        </div>

        <div className="hidden md:block">
          <Link to="/pricing">
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl z-50">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Home</Link>
          <Link to="/classes" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Classes</Link>
          <Link to="/instructors" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Instructors</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Pricing</Link>
          <Link to="/ai-guide" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-teal-600 flex items-center gap-2"><Sparkles className="w-4 h-4" /> AI Wellness Guide</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
            <button className="bg-black text-white px-6 py-3 rounded-full text-base font-medium w-full mt-2">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
