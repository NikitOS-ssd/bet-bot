const { Telegraf } = require("telegraf")
const BotCommand = require('./bot/bot_commands');
// const BotActions = require("./bot/bot_actions");
const { checkKeyboardCommand, setKeyboardForButtonCommand } = require("./core/checkKeyboardCommand")

require("dotenv").config()

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(BotCommand.Start)

// bot.command('/get_settings', function (ctx) {
//   console.log("Какая-то хуйня полнейшая")
//   ctx.reply("DKK")
// })

bot.on('text', async (ctx) => {
  try {
    console.log("Task tracker")
    const userMessage = ctx.message.text
    const command = checkKeyboardCommand(userMessage)
  
    setKeyboardForButtonCommand(ctx, command)
  } catch {
    ctx.reply("Something went wrong")
  }
})

bot.launch()

if (bot) {
  console.log("Бот запущен");
}