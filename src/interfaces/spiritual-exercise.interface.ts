export interface SpiritualExercise {
  id: number;
  title: string;
  description: string;
  category: 'meditation' | 'prayer' | 'mindfulness' | 'yoga';
  duration: number; // en minutos
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  benefits: string[];
  imageUrl?: string;
  createdAt: Date;
} 