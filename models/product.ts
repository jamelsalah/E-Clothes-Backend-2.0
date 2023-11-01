import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Category } from "./category"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    category_id: number

    @Column()
    category_name: string

    @Column({ nullable: true })
    sub_category: string | null

    @Column({ nullable: true })
    brand: string | null

    @Column()
    gender: boolean

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    promo: number

    @Column()
    thumb_url: string

    @Column({ nullable: true })
    images_url: string | null

    @Column({ type: 'text', nullable: true })
    sizes: string | null;

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn({ name: 'category_id' })
    category: Category;
}