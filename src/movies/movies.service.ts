import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateBookDto } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>,
  ) { }

  create(createMovieDto: CreateMovieDto) {
    return this.moviesRepository.save(createMovieDto);
  }

  findAll() {
    return this.moviesRepository.find();
  }

  findOne(id: number) {
    return this.moviesRepository.findOne({ where: { id } });
  }

  update(id: number, updateMovieDto: UpdateBookDto) {
    return this.moviesRepository.update(id, updateMovieDto);
  }

  remove(id: number) {
    return this.moviesRepository.delete(id);
  }
}
