import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicModule } from './music/music.module';
import { MusicList } from './entity/musicList.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'lszh',
      password: '666666',
      database: 'lszhDB',
      entities: [MusicList],
      logging: 'all',
      synchronize: true
    }),
    MusicModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
