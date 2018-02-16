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
## For Developers:

### Secrets Setup
#### required API keys
  * [PetFinder](https://www.petfinder.com/developers/api-docs)
  * [Google Maps GeoLocator](https://developers.google.com/maps/documentation/geolocation/get-api-key)
  * [Google API OAuth](https://console.developers.google.com/)
  * [Facebook OAuth](https://developers.facebook.com/)

At the root folder touch `secrets.js`



#### `Secrets.js`

```
//  petfinder API_SECRET
const API_SECRET = 'YOUR_SECRET_KEY';

// google geoLocator API_SECRET
const GOOGLE_GEO_API_KEY = 'YOUR_SECRET_KEY';

// google API_SECRET for OAuth
process.env.GOOGLE_CLIENT_ID = ''YOUR_SECRET_KEY''
process.env.GOOGLE_CLIENT_SECRET = 'YOUR_SECRET_KEY'
process.env.GOOGLE_CALLBACK = '/auth/google/callback'

//  facebook API_SECRET
process.env.FACEBOOK_APP_ID = 'YOUR_SECRET_KEY'
process.env.FACEBOOK_APP_SECRET = 'YOUR_SECRET_KEY'
process.env.FACEBOOK_CALLBACK = '/auth/facebook/callback'

module.exports = {
  API_SECRET: API_SECRET,
  GOOGLE_GEO_API_KEY: GOOGLE_GEO_API_KEY
};

```

### Install yarn if you don't have it already
`npm install yarn`

### Sync the two package.json files
Our project has two package.json files, one on the client side and one on the server side.

Use `yarn sync` to install the packages simultaneously

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
