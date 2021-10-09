import { Producto } from '../productos/producto.entity';
import { Plazo } from '../plazos/plazo.entity';
import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Credito {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 2, scale: 5, nullable: true })
  abono_normal: number;

  @Column({ type: 'decimal', precision: 2, scale: 5, nullable: true })
  abono_puntual: number;

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

  @ManyToOne(() => Producto, (producto) => producto.producto_sku)
  @JoinColumn({ name: 'productoSku' })
  producto: Producto;

  @ManyToOne(() => Plazo, (plazo) => plazo.id)
  @JoinColumn({ name: 'plazoId' })
  plazo: Plazo;

  //   @OneToMany(() => Producto, (item) => item.producto_sku)
  //   items: Producto[];
}
// user: User;

// products: Product[];
