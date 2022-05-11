import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateMovieDto {
    @IsString()
    actor_name: string;

    @IsString()
    title: string;

    @IsNumber()
    year: number;

    @IsNumber()
    rating: number;

    @IsString()
    genre: string;

    @IsString()
    description: string;
}
