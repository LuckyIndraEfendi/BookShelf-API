const express = require('express');
const router = express.Router();

let dataAnime = [
    {
        name : 'Naruto road to ninja',
        animeId : "naruto-road-to-ninja",
        animeTitle : "Naruto Road to Ninja",
        description : 'Naruto Road to Ninja adalah film animasi Jepang yang dirilis pada 6 Agustus 2012. Film ini merupakan film ke-10 dari',
        genre : ['Action', 'Adventure', 'Comedy'],
        rating : 9.55,
        images : 'https://gogocdn.net/images/anime/N/naruto.jpg'
    },  
    
  {     
   
        name : 'Jigokuraku Season 2',
        animeId : "jigokuraku",
        animeTitle : "Jigokuraku Season 2",
        description : "Gabimaru the Hollow, a ninja of Iwagakure Village known for being cold and emotionless, was set up by his fellow ninja and is now on death row. Tired of killing and betrayal, he wants to die. However, no method of execution works on him because as much as the seemingly apathetic Gabimaru refuses to admit it, he does have a reason to live. He wants to return to his wife, who was the reason why he softened up and failed to be an effective assassin. Thus, he refuses to die.\nAsaemon the Decapitator, a famous executioner, sees this and has a proposal for the ninja. He wants Gabimaru to join an expedition to an island south of Japan in search of the elixir of life in exchange for a full pardon by the Shogunate. However, this island isn't a normal island: it's believed to be Paradise.\nHowever the island is full of mysteries, and the exploring team—consisting of those marked for death—might not be fully prepared to handle them.",
        genre : ["Action","Fantasy","Gore","Historical","Shounen"],
        rating : 8.45,
        images : 'https://gogocdn.net/cover/jigokuraku-1680122271.png'
    }, 
    {     
   
        name : 'Jigokuraku',
        animeId : "jigokuraku",
        animeTitle : "Jigokuraku",
        description : "Gabimaru the Hollow, a ninja of Iwagakure Village known for being cold and emotionless, was set up by his fellow ninja and is now on death row. Tired of killing and betrayal, he wants to die. However, no method of execution works on him because as much as the seemingly apathetic Gabimaru refuses to admit it, he does have a reason to live. He wants to return to his wife, who was the reason why he softened up and failed to be an effective assassin. Thus, he refuses to die.\nAsaemon the Decapitator, a famous executioner, sees this and has a proposal for the ninja. He wants Gabimaru to join an expedition to an island south of Japan in search of the elixir of life in exchange for a full pardon by the Shogunate. However, this island isn't a normal island: it's believed to be Paradise.\nHowever the island is full of mysteries, and the exploring team—consisting of those marked for death—might not be fully prepared to handle them.",
        genre : ["Action","Fantasy","Gore","Historical","Shounen"],
        rating : 8.45,
        images : 'https://gogocdn.net/cover/jigokuraku-1680122271.png'
    },

    {
        name : 'Hello World',
        animeId : "hello-world",
        animeTitle : "Hello World",
        description : "The year is 2027, and the city of Kyoto has undergone tremendous technological advancement. Within the city lives Naomi Katagaki, a socially awkward and introverted boy with a love for books, and Ruri Ichigyou, a girl with a cold personality who is often blunt with people, but shares his love for reading. Despite having similar interests, Naomi is afraid to approach Ruri due to her unfriendly nature.\n\nOne day, as Naomi goes out for a walk, a crimson aurora pierces through the sky for a brief moment before vanishing. Shortly after, he sees a three-legged crow and a mysterious hooded man who reveals himself to be Naomi from 10 years in the future, explaining that he has come to change an imminent tragic event that happens to Ruri shortly after they start dating. Initially taking his words with a grain of salt, present-day Naomi follows his future self's instructions and starts getting closer to Ruri, determined to save her.\n\nHello World focuses on the present Naomi alongside himself from 10 years into the future. With the help of his future self, Naomi begins his preparations to save Ruri. Will he be able to change the future?",
        genre : ['Action', 'Adventure', 'Comedy'],
        rating : 9.55,
        images : 'https://gogocdn.net/cover/hello-world.png'
    },
]

const books = require('../controllers/books')

router.get('/',books.getBooks)
router.post('/',books.bookPost)
router.put('/:id',books.putBooks)
router.delete('/:id',books.deleteBooks)

module.exports = router;