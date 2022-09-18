import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './swagger.app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('main');

  const PORT = 3000;

  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe ({
    whitelist: true,
    forbidNonWhitelisted: true
  }))


  initSwagger(app);
  await app.listen(PORT);
  logger.debug(`Server is running at ${await app.getUrl()}/api/docs`);
}
bootstrap();
