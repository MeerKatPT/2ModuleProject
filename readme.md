# Portugal News' Hub

<br>

## Description

Plataform to browse, read and post news related to the country of Portugal.

<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter by category of news, log in and sign up.
- **sign up** - As a user I want to sign up on the web page so that I can add browse, read and create news.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite articles** - As a user I want to save articles to read later on at same point.
- **edit user** - As a user I want to be able to edit my profile.
- **result** - As a user I want to see the official Portuguese newspapper, mine and other users' news articles.

<br>

## Server Routes (Back-end):

| **Method** | **Route**               | **Description**                                                          | Request - Body                                           |
| ---------- | ----------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                     | Main page route. Renders home `index` view.                              |                                                          |
| `GET`      | `/login`                | Renders `login` form view.                                               |                                                          |
| `POST`     | `/login`                | Sends Login form data to the server.                                     | { email, password }                                      |
| `GET`      | `/signup`               | Renders `signup` form view.                                              |                                                          |
| `POST`     | `/signup`               | Sends Sign Up info to the server and creates user in the DB.             | { email, password }                                      |
| `GET`      | `/private/edit-profile` | Private route. Renders `edit-profile` form view.                         |                                                          |
| `PUT`      | `/private/edit-profile` | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
| `GET`      | `/private/favorites`    | Private route. Render the `favorites` view.                              |                                                          |
| `POST`     | `/private/favorites/`   | Private route. Adds a new favorite for the current user.                 | { name, articles, category, }                            |

<!-- Do we need a get/post for create news by user?  -->

<!-- Do we need a get/post for categories?  -->

| `POST` | `/private/favorites/:articleId` | Private route. Deletes the existing favorite from the current user. | |
| `GET` | `/articles` | Renders `articles-list` view. | |
| `GET` | `/articles/details/id` | Renders `articles-details` view for the specific article - to read through. | |

## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  /* How to define admin/user */
  type: String,

  favorites: [FavoriteId],
}

```

News model

```javascript
{
title: String,
description: String,
category: String, 
add user id here
}

```

<br>

## API's

<br>

## Packages

<br>

## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)

<br>

## Links

### Git

The url to your repository and to your deployed project

[https://github.com/MeerKatPT/2ModuleProject]()

[Deploy Link]()

<br>

### Slides

The url to your presentation slides

[Slides Link]("TO BE DISPLAYED")

### Contributors

Filipe Guedes- [`<MeerKatPT>`](https://github.com/MeerKatPT) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/filipe--guedes/)

FirstName LastName - [`<github-username>`](https://github.com/person2-username) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/person2-username)
