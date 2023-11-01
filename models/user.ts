import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    phone: string

    @Column({ nullable: true })
    adress_1: string | null;

    @Column({ nullable: true })
    adress_2: string | null;

    @Column({ nullable: true })
    card_1: string | null;

    @Column({ nullable: true })
    card_2: string | null;
}