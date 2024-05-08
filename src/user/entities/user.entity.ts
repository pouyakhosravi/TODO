import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  tasks: string;
  @Column()
  lists: string;
  @Column()
  categories: string;
  @Column()
  labels: string;
  @Column()
  roles: string;
}
