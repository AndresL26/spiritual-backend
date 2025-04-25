import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { SpiritualExerciseService } from '../services/spiritual-exercise.service';
import { SpiritualExercise } from '../interfaces/spiritual-exercise.interface';

@Controller('api/exercises')
export class SpiritualExerciseController {
  constructor(private readonly exerciseService: SpiritualExerciseService) {}

  @Get()
  findAll(@Query('category') category?: string): SpiritualExercise[] {
    if (category) {
      return this.exerciseService.findByCategory(category);
    }
    return this.exerciseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): SpiritualExercise | undefined {
    return this.exerciseService.findOne(Number(id));
  }

  @Post()
  create(@Body() exercise: Omit<SpiritualExercise, 'id' | 'createdAt'>): SpiritualExercise {
    return this.exerciseService.create(exercise);
  }
} 