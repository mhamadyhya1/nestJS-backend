import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Swagger UI')
      .setDescription("Maxiphy Assesment done by Mohammad Yahya")
      .setVersion('1')
      .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  await app.listen(3000);
}
bootstrap();
