const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
console.log("Scrpit By ExoDia");


client.on("ready", () => {
let channel =     client.channels.get("527212949761163268")
setInterval(function() {
channel.send(`We Are Here`);
}, 30)
})

client.login(process.env.BOT_TOKEN); 
client2.login(process.env.BOT_TOKEN2); 
client3.login(process.env.BOT_TOKEN3); 
client4.login(process.env.BOT_TOKEN4); 
