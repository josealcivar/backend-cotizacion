import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Plazo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  numero: string;

  @Column({ type: 'text' })
  periodo: string;

  @Column({ type: 'real', nullable: true })
  normal: number;

  @Column({ type: 'real', nullable: true })
  puntual: number;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}
