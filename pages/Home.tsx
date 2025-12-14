
import React, { useState } from 'react';
import { Play, ArrowRight, Star, Heart, Zap, Wind, Check, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, yogaClasses, instructors, testimonials, faqs, CLASS_FEATURES } from '../constants';

const FeatureCard: React.FC<{ icon: any; title: string; desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl flex flex-row items-start gap-4 hover:shadow-lg transition-shadow duration-300 border border-gray-100 group">
    <div className="bg-[#bcfce9] p-3 rounded-full shrink-0 group-hover:bg-teal-100 transition-colors">
      <Icon className="w-6 h-6 text-teal-900" />
    </div>
    <div>
      <h3 className="font-serif text-xl mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      <Link to="/classes" className="inline-block mt-4 px-5 py-2 rounded-full border border-gray-200 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all">
        Explore
      </Link>
    </div>
  </div>
);

const AccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-0">
    <button className="w-full py-6 flex justify-between items-center text-left group" onClick={onClick}>
      <span className="font-serif text-lg text-gray-800 group-hover:text-black transition-colors pr-8">{question}</span>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#bcfce9] rotate-180' : 'bg-gray-100'}`}>
        <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-teal-900' : 'text-gray-500'}`} />
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
      <p className="text-gray-500 leading-relaxed">{answer}</p>
    </div>
  </div>
);

const Home: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="pt-12 pb-16 md:pt-20 md:pb-24 px-6 max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#bcfce9] animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Transform Your Life</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl text-black mb-6 leading-[0.9] tracking-tight">
            Heartfulness <span className="italic font-light">Yoga</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-500 mb-8 text-lg">
            Find balance in your daily life. Join our community to transform your body and mind through the practice of yoga.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ai-guide" className="bg-[#bcfce9] text-teal-950 px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:bg-[#9bfce2] transition-colors shadow-sm">
              <Play className="w-4 h-4 fill-current" /> AI Wellness Guide
            </Link>
            <Link to="/classes" className="px-8 py-3.5 rounded-full font-medium border border-gray-200 hover:border-black transition-colors">
              Browse Classes
            </Link>
          </div>
        </div>

        <div className="relative mt-12 group">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
            <img src={IMAGES.hero} alt="Yoga by the sea" className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute -bottom-10 left-6 md:bottom-12 md:left-12 bg-white p-6 md:p-8 rounded-3xl shadow-xl max-w-xs md:max-w-sm border border-gray-100">
            <h3 className="font-serif text-2xl mb-3">Find your inner calm.</h3>
            <p className="text-gray-500 text-sm mb-6">Join over 10,000 members discovering the power of mindfulness every single day.</p>
            <Link to="/pricing">
              <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm hover:bg-gray-800 w-full flex items-center justify-between group/btn">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto mt-20 md:mt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl leading-tight mb-6">
              Proven benefits for body & mind
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Yoga isn't just about flexibility. It's about strength, breath, and finding a moment of peace in a chaotic world.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center border-t border-b border-gray-100 py-12">
            <div>
              <div className="font-serif text-4xl mb-2">10+</div>
              <div className="text-xs uppercase tracking-widest text-gray-400">Years</div>
            </div>
            <div>
              <div className="font-serif text-4xl mb-2">50k+</div>
              <div className="text-xs uppercase tracking-widest text-gray-400">Students</div>
            </div>
            <div>
              <div className="font-serif text-4xl mb-2">4.9</div>
              <div className="text-xs uppercase tracking-widest text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Preview */}
      <section className="py-24 bg-[#f9fafb] px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-4 block">Our Specialties</span>
              <h2 className="font-serif text-5xl mb-6">Yoga for everyone & every level</h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Whether you're a complete beginner or an advanced yogi, we have a class that fits your needs. 
              </p>
              <Link to="/classes" className="bg-black text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
                Explore All Classes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-12 rounded-3xl overflow-hidden h-64 shadow-lg hidden lg:block">
               <img src={yogaClasses[0].image} alt="Meditation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {CLASS_FEATURES.map((feature, idx) => (
              <FeatureCard key={idx} icon={feature.icon} title={feature.title} desc={feature.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0c4a6e] text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#bcfce9] uppercase tracking-widest text-xs font-bold mb-2 block">Testimonials</span>
            <h2 className="font-serif text-4xl md:text-5xl">What our members say</h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white text-gray-900 p-8 rounded-3xl snap-center shrink-0 border-t-8 border-[#bcfce9]">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
                  <div>
                    <h4 className="font-serif text-lg">{t.name}</h4>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">{t.role}</span>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-600 italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl mb-4">Frequently Asked</h2>
          <p className="text-gray-500">Everything you need to know about our practice.</p>
        </div>
        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaqIndex === index}
              onClick={() => setOpenFaqIndex(index === openFaqIndex ? -1 : index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
