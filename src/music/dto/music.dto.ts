import { IsString } from 'class-validator';

export class MusicDto{
  @IsString()
  readonly name: string;
  
  @IsString()
  readonly info: string;

  @IsString()
  readonly auther: string;

  @IsString()
  readonly playUrl: string;

  @IsString()
  readonly coverUrl: string;
}