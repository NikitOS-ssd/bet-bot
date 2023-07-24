const { Markup } = require("telegraf");
const { CreateMarkup } = require("../../core/createMarkup")
const { translate } = require("../../core/localizations/translate")
require("dotenv").config()

const lang = process.env.USER_LANG || 'en'

const CommandKeyboard = Markup.keyboard([
	[
		CreateMarkup({ text: translate('game', lang), callback: '/get_game' }),
		CreateMarkup({ text: translate('sport', lang), callback: '/get_sport' }),
	],
	[
		// CreateMarkup({ text: translate('profile', lang), callback: '/get_profile' }),
		CreateMarkup({ text: translate('settings', lang), callback: '/get_settings' }),
	],
	[
		// CreateMarkup({ text: translate('balance', lang), callback: '/get_balance' }),
		// CreateMarkup({ text: translate('bonus', lang), callback: '/get_bonus' }),
	],
	[
		CreateMarkup({ text: translate('info', lang), callback: '/get_info' }),
	],
])

module.exports = {
	CommandKeyboard
}