import { NestFactory, Reflector } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository } from 'typeorm-transactional-cls-hooked';
import { AppModule } from './app.module';
import { MulterModule } from '@nestjs/platform-express';

const helmet = require("helmet");
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();

  const app = await NestFactory.create(AppModule, {});
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  const config = new DocumentBuilder()
    .setTitle('Panchayat API')
    .setDescription('This is an api for the Panchayat project')
    .setVersion('1.0.1')
    .setTermsOfService(
      ' This API is not affiliated with Nest, Inc.' +
      ' This API is not endorsed by Nest, Inc.' +
      ' This is API not to be used by any other party other than mock-angel and team.',
    )
    .addServer('https://bools-mulesoft.herokuapp.com', 'localhost')
    .addServer('http://[::1]:3060', 'localhost')
    .build();

  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });
  // app.use(cookieParser());

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs/', app, document, customOptions);

  MulterModule.register({
    dest: './upload',
  });
  app.use(helmet());


  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('port'), configService.get<string>('host'));
  console.log(`Application is running on: ${await app.getUrl()}/api`);
  console.log(`Documentation is running on: ${await app.getUrl()}/docs/`);
}
bootstrap();
