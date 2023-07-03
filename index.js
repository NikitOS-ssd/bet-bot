const { Telegraf } = require("telegraf")
require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start()

bot.launch()

if (bot) {
  console.log("Бот запущен");
}