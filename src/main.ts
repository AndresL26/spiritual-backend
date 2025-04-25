import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configurar CORS para permitir peticiones del frontend
  app.enableCors({
    origin: 'http://localhost:3000', // Asumiendo que tu frontend corre en el puerto 3000
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const port = process.env.PORT || 3001; // Usando puerto 3001 para el backend
  await app.listen(port);
  
  const logger = new Logger('Bootstrap');
  logger.log(`🚀 Aplicación corriendo en: http://localhost:${port}`);
}
bootstrap();
