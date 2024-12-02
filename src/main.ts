import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create the application instance
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: '*', // Allow all origins (replace with specific domains in production)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  // Set the port from environment variables or fallback to 3000
  const port = process.env.PORT || 3000;

  // Start the server
  await app.listen(port);
  console.log(`WebSocket server is running on: ws://localhost:${port}`);
}

bootstrap();
