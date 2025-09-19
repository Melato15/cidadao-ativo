import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Unique,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';
import { Project } from '../../projects/entities/project.entity';

export enum VoteType {
  UP = 'up',
  DOWN = 'down',
}

@Entity('votes')
@Unique(['userId', 'projectId']) // Um usuário pode votar apenas uma vez por projeto
export class Vote {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ enum: VoteType })
  @Column({
    type: 'enum',
    enum: VoteType,
  })
  type: VoteType;

  @ApiProperty()
  @Column({ nullable: true })
  comment?: string;

  @ManyToOne(() => User)
  user: User;

  @Column()
  userId: string;

  @ManyToOne(() => Project)
  project: Project;

  @Column()
  projectId: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;
}
