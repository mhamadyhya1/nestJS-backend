import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './guard/jwt-auth-guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalGuards(new JwtAuthGuard());
  app.useGlobalPipes(new ValidationPipe({transform: true,forbidUnknownValues: false}));
  const config = new DocumentBuilder()
      .setTitle('Swagger UI')
      .setDescription("Maxiphy Assesment done by Mohammad Yahya")
      .setVersion('1')
      .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  app.enableCors();
  await app.listen(3061);
}
bootstrap();
