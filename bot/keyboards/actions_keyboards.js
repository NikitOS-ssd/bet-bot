const { Markup } = require("telegraf");
const { CreateMarkup } = require("../../core/createMarkup");
const { translate } = require("../../core/localizations/translate");
require("dotenv").config()

const lang = process.env.USER_LANG || 'en'

const SettingsKeyboard = Markup.inlineKeyboard([
  CreateMarkup({ text: translate('languages', lang), callback: 'getLanguages' })
])

module.exports = {
  SettingsKeyboard
}