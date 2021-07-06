require('dotenv').config()

// https://www.youtube.com/watch?v=BmKXBVdEV0g
// import a class directly from discord js library
const { Client, Guild } = require('discord.js')

const client = new Client()
const guild = new Guild()

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
    if(message.content.startsWith('#random')) {
        if(message.content === '#random') {
            // guild.members.fetch()
            //     .then(console.log)
            message.channel.send('Please input a list of players for me to work with.')
        } else {
            const allPlayers = message.content.slice(7).trim().replace(/\s+/g, ' ').split(' ')
            const shuffledPlayers = shuffle(allPlayers)
            message.channel.send("Team 1: " + shuffledPlayers.slice(0,Math.floor(shuffledPlayers.length) / 2).join(' '))
            message.channel.send("Team 2: " + shuffledPlayers.slice(Math.floor(shuffledPlayers.length) / 2).join(' '))
        }
    }
})

client.login(process.env.CLASH_BOT_TOKEN)