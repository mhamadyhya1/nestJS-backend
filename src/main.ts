import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalGuards(new (AuthGuard('jwt')));
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
function UseGlobalGuards(AuthGuard: (type?: string | string[]) => import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>) {
  throw new Error('Function not implemented.');
}

