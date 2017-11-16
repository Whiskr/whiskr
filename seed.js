const db = require("./server/db");
const User = require("./server/db/models/user")


const user = [{
    "email": "catlady@gmail.com",
    "password": "catscatscats",
    "salt": "",
    "googleId":"",
    "animalPreferences": ["cat"],
    "hasYoungChildren": false,
    "otherPetTypes": ["smallfurry"],
    "zipCode": 11372,
    "phoneNumber": "3472441139",
    "petHistory": "I am a human on the outside but a cat on the inside. Recently, one of my cats died and I'm in need of another companion"
}, {
    "email": "animals4ever@gmail.com",
    "password": "doggydog",
    "salt": "",
    "googleId":"",
    "animalPreferences": ["dog", "cat"],
    "hasYoungChildren": true,
    "otherPetTypes":["barnyard"],
    "zipCode": 10003,
    "phoneNumber": "7185034444",
    "petHistory": "I've had the luxury of having chickens in my backyard. I love animals and would like to have an indoor animal to add to my collection."

}, {
    "email": "humansRevil@gmail.com",
    "password":"misanthrope",
    "salt":"",
    "googleId":"",
    "animalPreferences":["dog", "cat", "bird"],
    "hasYoungChildren": false,
    "otherPetTypes":["reptile"],
    "zipCode": 11369,
    "phoneNumber":8001234567,
    "petHistory": "I'm in need for some furry companionship. I'd like more animal friends."

}, {
    "email": "birdsarelife@gmail.com",
    "password": "imlikeabird",
    "salt": "",
    "googleId": "",
    "animalPreferences": ["bird"],
    "hasYoungChildren": true,
    "otherPetTypes":["bird"],
    "zipCode": 11377,
    "phoneNumber": 9176666666,
    "petHistory": "I already own 2 parrots, I'd like more!"

}]

const seed = () =>
Promise.all(user.map(user =>
  User.create(user))
)
.catch(err => {
  console.log("Error in Promise");
  console.log(err.stack);
})





const main = () => {
console.log("Syncing db...");
db.sync({ force: true })
  .then(() => {
    console.log("Seeding database...");
    return seed();
  })
  .catch(err => {
    console.log("Error while seeding");
    console.log(err.stack);
  })
  .then(() => {
    db.close();
  });
};



main();