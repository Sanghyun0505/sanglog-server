import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'regist' })
export class Regist {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  readonly id: number;

  @Column('varchar', { name: 'title', length: 30 })
  readonly title: string;

  @Column('varchar', { name: 'subtitle', length: 255 })
  readonly subtitle: string;

  @Column('text', { name: 'content' })
  readonly content: string;

  @Column('text', { name: 'image' })
  readonly image: string;
}
