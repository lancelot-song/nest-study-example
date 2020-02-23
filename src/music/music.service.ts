// src/music/music.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MusicList } from '../entity/musicList.entity';
import { MusicDto } from './dto/music.dto';

@Injectable()
export class MusicService {
  
  constructor(
    @InjectRepository(MusicList) private readonly musicRepository: Repository<MusicList>
  ){}

  // 传入的对象类型必须和表的要求一致，并且返回异步查询数据
  async add(music: MusicDto): Promise<MusicDto>{
    const createMusic = await this.musicRepository.save(music);
    return createMusic;
  }
  
  // 传入的对象类型必须和表的 ID 一致，都是 string 类型，并且返回删除后的结果
  async remove(musicID: string): Promise<any>{
    const findMusic = await this.musicRepository.findOne(musicID);
    const removeResult = await this.musicRepository.remove(findMusic);
    return removeResult;
  }

  // 传入表中本条数据的 ID 进行查询读取出来，再将传入的本条数据重新写入表中进行保存
  async edit(musicID, music: MusicDto): Promise<MusicDto>{
    const findMusic = await this.musicRepository.findOne(musicID);
    Object.keys(music).map(key=>{
      findMusic[key] = music[key];
    });
    const creatMusic = await this.musicRepository.save(findMusic);
    return creatMusic;
  }

  // 查找表的所有内容，以数组形式返回
  async findAll(): Promise<MusicDto[]>{
    const findAll = await this.musicRepository.find();
    return findAll;
  }
}
