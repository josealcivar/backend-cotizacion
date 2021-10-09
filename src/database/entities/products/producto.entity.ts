import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// import { Brand } from './brand.entity';

// @Entity({ name: 'product' })
@Entity()
// @Index(['price', 'stock'])
export class Producto {
  @PrimaryGeneratedColumn()
  @Column({ type: 'varchar', length: 255, unique: true })
  producto_sku: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  pricio: number;

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

  //   @ManyToMany(() => Category, (category) => category.products)
  //   @JoinTable({
  //     name: 'products_has_categories',
  //     joinColumn: {
  //       name: 'product_id',
  //     },
  //     inverseJoinColumn: {
  //       name: 'category_id',
  //     },
  //   })
  //   categories: Category[];
}
