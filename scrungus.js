const fetch=require('node-fetch')
const respond=require('./responder')
const http = require('http')
let json = require('./config.json')
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

let ctext={}
// Create an event listener for messages
client.on('message', message => {
  let resp=respond(message.content,ctext)
  if(resp!==''){message.channel.send(resp)}
});
client.login(json.token);
