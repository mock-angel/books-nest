import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('books')
export class Book {
    @PrimaryGeneratedColumn()
    id: number;


}
