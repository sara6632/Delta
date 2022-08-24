const express = require("express");
const app = express();

app.listen(() => console.log("Start Go Go ...."));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "!"; ///ضع هنا البريفيكس الخاص ببوتك
///Put Here Prefix Of Ur Bot
var status = [`predator vip`, `サラ`];
const botowner = ["979072089929691177"];
let role_id = "1003025175236845598";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`This Bot Maked By : `);
  client.user.setStatus("dnd");
  var time = Math.floor(5000);
  setInterval(function() {
    var lengthesof = status.length;
    var amounter = Math.floor(Math.random() * lengthesof);
    client.user.setActivity(status[amounter], { type: "" });
  }, time);
});





client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;


    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let noargs = new Discord.MessageEmbed()
    .setTitle(`${client.user.username}`)
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`\`📬 : Send To Delta:\`
    
     `);
    if (!args) return message.channel.send(message.author, noargs);
    message.guild.members.cache.filter(mem => mem.roles.cache.has(role_id))
      .forEach(m => {
        if (m.user.bot) return;
        m.send(`${args}\n ${m}
         discord.gg/profficial
         download >> https://www.predatorvip.com/
         SHOP >> https://www.predators-store.com/                
         Telegram >> https://t.me/PreDaTorHax/`)
     
          .then(() => {
            console.log(`I Send To : ${m.user.tag} ✅`);
          })
          .catch(function() {
            console.log(`I Dont Send To : ${m.user.tag} ❌ `);
          });
      });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `📬 : Send To Delta: `
      )
      .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel
      .send(`📬 : Send To Delta:`)

      
  }
});


client.login(process.env.token);
