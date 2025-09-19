import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

export enum ProjectStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  VOTING = 'voting',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  IMPLEMENTED = 'implemented',
}

export enum ProjectCategory {
  INFRASTRUCTURE = 'infrastructure',
  EDUCATION = 'education',
  HEALTH = 'health',
  SECURITY = 'security',
  ENVIRONMENT = 'environment',
  CULTURE = 'culture',
  SPORTS = 'sports',
  TRANSPORTATION = 'transportation',
  OTHER = 'other',
}

@Entity('projects')
export class Project {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column('text')
  description: string;

  @ApiProperty({ enum: ProjectCategory })
  @Column({
    type: 'enum',
    enum: ProjectCategory,
  })
  category: ProjectCategory;

  @ApiProperty({ enum: ProjectStatus, default: ProjectStatus.DRAFT })
  @Column({
    type: 'enum',
    enum: ProjectStatus,
    default: ProjectStatus.DRAFT,
  })
  status: ProjectStatus;

  @ApiProperty()
  @Column('decimal', { precision: 15, scale: 2, nullable: true })
  estimatedBudget?: number;

  @ApiProperty()
  @Column({ nullable: true })
  location?: string;

  @ApiProperty()
  @Column('date', { nullable: true })
  votingStartDate?: Date;

  @ApiProperty()
  @Column('date', { nullable: true })
  votingEndDate?: Date;

  @ApiProperty()
  @Column({ default: 0 })
  votesFor: number;

  @ApiProperty()
  @Column({ default: 0 })
  votesAgainst: number;

  @ManyToOne(() => User)
  author: User;

  @Column()
  authorId: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
