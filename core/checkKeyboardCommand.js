const fs = require("fs")
const path = require('path');
const { Markup } = require("telegraf");
const { CreateMarkup } = require("./createMarkup");
const { translate } = require("./localizations/translate");

function checkKeyboardCommand(message) {
  try {
    if (!message) {
      return "Message not found";
    }

    const jsonData = fs.readFileSync(path.resolve("core/localizations/ru.json"), 'utf-8');
    const data = JSON.parse(jsonData);

    const result = Object.keys(data).find(key => data[key] === message);
    if (result) {
      return result;
    } else {
      return 'not found';
    }
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return 'not found';
  }
}

function setKeyboardForButtonCommand(ctx, settingsName) {
  console.log(settingsName)
  try {
    switch (settingsName) {
      case 'game':
        return ctx.reply("Игры: ", Markup.inlineKeyboard([
          CreateMarkup({ text: "Все игры", url: "https://bwanabet.com/en/games" })
        ]))
      case 'sport':
        return ctx.reply("Спорт: ", Markup.inlineKeyboard([
          [CreateMarkup({ text: "Экспресс", url: "https://bwanabet.com/en/sport/express" })],
          [CreateMarkup({ text: "Топ", url: "https://bwanabet.com/en/sport/top" })],
          [CreateMarkup({ text: "Результаты", url: "https://bwanabet.com/en/sport/results" })],
          [CreateMarkup({ text: "Ближайшие матчи", url: "https://bwanabet.com/en/sport/upcoming" })],
        ]))
      case 'profile':
        return ctx.reply("Ваш профиль")
      case 'settings':
        return ctx.reply("Настройки", Markup.inlineKeyboard([
          CreateMarkup({ text: translate("languages", 'ru'), callback: "changeLanguage" })
        ]))
      case 'balance':
        return ctx.reply("Ваш баланс")
      case 'bonus':
        return ctx.reply("Ваши бонусы")
      case 'info':
        return ctx.reply("Информация")
      default:
        return ctx.reply("None. 404")
    }
  } catch (error) {
    ctx.reply("Not foung")
  }
}

module.exports = {
  checkKeyboardCommand,
  setKeyboardForButtonCommand
}