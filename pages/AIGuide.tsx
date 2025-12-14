
import React, { useState } from 'react';
// Added missing icon imports from lucide-react
import { Sparkles, Send, Brain, Target, Compass, Loader2, Heart, Zap, Wind } from 'lucide-react';
import { getYogaAdvice } from '../services/geminiService';
import { AICounselResult } from '../types';

const AIGuide: React.FC = () => {
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AICounselResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setLoading(true);
    try {
      const data = await getYogaAdvice(mood);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4" /> Powered by Gemini AI
        </div>
        <h1 className="font-serif text-5xl md:text-7xl mb-6">AI Wellness Guide</h1>
        <p className="text-gray-500 text-lg">
          Tell our AI assistant how you're feeling physically or mentally, and we'll suggest a personalized practice.
        </p>
      </div>

      <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden mb-12">
        <div className="p-8 md:p-12 border-b border-gray-50">
          <form onSubmit={handleSubmit} className="relative">
            <textarea 
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="e.g. 'I feel very stressed and have a bit of lower back pain after sitting all day...'"
              className="w-full bg-gray-50 rounded-3xl p-6 md:p-8 text-lg focus:outline-none focus:ring-2 focus:ring-teal-200 min-h-[150px] resize-none"
            />
            <button 
              type="submit"
              disabled={loading || !mood.trim()}
              className="absolute bottom-6 right-6 bg-teal-900 text-white p-4 rounded-2xl hover:bg-black transition-all disabled:opacity-50 shadow-lg"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-gray-400 font-medium uppercase tracking-widest">
            Privacy First: Your inputs are handled anonymously by our AI models.
          </p>
        </div>

        {result && !loading && (
          <div className="p-8 md:p-12 bg-[#f0fdfa] animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 text-teal-900 font-bold text-xs uppercase tracking-widest mb-3">
                    <Compass className="w-4 h-4" /> The Path Forward
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed font-serif italic">
                    "{result.message}"
                  </p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-sm border border-teal-50">
                  <div className="flex items-center gap-2 text-teal-900 font-bold text-xs uppercase tracking-widest mb-4">
                    <Target className="w-4 h-4" /> Focus Pose
                  </div>
                  <div className="text-3xl font-serif text-teal-950">{result.suggestedPose}</div>
                  <p className="text-sm text-gray-500 mt-2">Try holding this pose for 2-3 minutes while focusing on deep, belly breaths.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-2 text-teal-900 font-bold text-xs uppercase tracking-widest mb-2">
                  <Brain className="w-4 h-4" /> Recommended Practice
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {result.recommendedClasses.map((cat, i) => (
                    <div key={i} className="bg-white p-5 rounded-3xl border border-teal-100 flex items-center justify-between group hover:border-teal-400 transition-all cursor-pointer">
                      <div className="font-serif text-xl">{cat} Sessions</div>
                      <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-900 group-hover:text-white transition-all">
                        <Send className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-teal-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-teal-800 text-sm font-medium">Ready to start this specific journey?</p>
              <button className="bg-teal-900 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black transition-all shadow-lg">
                View Matched Schedule
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Heart, label: "Emotional Wellness", desc: "Release mental tension and find balance." },
          { icon: Zap, label: "Physical Recovery", desc: "Heal from workouts or long days at the desk." },
          { icon: Wind, label: "Breath Optimization", desc: "Master your energy through pranayama." }
        ].map((feat, i) => (
          <div key={i} className="p-8 rounded-[2.5rem] border border-gray-100 text-center hover:bg-teal-50 transition-colors duration-500">
            <feat.icon className="w-8 h-8 mx-auto mb-4 text-teal-600" />
            <h3 className="font-serif text-xl mb-2">{feat.label}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIGuide;
