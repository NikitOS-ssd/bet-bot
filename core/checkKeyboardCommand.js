const fs = require("fs")
const path = require('path');
const { Markup } = require("telegraf");
const { CreateMarkup } = require("./createMarkup");
const { translate } = require("./localizations/translate");

const LANG = process.env.USER_LANG || 'en'

const INFO_TEXT = `
OUR MISSION

BWANA BET is here to help your DREAMS COME TRUE! Our mission is to give a chance to every player to BET LIKE A BOSS and allow each and every one the chance to make a life changing BET TODAY and wake up a MILLIONAIRE TOMORROW!

BWANA BET is here to help your DREAMS COME TRUE!

Our mission is to give a chance to every player to BET LIKE A BOSS and allow each and every one the chance to make a life changing BET TODAY and wake up a MILLIONAIRE TOMORROW!

BWANA BET is a proudbly Zambian sports betting company, made for Zambians! Our aim to make every player a BIG BWANA! WIN BIG with our MASSIVE ODDS and MAXIMUM PAYOUT of K2,000,000! ; Join the winning team of Bwana Bet players and enjoy the best that you can get in the world of sports betting. Bet on local and international teams, enjoy early CASHOUT, boosted ODDS and ONLY BWANABET gives you a MASSIVE BONUS of up to 1000% on your tickets! Our aim is to help Zambians achieve their dreamsthrough responsible betting.

BWANA BET is a proudbly Zambian sports betting company, made for Zambia!

Our aim to make every player a BIG BWANA

WIN BIG with our MASSIVE ODDS and MAXIMUM PAYOUT of K2,000,000!
`

function checkKeyboardCommand(message) {
  try {
    if (!message) {
      return "Message not found";
    }

    const jsonData = fs.readFileSync(path.resolve("core/localizations/en.json"), 'utf-8');
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
        return ctx.reply(translate("games_only_text", LANG), Markup.inlineKeyboard([
          CreateMarkup({ text: translate("all_games", LANG), url: "https://bwanabet.com/en/games" })
        ]))
      case 'sport':
        return ctx.reply(translate("sport_only_text", LANG), Markup.inlineKeyboard([
          [CreateMarkup({ text: translate("express", LANG), url: "https://bwanabet.com/en/sport/express" })],
          [CreateMarkup({ text: translate("top_rating", LANG), url: "https://bwanabet.com/en/sport/top" })],
          [CreateMarkup({ text: translate("results", LANG), url: "https://bwanabet.com/en/sport/results" })],
          [CreateMarkup({ text: translate("upcoming_matches", LANG), url: "https://bwanabet.com/en/sport/upcoming" })],
        ]))
      case 'profile':
        return ctx.reply("Ваш профиль")
      case 'settings':
        return ctx.reply(translate("settings_only_text", LANG), Markup.inlineKeyboard([
          CreateMarkup({ text: translate("languages", LANG), callback: "changeLanguage" })
        ]))
      case 'balance':
        return ctx.reply("Ваш баланс")
      case 'bonus':
        return ctx.reply("Ваши бонусы")
      case 'info':
        return ctx.reply(INFO_TEXT)
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