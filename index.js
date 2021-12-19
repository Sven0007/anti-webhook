const Discord = require("discord.js");
const client = new Discord.Client();

client.on("webhookUpdate", (channel) => {
  channel.fetchWebhooks().then((webhooks) => {
    webhooks.forEach((webhook) => {
      webhook.delete().catch((_) => 0)
    })
  })
})

client.on("message", (message) => {
  if (message.webhookID && message.mentions.everyone) {
    message.channel.delete().catch((_) => 0)
    message.channel.clone().catch((_) => 0)
  } 
})

client.login("Discord-bot-token")
