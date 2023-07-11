const { Markup } = require("telegraf");
const { CreateMarkup } = require("../../core/createMarkup");
const { translate } = require("../../core/localizations/translate");

const lang = process.env.USERS_LANG

const SettingsKeyboard = Markup.inlineKeyboard([
  CreateMarkup({ text: translate('languages', lang), callback: 'getLanguages' })
])

module.exports = {
  SettingsKeyboard
}