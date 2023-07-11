const { Markup } = require("telegraf");
const { CreateMarkup } = require("../../core/createMarkup")
const { translate } = require("../../core/localizations/translate")

const lang = process.env.USER_LANG

const CommandKeyboard = Markup.keyboard([
	[
		CreateMarkup({ text: translate('game', lang), command: '/get_game' }),
		CreateMarkup({ text: translate('sport', lang), command: '/get_sport' }),
	],
	[
		CreateMarkup({ text: translate('profile', lang), command: '/get_profile' }),
		CreateMarkup({ text: translate('settings', lang), command: '/get_settings' }),
	],
	[
		CreateMarkup({ text: translate('balance', lang), command: '/get_balance' }),
		CreateMarkup({ text: translate('bonus', lang), command: '/get_bonus' }),
	],
	[
		CreateMarkup({ text: translate('info', lang), command: '/get_info' }),
	],
])

module.exports = {
	CommandKeyboard
}