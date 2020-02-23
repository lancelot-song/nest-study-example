import { Controller, Get, Post, Delete, Body, Query, UsePipes } from '@nestjs/common';
import { MusicService } from './music.service';
import { ValidationPipe } from '../app.pipe';
import { MusicDto } from './dto/music.dto';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService){}

  @Post('/add')
  @UsePipes(new ValidationPipe())
  async addMuisc(@Body() music: MusicDto): Promise<MusicDto>{
    return this.musicService.add(music);
  }

  @Delete('/del')
  async delMusic(@Query('musicID') musicID): Promise<any>{
    return this.musicService.remove(musicID);
  }

  @Post('/edit')
  async editMusic(
    @Query('musicID') musicID,
    @Body() music: MusicDto
  ): Promise<MusicDto>{
    return this.musicService.edit(musicID, music);
  }

  @Get('/findAll')
  async findAll(): Promise<MusicDto[]>{
    return this.musicService.findAll();
  }
}
