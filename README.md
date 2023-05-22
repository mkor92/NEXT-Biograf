# API

## **Auth**

---

### POST

- #### api/login

  Returns a jwt token using cookies and the user's data

  ```ts
  {
      email: string,
      password: string
  }

  ```

- #### api/register

  Creates a new user

  ```ts
  {
      name: string,
      email: string,
      password: string
  }

  ```

### GET

- #### api/logout
  Deletes the cookie from the client's browser
- #### api/user
  Verifies if the jwt cookie is valid and returns the user data

## **Tickets**

---

### POST

- #### api/tickets

  Create tickets. The format of the data in the body should be an array of objects where every object is a ticket. For every ticket in the array a ticket is created on the database.

<!-- prettier-ignore-start -->
  ```ts
  {
  	screening: string;
  	seat: number;
  	email: string;
  }[];
  ```
<!-- prettier-ignore-end -->

### GET

- #### api/tickets/[screeningId]
  GET all tickets for one screening

## **Screenings**

---

### GET

- #### api/movies/[moviesId]/screenings/[screeningId]

  GET one specific screening

- #### api/movies/[movieId]/screenings
  GET all screenings for one movie

### POST

- #### api/movies/[movieId]/screenings
  POST a screening to one movie

## **Movies**

---

### GET

- #### api/movies

  GET all movies

- #### api/movies/[movieId]
  GET one movie

# Tests

## **Description**

---

The tests are _end to end_, and tests the booking system within the whole application. The tests will make sure that it is possible to visit the site and book a ticket both as a logged in user and a guest user. The reason for choosing E2E test is to test as much as possible of the application in a limited number of tests.

The aim of the tests is to see that the main feature of the application is working as expected when a user is using the site. You can divide the users into two main categories - logged in users and guest users. So, it's necessary to have tests that will test the application regarding those two categories of users.

## **Cypress**

---

Cypress is used for the tests. It is a dev-dependecie in package.json and it will be installd when you install all dependencies.

To run the tests:

```
$ npm run cypress
```

## **The tests**

---

### Test 1: visit the site and book a ticket as a guest user

- visit the site and click on movies
- click first movie
- click first screening
- choose number of tickets, seat and click guest button
- type name and email and click continue
- choose payment method and click pay
- recive confirmation of the booking

### Test 2: visit the site, log in and book a ticket

- visit the site and click to log in
- type email and password and click continue
- click on movies
- click first movie
- click first screening
- choose number of tickets, seat and click continue
- choose payment method and click pay
- recive confirmation of the booking

# Deployment
[Webbsida](https://nextjs-bio.fabricioflores.se/)

Webbsidan är deployad med hjälp av vercel. Vercel erbjuder en subdomän för att surfa till våran webbsida men vi har valt att använda en egen domän. 

Instruktioner:
1. Skapa ett konto i [vercel](https://vercel.com/)
2. I vercels dashboard välj skapa ett nytt projekt.
3. Klistar in länken till github repon (vercel kommer att börja bygga sidan).
4. Gå in i projektinställningarna och lägg till nödvändiga enviroment variables för projektet.
5. Välj "redeploy" för att starta om projektet med den uppdaterade datan.
6. (Optional) Lägger till vår anpassade domän i projekts inställningar.

Webbsida:
`https://nextjs-bio.fabricioflores.se/`
