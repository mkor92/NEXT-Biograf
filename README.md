# Auth

## POST

- ### api/login

  Returns a jwt token using cookies and the user's data

  ```ts
  {
      email: string,
      password: string
  }

  ```

- ### api/register

  Creates a new user

  ```ts
  {
      name: string,
      email: string,
      password: string
  }

  ```

## GET

- ### api/logout
  Deletes the cookie from the client's browser
- ### api/user
  Verifies if the jwt cookie is valid and returns the user data

# Tickets

## POST

- ### api/tickets
  For creating tickets. The format of the data in the body should be an array of objects where every object is a ticket. For every ticket in the array a ticket is created on the database.
  ```ts
  {
  	screening: string;
  	seat: number;
  	email: string;
  }
  [];
  ```

## GET

- ### api/tickets/[screeningId]
  To get all tickets for one screening

# Screenings

## GET

- ### api/movies/[moviesId]/screenings/[screeningId]

  GET one specific screening

- ### api/movies/[movieId]/screenings
  GET all screenings for one movie

## POST

- ### api/movies/[movieId]/screenings
  POST a screening to one movie

# Movies

## GET

- ### api/movies

  GET all movies

- ### api/movies/[movieId]
  GET one movie
