
import React from 'react';
import { Check, Globe, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeachWithUs: React.FC = () => {
    return (
        <div className="w-full">
            {/* Hero */}
            <div className="bg-[#bcfce9] py-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <span className="text-teal-900 font-bold tracking-widest uppercase text-sm mb-4 block">For Instructors</span>
                        <h1 className="font-serif text-5xl md:text-7xl text-teal-950 mb-6 leading-tight">
                            Share your gift with the world.
                        </h1>
                        <p className="text-teal-800 text-lg mb-8 leading-relaxed">
                            Join the Heartfulness collective. Teach global students, certified by AI-enhanced tools, and build a career doing what you love.
                        </p>
                        <button className="bg-teal-950 text-white px-8 py-3.5 rounded-full font-medium hover:bg-black transition-all shadow-lg flex items-center gap-2">
                            Become a Trainer <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1599447421405-0c307e468723?q=80&w=1200" alt="Yoga Teacher" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl mb-4">Why Teach with Heartfulness?</h2>
                    <p className="text-gray-500">We provide the platform, you provide the wisdom.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { icon: Globe, title: "Global Reach", desc: "Connect with students from over 50 countries without leaving your home studio." },
                        { icon: Users, title: "Vibrant Community", desc: "Join a supportive network of certified instructors and passionate students." },
                        { icon: Heart, title: "Holistic Growth", desc: "Access AI-powered insights to refine your teaching and grow your student base." }
                    ].map((benefit, i) => (
                        <div key={i} className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#bcfce9] transition-colors">
                                <benefit.icon className="w-8 h-8 text-teal-800" />
                            </div>
                            <h3 className="font-serif text-2xl mb-3">{benefit.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Simple Pricing/Commission Info */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h3 className="font-serif text-3xl mb-4">Transparent Earnings</h3>
                        <ul className="space-y-4">
                            {['Keep 85% of your class fees', 'Monthly payouts to your bank', 'No hidden platform fees', 'Free marketing tools included'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600">
                                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-teal-800" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 bg-teal-950 p-8 rounded-3xl text-white text-center">
                        <div className="font-serif text-5xl mb-2">85%</div>
                        <div className="text-teal-200 text-sm uppercase tracking-widest mb-6">Your Share</div>
                        <p className="text-teal-100 text-sm leading-relaxed mb-6">We only grow when you grow. Our small commission covers platform costs and payment processing.</p>
                        <button className="bg-[#bcfce9] text-teal-950 w-full py-3 rounded-xl font-bold hover:bg-white transition-colors">Start Teaching</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachWithUs;
