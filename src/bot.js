require('dotenv').config()

// https://www.youtube.com/watch?v=BmKXBVdEV0g
// import a class directly from discord js library
const { Client, MessageEmbed } = require('discord.js')

const client = new Client()

//add prefix

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

client.on('message', (message) => {

    if(message.content.startsWith('#pickrandom')) {
        if(message.content === '#pickrandom') {
            message.channel.send('Please input a list of elements for me to work with.')
        } else {
            const allElements = message.content.slice(11).trim().replace(/\s+/g, ' ').split(' ')
            const random = Math.floor(Math.random() * allElements.length)
            const randomElement = allElements[random]
            message.channel.send(randomElement + ' is the chosen one.')
        }
    }

    if(message.content.startsWith('#random')) {
        if(message.content === '#random') {
            message.channel.send('Please input a list of players for me to work with.')
        } else {
            const allPlayers = message.content.slice(7).trim().replace(/\s+/g, ' ').split(' ')
            const shuffledPlayers = shuffle(allPlayers)
            const embedOne = new MessageEmbed()
            .addField('Team One', '1. Keefe\n2. Keefe\n3. Keefe\n4. Keefe\n5. Keefe')
            .setThumbnail('https://via.placeholder.com/150')
            message.channel.send(embedOne);

            const embedTwo = new MessageEmbed()
            .addField('Team One', '1. Keefe\n2. Keefe\n3. Keefe\n4. Keefe\n5. Keefe')
            .setThumbnail('https://via.placeholder.com/150')
            message.channel.send(embedTwo);

            // message.channel.send("Team 1: " + shuffledPlayers.slice(0,Math.floor(shuffledPlayers.length) / 2).join(' '))
            // message.channel.send("Team 2: " + shuffledPlayers.slice(Math.floor(shuffledPlayers.length) / 2).join(' '))
        }
    }
})

client.login(process.env.CLASH_BOT_TOKEN)

/* 
Blackpink
TWICE
*/