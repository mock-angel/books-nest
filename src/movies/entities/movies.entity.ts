import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('movies')
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    actor_name: string;

    @Column()
    title: string

    @Column()
    year: number

    @Column()
    rating: number

    @Column()
    genre: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
