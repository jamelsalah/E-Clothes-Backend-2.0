import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Product } from './product'

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    order: number

    @OneToMany(() => Product, product => product.category)
    products: Product[];
}