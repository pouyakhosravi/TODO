import { Label } from 'src/label/entities/label.entity';
import { List } from 'src/list/entities/list.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  dueDate: Date;

  @Column({ default: 'Medium' })
  priority: 'Low' | 'Medium' | 'High';

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => User)
  user: User;

  @ManyToMany(() => Label)
  @JoinTable()
  labels: Label[];

  @ManyToMany(() => List)
  @JoinTable()
  lists: List[];

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
