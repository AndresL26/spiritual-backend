import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar CORS para permitir peticiones desde múltiples orígenes
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://spiritualv4.netlify.app',
      'https://spiritualv4-backend.netlify.app'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
  });

  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0');
  
  const logger = new Logger('Bootstrap');
  logger.log(`🚀 Aplicación corriendo en: http://localhost:${port}`);
}
bootstrap();
