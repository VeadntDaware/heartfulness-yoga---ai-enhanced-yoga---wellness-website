
import React, { useState } from 'react';
import { Search, MapPin, Star, Award, ChevronRight } from 'lucide-react';
import { instructors } from '../constants';
import { Link } from 'react-router-dom';

const FindTrainer: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [locationFilter, setLocationFilter] = useState('');

    const filteredInstructors = instructors.filter(inst => {
        const matchesSearch = inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inst.role.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLocation = inst.location?.toLowerCase().includes(locationFilter.toLowerCase()) || !locationFilter;
        return matchesSearch && matchesLocation;
    });

    return (
        <div className="w-full min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-white pt-32 pb-16 px-6 rounded-b-[3rem] shadow-sm mb-12">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-4 block">Certified Experts</span>
                    <h1 className="font-serif text-4xl md:text-6xl text-gray-900 mb-8">Find a Heartfulness Trainer</h1>

                    <div className="bg-white p-2 rounded-full shadow-lg border border-gray-100 flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
                        <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-full h-14">
                            <Search className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                type="text"
                                placeholder="Search by name or style..."
                                className="bg-transparent w-full focus:outline-none text-gray-700 placeholder-gray-400"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 flex items-center px-4 bg-gray-50 rounded-full h-14">
                            <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                type="text"
                                placeholder="Location (e.g. New York)"
                                className="bg-transparent w-full focus:outline-none text-gray-700 placeholder-gray-400"
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                            />
                        </div>
                        <button className="bg-teal-950 text-white px-8 h-14 rounded-full font-medium hover:bg-black transition-colors md:w-auto w-full">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredInstructors.length > 0 ? (
                        filteredInstructors.map((inst, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                                        <img src={inst.img} alt={inst.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl mb-1">{inst.name}</h3>
                                        <div className="text-teal-600 text-sm font-medium mb-1">{inst.role}</div>
                                        <div className="flex items-center gap-1 text-xs text-gray-400">
                                            <MapPin className="w-3 h-3" /> {inst.location || 'Online'}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {inst.bio}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {inst.specialties?.slice(0, 3).map((spec, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-50 rounded-full text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                                            {spec}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                                        <span className="font-bold text-sm">{inst.rating || 'New'}</span>
                                    </div>
                                    <Link to={`/book/${idx}`} className="flex items-center gap-2 text-sm font-bold text-teal-900 hover:text-teal-600 transition-colors group/link">
                                        Book Session <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-6 h-6 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-serif mb-2">No trainers found</h3>
                            <p className="text-gray-500">Try adjusting your filters to find who you're looking for.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FindTrainer;
