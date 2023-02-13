# Project 3 - Art Gallery


# Description 
Art Gallery App allows users to view museum collections and create their own online exhibitions. Each curated exhibition will have a unique title, description, viewing dates and a series of artworks chosen from the overall Met Museum collection. Users will be able to view hundred of artworks from the MET API, filtered by department. The website will also featured an index of user-created exhibitions.
To create this app, we take in data using the Met's Open Access API ( https://metmuseum.github.io/ ). This API contains thousands of objects, each representing one piece of individual artwork, ranging from paintings, sculpture and ceramics to costumes, furniture and more. We created an artwork model that matched many of the API's existing fields, such title, description, date period, artist name, dimensions, medium (type of artwork) and the department in which it resides. Once we created individual artworks, we created an index of total artworks through which users could browse. Once a user signs in and creates their profile, they are able to create their own exhibition. Upon submission, a unique link is generated for the user to share with family and friends.
=======
## Back End

## Overview


## User Stories

MVP (V1)
As a user, I want the ability to….

- Sign up
- Sign in
- Change my password
- Sign out
- Create my own gallery of artwork
- View my gallery of artwork
- Update the details of my own - Delete artwork from my gallery
- View galleries others have created
- View an index of all of the galleries of artwork

Bonus (V2)

- View detailed information on individual pieces of art
- Purchase (add to cart) artwork from any gallery, or win thru a bidding system
- Search for artwork by subject, artist, time period, etc
- Inquire about certain galleries thru a form directed to the gallery owner


# Technologies Used
- React Javascript
- SASS
- Express
- Mongodb
- Mongoose



## Entity Relationship Diagrams (ERDs)

![](ERD.png)
## Wireframes
Wireframes were created in Figma and can be viewed at this [link](https://www.figma.com/file/DHUztB6IaUgp0uYTTQKJId/SEI-Project-3?node-id=0%3A1&t=iQouSBqQ90jxXsxJ-1).

### Homepage
<img src="./private/Project_3_wireframes_Page_1.png" />


### Department Index
<img src="./private/Project_3_wireframes_Page_2.png" />

### Department Show
<img src="./private/Project_3_wireframes_Page_3.png" />

### Artwork Show
<img src="./private/Project_3_wireframes_Page_4.png" />

### Exhibition Create
<img src="./private/Project_3_wireframes_Page_5.png" />

### Exhibition Index
<img src="./private/Project_3_wireframes_Page_6.png" />

### Exhibition Show
<img src="./private/Project_3_wireframes_Page_7.png" />

### User Dashboard
<img src="./private/Project_3_wireframes_Page_8.png" />


## Routes
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
