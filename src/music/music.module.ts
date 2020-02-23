import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import { MusicList } from '../entity/musicList.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MusicList])],
  controllers: [MusicController],
  providers: [MusicService],
  exports: [MusicService]
})
export class MusicModule {}
