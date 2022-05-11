import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20,
    }),
    WinstonModule.forRoot({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.ms(),
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('Nest', {
              prettyPrint: true,
            }),
          ),
        }),
        // new winston.transports.File({ filename: 'error.log', level: 'error' }),
        // new winston.transports.File({ filename: 'combined.log' }),
        new DailyRotateFile({
          filename: 'info',
          dirname: __dirname + '/../' + 'logs',
          level: 'info',
          datePattern: 'yyyy-MM-DD',
          extension: '.log',
        }),
        new DailyRotateFile({
          filename: 'error',
          dirname: __dirname + '/../' + 'logs',
          level: 'error',
          datePattern: 'yyyy-MM-DD',
          extension: '.log',
        }),
      ],
    }),
    TypeOrmModule.forRoot(),
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
