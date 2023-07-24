const { Markup } = require("telegraf");
const { translate } = require("../../core/localizations/translate");
const { SettingsKeyboard } = require("../keyboards/actions_keyboards");
const { CreateMarkup } = require("../../core/createMarkup");

const lang = process.env.USER_LANG || "en"

function changeLanguageAction(ctx) {
  ctx.reply("Choose language: ", Markup.inlineKeyboard([
    CreateMarkup({ text: "English", callback: "setEnglish" }),
    CreateMarkup({ text: "Russian", callback: "setEnglish" }),
    CreateMarkup({ text: "French", callback: "setEnglish" }),
  ]))
}

module.exports = {
  changeLanguageAction,
}