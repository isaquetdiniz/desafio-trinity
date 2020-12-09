import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class AppUser {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    phone!: string;

    @Column()
    street!: string;

    @Column()
    city!: string;

    @Column()
    zipcode!: string;

    @CreateDateColumn({name: "created_At"})
    createdAt!: Date;

    @UpdateDateColumn({name: "updated_At"})
    updatedAt!: Date;
}