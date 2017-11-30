# Whiskr

### Tinder styled pet adoption web app

### Description: 
This is a tinder styled app that makes pet adoption an easier process. Using real pets from the PETFINDER API, you can swipe left or right on pets you might potentially want to adopt. However, since pets cannot swipe back, a shelter will check to see if you are the right fit. 

[https://whiskrapp.herokuapp.com](https://whiskrapp.herokuapp.com)

## Developers:
* Shelby Rackley
* Shannon Kendall
* Shiratie Prodhan
* Keri Miller 

---
### For Developers:

### PetFinder API
Our app requires the PetFinder API. You need to register as a developer to get a key. [Petfinder](https://www.petfinder.com/developers/api-docs)
After you get your key, `touch secrets.js` and enter the following

```
const API_SECRET = "Your_Secret_Here";

module.exports = API_SECRET;

```

### Install yarn if you don't have it already
`npm install yarn`
### Sync the two package.json files
Our project has two package.json files, one on the client side and one on the server side.

Use the `yarn` to install the packages simultaneously

### Create and Seed the database
In your terminal, create the database with the command `createdb whiskr`

Next, seed the database with `yarn seed`

### Run the app
After you install the packages, run `yarn dev` to start up the app and navigate to `localhost:3000`

## Using the App
To use the app, either login or sign up. You can also use one of our seeded users. Our favorite is:
```
Email: catlady@gmail.com
Password: catscatscats

```
From there, you will be redirected to the PetTypes page. Choose the type of pet you'd like to adopt. The categories are: cats, dogs, reptiles, barnyard, horse, small and furry, rabbit, birds.

Swipe left to dismiss a pet and swipe right to add it to your matches.

On mobile view, you can click the pet card to expand the profile.
