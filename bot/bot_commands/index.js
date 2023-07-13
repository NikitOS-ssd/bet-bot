const { SettingsKeyboard } = require('../keyboards/actions_keyboards')
const { CommandKeyboard } = require('../keyboards/command_keyboard')
const { translate } = require('../../core/localizations/translate')
require("dotenv").config()

const lang = process.env.USER_LANG

function Start(ctx) {
	try {
		const response = translate("startMessage", lang)

		ctx.reply(response, CommandKeyboard)
	} catch {
		console.log("Something went wrong")
	}
}

function GetSettings(ctx) {
  ctx.reply(translate('settings_text', lang), SettingsKeyboard)
}

module.exports = {
	Start,
	GetSettings
}