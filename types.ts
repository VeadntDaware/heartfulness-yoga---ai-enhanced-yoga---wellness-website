
export interface Instructor {
  name: string;
  role: string;
  img: string;
  bio: string;
}

export interface YogaClass {
  id: string;
  title: string;
  duration: string;
  intensity: 'Gentle' | 'Moderate' | 'High';
  category: string;
  description: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  img: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface AICounselResult {
  message: string;
  recommendedClasses: string[];
  suggestedPose: string;
}
