import { Handler } from '@netlify/functions';
import { SpiritualExerciseService } from '../../src/services/spiritual-exercise.service';

const exerciseService = new SpiritualExerciseService();

export const handler: Handler = async (event, context) => {
  // Configurar headers CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Manejar preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  try {
    // Manejar las rutas
    if (event.path === '/api/exercises' || event.path === '/.netlify/functions/api/exercises') {
      switch (event.httpMethod) {
        case 'GET':
          const category = event.queryStringParameters?.category;
          const exercises = category 
            ? exerciseService.findByCategory(category)
            : exerciseService.findAll();
          
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify(exercises)
          };

        case 'POST':
          if (!event.body) {
            return {
              statusCode: 400,
              headers,
              body: JSON.stringify({ message: 'Body is required' })
            };
          }

          const newExercise = exerciseService.create(JSON.parse(event.body));
          return {
            statusCode: 201,
            headers,
            body: JSON.stringify(newExercise)
          };
      }
    }

    // Manejar ruta para ejercicio específico
    if (event.path.match(/\/api\/exercises\/\d+/) || event.path.match(/\/.netlify\/functions\/api\/exercises\/\d+/)) {
      const id = parseInt(event.path.split('/').pop() || '0');
      const exercise = exerciseService.findOne(id);

      if (!exercise) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Exercise not found' })
        };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(exercise)
      };
    }

    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ message: 'Route not found' })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error', error: error.message })
    };
  }
}; 