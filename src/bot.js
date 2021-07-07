require('dotenv').config()

// https://www.youtube.com/watch?v=BmKXBVdEV0g
// import a class directly from discord js library
const { Client, MessageEmbed } = require('discord.js')

const client = new Client()

const teams = [
    // BLACKPINK
    [
        ['Jennie', 'https://lastfm.freetls.fastly.net/i/u/300x300/6b81e5616d884c2fcb520ad0871521c9.jpg'],
        ['Lisa', 'https://i.pinimg.com/474x/c8/98/1c/c8981c77687f7c18811401106940dd2f.jpg'],
        ['Jisoo', 'http://images6.fanpop.com/image/photos/41800000/Jisoo-jisoo-blackpink-41864767-300-300.png'],
        ['Rosé', 'https://i.pinimg.com/474x/91/e6/59/91e659c3cd6d80f561f50e428b4997e9.jpg']
    ],
    // TWICE
    [
        ['Sana', 'https://i.pinimg.com/originals/21/5a/87/215a87c8778ca4a5f4320e3c9e8c1503.png'],
        ['Tzuyu', 'https://savannahskinner.com/previous_projects/discography/imgs/headshots/tzuyu.jpg'],
        ['Momo', 'https://channel-korea.com/wp-content/uploads/2019/07/4-Twice-Momo-kprofilescom.jpg'],
        ['Nayeon', 'https://i.pinimg.com/originals/d7/b0/f4/d7b0f4852276568013e5062000e05d47.jpg'],
        ['Mina', 'https://savannahskinner.com/previous_projects/discography/imgs/headshots/mina.jpg'],
        ['Jeongyeon', 'http://images6.fanpop.com/image/photos/43400000/Jeongyeon-jeongyeon-twice-43425603-300-300.jpg'],
        ['Jihyo', 'https://i.pinimg.com/474x/8a/2a/b1/8a2ab1da6f43a6b3124611eb97efe1f7.jpg'],
        ['Dahyun', 'http://images6.fanpop.com/image/photos/43400000/Dahyun-twice-jyp-ent-43468116-300-300.jpg'],
        ['Chaeyoung', 'https://i.pinimg.com/originals/96/93/93/969393b960067b0acfa1484ac9f5cdde.jpg']
    ],

    // // KPOP GROUPS
    // ['BLACKPINK', 'TWICE', 'GOT7', 'BTS', 'STAYC'],
]

//add prefix

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, randomIndex;
  
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
            message.channel.send('Please input a list of elements separated by spaces for me to work with.')
        } else {
            const allElements = message.content.slice(11).trim().replace(/\s+/g, ' ').split(' ')
            const random = Math.floor(Math.random() * allElements.length)
            const randomElement = allElements[random]
            message.channel.send(randomElement + ' is the chosen one.')
        }
    }

    if(message.content.startsWith('#random')) {
        if(message.content === '#random') {
            message.channel.send('Please input a list of players separated by spaces for me to work with.')
        } else {
            let randomTeamSet = teams[Math.floor(Math.random() * teams.length)]
            // console.log(randomTeamSet)
            // const randomTeamElements = randomTeamSet[Math.floor(Math.random() * randomTeamSet.length)]
            let randomTeamElements = shuffle(randomTeamSet)

            let allPlayers = message.content.slice(7).trim().replace(/\s+/g, ' ').split(' ')
            let randomAllPlayers = shuffle(allPlayers)

            let teamOne = randomAllPlayers.slice(0, Math.floor(randomAllPlayers.length / 2)).map((e, idx) => {
                return `${idx + 1}. ${e}\n`
            }).join('')

            let teamTwo = randomAllPlayers.slice(Math.floor(randomAllPlayers.length / 2)).map((e, idx) => {
                return `${idx + 1}. ${e}\n`
            }).join('')

            
            let embedOne = new MessageEmbed()
            .addField(`Team ${randomTeamElements[0][0]}`, teamOne)
            .setThumbnail(randomTeamElements[0][1])
            message.channel.send(embedOne);

            let embedTwo = new MessageEmbed()
            .addField(`Team ${randomTeamElements[1][0]}`, teamTwo)
            .setThumbnail(randomTeamElements[1][1])
            message.channel.send(embedTwo);
        }
    }
})

client.login(process.env.CLASH_BOT_TOKEN)

/* 

BLACKPINK
Jennie
Lisa
Rose
Jisoo

TWICE
Sana
Tzuyu
Momo
Nayeon
Mina
Jeongyeon
Jihyo
Dahyun
Chaeyoung

KPOP GROUPS
BLACKPINK
TWICE
BTS
GOT7

*/