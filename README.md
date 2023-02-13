##Project 3 - Art Gallery
#Back End

#Overview

# User Stories

MVP (V1)
As a user, I want the ability to….

- Sign up
- Sign in
- Change my password
- Sign out
- Create my own gallery of artwork
- View my gallery of artwork
- Update the details of my own gallery
- Delete artwork from my gallery
- View galleries others have created
- View an index of all of the galleries of artwork

Bonus (V2)

- View detailed information on individual pieces of art
- Purchase (add to cart) artwork from any gallery, or win thru a bidding system
- Search for artwork by subject, artist, time period, etc
- Inquire about certain galleries thru a form directed to the gallery owner

# Entity Relationship Diagrams (ERDs)

# Wireframes



### Users

###### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |


### Artworks

###### Routes Table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/artworks`            | `artworks#index`  |
| GET    | `/artworks/:id`        | `artworks#show`   |

### Exhibitions

###### Routes Table

| Verb   | URI Pattern             | Controller#Action        |
|--------|-------------------------|--------------------------|
| GET    | `/exhibitions`          | `exhibitions#index`      |
| GET    | `/exhibitions/:Id`      | `exhibitions#show`       |
| POST   | `/exhibitions/:Id`      | `exhibitions#create`     |
| PATCH  | `/exhibitions/:Id`      | `exhibitions#update`     |
| DELETE | `/exhibitions/:Id`      | `exhibitions#delete`     |
