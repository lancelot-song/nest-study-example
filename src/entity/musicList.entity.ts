import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class MusicList {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  info: string;

  @Column()
  auther: string;

  @Column()
  playUrl: string;

  @Column()
  coverUrl: string;
}