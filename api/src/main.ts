import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Headers
  app.use(helmet());
  app.enableCors();
  
  // Nest Specific
  app.useGlobalPipes(new ValidationPipe());

  // Swagger (see localhost:3000/api)
  const options = new DocumentBuilder()
    .setTitle('Mr. Stroganoff\'s brews')
    .setDescription('The Api Description for stroganoff brews')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // start listening on port 3000
  await app.listen(3000);
}
bootstrap();
