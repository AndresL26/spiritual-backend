import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpiritualExerciseController } from './controllers/spiritual-exercise.controller';
import { SpiritualExerciseService } from './services/spiritual-exercise.service';

@Module({
  imports: [],
  controllers: [AppController, SpiritualExerciseController],
  providers: [AppService, SpiritualExerciseService],
})
export class AppModule {}
