import { Injectable } from '@nestjs/common';
import { SpiritualExercise } from '../interfaces/spiritual-exercise.interface';

@Injectable()
export class SpiritualExerciseService {
  private exercises: SpiritualExercise[] = [
    {
      id: 1,
      title: 'Meditación de la Luz Interior',
      description: 'Una práctica guiada para conectar con tu luz interior y fortalecer tu espíritu.',
      category: 'meditation',
      duration: 15,
      difficulty: 'beginner',
      benefits: ['Paz mental', 'Claridad emocional', 'Conexión espiritual'],
      imageUrl: 'https://example.com/meditation-1.jpg',
      createdAt: new Date('2024-01-01'),
    },
    {
      id: 2,
      title: 'Yoga para el Despertar Espiritual',
      description: 'Secuencia de asanas diseñada para abrir los chakras y elevar la consciencia.',
      category: 'yoga',
      duration: 30,
      difficulty: 'intermediate',
      benefits: ['Flexibilidad', 'Balance energético', 'Fortaleza interior'],
      imageUrl: 'https://example.com/yoga-1.jpg',
      createdAt: new Date('2024-01-02'),
    },
    {
      id: 3,
      title: 'Práctica de Gratitud Diaria',
      description: 'Ejercicio de mindfulness centrado en el agradecimiento y la abundancia.',
      category: 'mindfulness',
      duration: 10,
      difficulty: 'beginner',
      benefits: ['Actitud positiva', 'Consciencia plena', 'Bienestar emocional'],
      imageUrl: 'https://example.com/mindfulness-1.jpg',
      createdAt: new Date('2024-01-03'),
    },
  ];

  findAll(): SpiritualExercise[] {
    return this.exercises;
  }

  findOne(id: number): SpiritualExercise | undefined {
    return this.exercises.find(exercise => exercise.id === id);
  }

  findByCategory(category: string): SpiritualExercise[] {
    return this.exercises.filter(exercise => exercise.category === category);
  }

  create(exercise: Omit<SpiritualExercise, 'id' | 'createdAt'>): SpiritualExercise {
    const newExercise: SpiritualExercise = {
      ...exercise,
      id: this.exercises.length + 1,
      createdAt: new Date(),
    };
    this.exercises.push(newExercise);
    return newExercise;
  }
} 