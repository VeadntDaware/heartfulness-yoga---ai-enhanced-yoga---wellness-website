
import React from 'react';
import { Heart, Wind, Zap, Star } from 'lucide-react';
import { Instructor, YogaClass, Testimonial, FAQ } from './types';

export const THEME = {
  primary: '#bcfce9',
  primaryDark: '#0d9488',
  primaryText: '#134e4a',
  accent: '#0c4a6e',
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop",
  videoBg: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1926&auto=format&fit=crop",
  footer: "https://images.unsplash.com/photo-1554244933-d877fea46ff3?q=80&w=2070&auto=format&fit=crop",
  aiAssistant: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop"
};

export const instructors: Instructor[] = [
  {
    name: "Sarah Mitchell",
    role: "Vinyasa Flow",
    img: "https://images.unsplash.com/photo-1512290923902-8a92f1c04996?q=80&w=600",
    bio: "Sarah has 10 years of experience in flowing meditation.",
    location: "New York, NY",
    certification: "RYT-500",
    rating: 4.9,
    specialties: ["Vinyasa", "Prenatal", "Flow"]
  },
  {
    name: "David Chen",
    role: "Hatha Yoga",
    img: "https://images.unsplash.com/photo-1544367563-121910aa642b?q=80&w=600",
    bio: "David specializes in traditional alignment and focus.",
    location: "San Francisco, CA",
    certification: "RYT-200",
    rating: 4.8,
    specialties: ["Hatha", "Alignment", "Props"]
  },
  {
    name: "Emma Wilson",
    role: "Meditation",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
    bio: "Emma guides students through deep inner peace.",
    location: "London, UK",
    certification: "E-RYT 500",
    rating: 5.0,
    specialties: ["Meditation", "Yin", "Breathwork"]
  },
  {
    name: "Michael Ross",
    role: "Power Yoga",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600",
    bio: "Michael focuses on core strength and high energy.",
    location: "Los Angeles, CA",
    certification: "RYT-500",
    rating: 4.9,
    specialties: ["Power", "Strength", "Inversions"]
  },
  {
    name: "Jessica Lee",
    role: "Restorative",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600",
    bio: "Jessica helps in healing through soft, supported poses.",
    location: "Austin, TX",
    certification: "RYT-200",
    rating: 4.7,
    specialties: ["Restorative", "Therapy", "Gentle"]
  },
  {
    name: "Tom Harris",
    role: "Ashtanga",
    img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=600",
    bio: "Tom teaches the dynamic and traditional eight-limbed path.",
    location: "Chicago, IL",
    certification: "E-RYT 200",
    rating: 4.8,
    specialties: ["Ashtanga", "Traditional", "Mysore"]
  },
];

export const yogaClasses: YogaClass[] = [
  { id: '1', title: "Mindful Flow", duration: "45 min", intensity: 'Gentle', category: "Vinyasa", description: "Move with breath to calm the nervous system.", image: "https://images.unsplash.com/photo-1599447421405-0c307e468723?q=80&w=800", },
  { id: '2', title: "Power Vinyasa", duration: "60 min", intensity: 'High', category: "Power", description: "Build strength and endurance with high-energy sequences.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800", },
  { id: '3', title: "Breathwork & Meditation", duration: "30 min", intensity: 'Gentle', category: "Mindfulness", description: "Master pranayama and deep relaxation.", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800", },
  { id: '4', title: "Ashtanga Primary", duration: "90 min", intensity: 'High', category: "Ashtanga", description: "Traditional series focusing on sequence and focus.", image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800", },
  { id: '5', title: "Restorative Bliss", duration: "60 min", intensity: 'Gentle', category: "Restorative", description: "Deep relaxation using props to support the body.", image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800", },
  { id: '6', title: "Core Yoga", duration: "45 min", intensity: 'Moderate', category: "Hatha", description: "Focus on stabilizing and strengthening the core.", image: "https://images.unsplash.com/photo-1588282322693-50172f85ac2c?q=80&w=800", },
];

export const testimonials: Testimonial[] = [
  { name: "Alice Brown", role: "Member since 2021", text: "Calmy Academy changed my life. The instructors are incredibly supportive and the environment is pure peace.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Mark Wilson", role: "Member since 2022", text: "I never thought I'd enjoy yoga this much. It's the perfect balance to my stressful job.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Sophie Clark", role: "Member since 2023", text: "The variety of classes means I never get bored. I feel stronger and calmer every day.", img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

export const faqs: FAQ[] = [
  { q: "Is yoga suitable for beginners?", a: "Absolutely! We offer classes specifically designed for those new to yoga, focusing on foundational poses and breathing." },
  { q: "What should I bring to class?", a: "Just comfortable clothing and a water bottle. We provide mats and props, though you're welcome to bring your own." },
  { q: "How often should I practice?", a: "Listen to your body. Even 2-3 times a week can bring significant benefits. Consistency is key." },
  { q: "Can I cancel my membership anytime?", a: "Yes, we offer flexible plans. You can cancel or pause your membership with no hidden fees." },
  { q: "Do you offer private sessions?", a: "Yes, our instructors are available for one-on-one sessions to help you deepen your practice." },
];

export const CLASS_FEATURES = [
  { icon: Heart, title: "Mindful Flow", desc: "A gentle practice focusing on moving with the breath to calm the nervous system." },
  { icon: Zap, title: "Power Vinyasa", desc: "Build strength and endurance with this dynamic, high-energy sequence." },
  { icon: Wind, title: "Breathwork & Meditation", desc: "Dedicated sessions to master pranayama techniques and deep relaxation." },
  { icon: Star, title: "Restorative Yoga", desc: "Deep relaxation using props to support the body in long-held poses." },
];
