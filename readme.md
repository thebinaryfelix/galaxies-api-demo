# :milky_way: Galaxies API

## Intro

This is a demo API, created for educational purposes. The main use of this code is to orient [Ironhack's](https://www.ironhack.com/br?utm_source=mateus_felix_github&utm_medium=github_readme&utm_campaign=ironhack_alumni_projects) students with their second project on the Web Development Course.

### :memo: Description

This project consists on a base code for constructing a REST API that provides minimal data about known galaxies in the universe.

#### Objectives

- Show a demo API using a simple server setup with [Express.js](https://expressjs.com/)
- Document its routes and params in [Swagger](https://swagger.io/)
- Create a basic project structure for designing APIs with Javascript

### :rocket: **Run the project**

#### :warning: Requirement

- _You should have **[MongoDB Community Edition ^4.2](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials)** running on your machine_

#### Steps

1. Download or clone this repo
2. Run `npm install` to download project dependencies
3. Run `npm start`
4. Project will run on `http://localhost:3000` by default
5. To populate database, run `npm run seed`.

#### To open the endpoint docs access: `http://localhost:3000/api-docs`

### :hammer: Setup environment

You must create a `.env` file in the root folder and setup the following variables

- `PORT` = number_of_port [default=3000]
- `ENV` = [development || production]
- `DATABASE_URL` = mongodb_database_url

### Final considerations

- This project:
  - is adept to the [Karma conventions for commit messages](http://karma-runner.github.io/4.0/dev/git-commit-msg.html)
  - uses [express-swagger-generator](https://www.npmjs.com/package/express-swagger-generator) to document API endpoints

### :tada: If you like this project, **give it a star** :star2:
