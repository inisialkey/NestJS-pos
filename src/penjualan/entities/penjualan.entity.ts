import { Konsumen } from 'src/konsumen/entities/konsumen.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PenjualanBayar } from './penjualan-bayar.entity';
import { PenjualanItem } from './penjualan-item.entity';

@Entity()
export class Penjualan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  no_faktur: string;

  @Column()
  tanggal: Date;

  @Column()
  total_transaksi: number;

  @Column()
  total_potongan: number;

  @Column()
  total_bayar: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @ManyToOne(() => Konsumen, (kons) => kons.id)
  konsumen: Konsumen;

  @ManyToOne(() => User, (usr) => usr.id)
  user: User;

  @OneToMany(() => PenjualanItem, (pjItem) => pjItem.penjualan, {
    cascade: true,
  })
  item: PenjualanItem[];

  @OneToMany(() => PenjualanBayar, (pjbyr) => pjbyr.penjualan, {
    cascade: true,
  })
  bayar: PenjualanBayar[];
}
