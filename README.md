# ApiMovies
API prapared for university classes using Node.js.
 
## Table of contents
* [General info](#general-info)
* [Project structure](#project-structure)
* [Modules used](#modules-used)
* [Endpoints](#endpoints)
* [Authors](#authors)

## General info
This projects allows the user to perform basic CRUD operations in a Movie Database. Additionally you are able to sign up, log in and delete the existing account. When you sign up, an email is sent to you as a confirmation.

## Project structure
![](readmeImages/Structure.jpg) </br>

## Modules used
* NodeJS
* Express
* MongoDB
* Mongoose
* BodyParser
* JsonWebtoken
* Bcrypt
* Nodemailer
* Morgan

## Endpoints
```js
//signing up
router.post('/signup', userController.user_sign_up); 
```
![](readmeImages/UserSignup.jpg) </br>
### Confirmation mail that you get after creating an account.
![](readmeImages/SignupMail.jpg) </br>
```js
//deleting user
router.delete('/:userId', userController.user_delete);
```
![](readmeImages/UserDelete.jpg) </br>
```js
//logging in
router.post('/login', userController.user_login);
```
![](readmeImages/UserLogin.jpg) </br>
```js
//listing all movies
router.get('/', movieController.movies_get_all);
```
![](readmeImages/MoviesGetAll.jpg) </br>
```js
//adding new movie
router.post('/', authorization, movieController.movies_new);
```
![](readmeImages/MovieAdded.jpg) </br>
### You can only add a movie when you are authenticated.
![](readmeImages/MovieAddedBearer.jpg) </br>
```js
// details movie with id
router.get('/:movieId', movieController.movies_get_by_id);
```
![](readmeImages/MoviesGetByID.jpg) </br>
```js
//changing movie with id
router.patch('/:movieId', authorization, movieController.movies_change);
```
![](readmeImages/MovieEdit.jpg) </br>
```js
//deleting movie with id
router.delete('/:movieId', authorization, movieController.movies_delete);
```
![](readmeImages/MoviesDelete.jpg) </br>

## Authors
Created by [@DrelaDominika] and [@PrzemyslawStachurski] - feel free to contact us!
