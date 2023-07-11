const { Telegraf } = require("telegraf")
require("dotenv").config()
const BotCommand = require('./bot/bot_commands')

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(BotCommand.Start)

bot.launch()

if (bot) {
  console.log("Бот запущен");
}