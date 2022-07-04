import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfiguration } from 'config/env.configuration';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,

    ConfigModule.forRoot({
      isGlobal: true,
      cache: false,
      envFilePath: ['.env'],
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(
          envConfiguration.MONGODB_COMPASS,
        ),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: false,
      }),
      inject: [ConfigService],
    }),

  ],

  controllers: [AppController],
  providers: [AppService],

})

export class AppModule {}
