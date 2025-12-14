
import React from 'react';
import { Star, Zap, Wind, Check, Heart } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Simple Pricing</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Choose the plan that fits your practice. All memberships include full access to our digital library.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {/* Intro Plan */}
        <div className="p-10 rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-2xl transition-all duration-500 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-teal-50 transition-colors">
              <Heart className="w-6 h-6 text-gray-400 group-hover:text-teal-600" />
            </div>
            <span className="font-bold text-sm uppercase tracking-widest text-gray-400">Intro</span>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-serif">$15</span>
            <span className="text-gray-400">/class</span>
          </div>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">Perfect for beginners wanting to try a single session without commitment.</p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-sm text-gray-600"><Check className="w-4 h-4 text-teal-500" /> Single session access</li>
            <li className="flex items-center gap-3 text-sm text-gray-600"><Check className="w-4 h-4 text-teal-500" /> Free equipment rental</li>
            <li className="flex items-center gap-3 text-sm text-gray-300 line-through"><Check className="w-4 h-4" /> Guest passes</li>
          </ul>
          <button className="w-full bg-white border-2 border-black py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all">
            Buy Now
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="p-10 rounded-[2.5rem] border-2 border-[#bcfce9] bg-white relative hover:shadow-2xl transition-all duration-500 scale-105 z-10">
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#bcfce9] text-teal-900 text-xs font-black px-6 py-2 rounded-full shadow-lg">
            BEST VALUE
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-teal-50 rounded-2xl">
              <Star className="w-6 h-6 text-teal-600" />
            </div>
            <span className="font-bold text-sm uppercase tracking-widest text-teal-900">Premium</span>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-serif">$89</span>
            <span className="text-gray-400">/mo</span>
          </div>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">Unlimited access to all studio classes, workshops, and our premium AI guide.</p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-sm text-gray-600"><Check className="w-4 h-4 text-teal-500" /> Unlimited classes</li>
            <li className="flex items-center gap-3 text-sm text-gray-600"><Check className="w-4 h-4 text-teal-500" /> Premium AI Wellness Guide</li>
            <li className="flex items-center gap-3 text-sm text-gray-600"><Check className="w-4 h-4 text-teal-500" /> 2 Guest passes monthly</li>
            <li className="flex items-center gap-3 text-sm text-gray-600"><Check className="w-4 h-4 text-teal-500" /> Workshop discounts</li>
          </ul>
          <button className="w-full bg-teal-400 text-teal-950 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-teal-500 transition-all shadow-lg">
            Choose Premium
          </button>
        </div>

        {/* Annual Plan */}
        <div className="p-10 rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-2xl transition-all duration-500 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-teal-50 transition-colors">
              <Zap className="w-6 h-6 text-gray-400 group-hover:text-teal-600" />
            </div>
            <span className="font-bold text-sm uppercase tracking-widest text-gray-400">Annual</span>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-serif">$799</span>
            <span className="text-gray-400">/yr</span>
          </div>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed">Commit to a year of growth. Save 25% compared to the monthly plan.</p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-sm text-gray-600"><Check className="w-4 h-4 text-teal-500" /> Everything in Premium</li>
            <li className="flex items-center gap-3 text-sm text-gray-600"><Check className="w-4 h-4 text-teal-500" /> 1 Private session / qtr</li>
            <li className="flex items-center gap-3 text-sm text-gray-600"><Check className="w-4 h-4 text-teal-500" /> Welcome wellness kit</li>
          </ul>
          <button className="w-full bg-black text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-all">
            Join Yearly
          </button>
        </div>
      </div>

      <div className="bg-[#0c4a6e] text-white rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-grow">
          <h2 className="font-serif text-4xl mb-4">Corporate Wellness</h2>
          <p className="text-blue-100 max-w-xl">Bring mindfulness to your workplace. We offer tailored programs for teams of all sizes, including remote sessions.</p>
        </div>
        <button className="bg-[#bcfce9] text-teal-950 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white transition-all whitespace-nowrap">
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default Pricing;
