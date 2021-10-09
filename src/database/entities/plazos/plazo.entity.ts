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

  @Column({ type: 'string' })
  periodo: string;

  @Column({ type: 'decimal', precision: 2, scale: 5, nullable: true })
  normal: number;

  @Column({ type: 'decimal', precision: 2, scale: 5, nullable: true })
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
