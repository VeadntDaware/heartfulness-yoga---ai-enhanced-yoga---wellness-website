
import React, { useState } from 'react';
import { yogaClasses } from '../constants';
import { YogaClass } from '../types';
import { Search, Clock, Zap, Heart, Wind } from 'lucide-react';

const Classes: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Vinyasa', 'Power', 'Hatha', 'Restorative', 'Mindfulness', 'Ashtanga'];

  const filteredClasses = yogaClasses.filter(c => {
    const matchesCategory = filter === 'All' || c.category === filter;
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Classes</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Explore a variety of styles, intensities, and durations designed to suit your journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search classes..." 
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-teal-900 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredClasses.length > 0 ? filteredClasses.map((item: YogaClass) => (
          <div key={item.id} className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-900 shadow-sm uppercase tracking-wide">
                {item.category}
              </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.duration}</span>
                <span className="flex items-center gap-1">
                  {item.intensity === 'Gentle' && <Heart className="w-3 h-3 text-pink-500" />}
                  {item.intensity === 'Moderate' && <Wind className="w-3 h-3 text-teal-500" />}
                  {item.intensity === 'High' && <Zap className="w-3 h-3 text-orange-500" />}
                  {item.intensity} Intensity
                </span>
              </div>
              <h3 className="font-serif text-2xl mb-3 group-hover:text-teal-900 transition-colors">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.description}</p>
              <button className="mt-auto w-full bg-black text-white py-3 rounded-full font-medium hover:bg-teal-900 transition-colors">
                Book Session
              </button>
            </div>
          </div>
        )) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-gray-400 text-xl">No classes found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Classes;
