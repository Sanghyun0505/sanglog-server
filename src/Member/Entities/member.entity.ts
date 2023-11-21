import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class Member {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  readonly id: number;

  @Column('varchar', { name: 'userId', length: 45 })
  readonly userId: string;

  @Column('varchar', { name: 'password', length: 45 })
  readonly password: string;

  @Column('varchar', { name: 'role', length: 45 })
  readonly role: string;
}
