


  <p align="center">A Books API built for <a href="" target="_blank">Mulesoft</a> test </p>

## Api Playground
View the working api docs on <a href="https://movies-mulesoft.herokuapp.com/docs">https://movies-mulesoft.herokuapp.com/docs</a>

## Description

Hosted on <a href="https://movies-mulesoft.herokuapp.com">https://movies-mulesoft.herokuapp.com</a>

Api Accessible from <a href="https://movies-mulesoft.herokuapp.com/api/movies">https://movies-mulesoft.herokuapp.com/api/movies</a>

## API routes:

POST /api/movies  - to create a new movie

GET /api/movies  - returns all movies

GET /api/movies/{id} - returns a movie with the given id

GET /api/by_actor_name/{actor_name} - returns movies with the actor name

PATCH /api/movies/{id} - updates a movie with the given id

DELETE /api/movies/{id} - deletes a movie with the given id

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

This project is [MIT licensed](LICENSE).
