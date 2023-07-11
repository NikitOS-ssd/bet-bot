const { SettingsKeyboard } = require('../keyboards/actions_keyboards')
const { CommandKeyboard } = require('../keyboards/command_keyboard')
const { translate } = require('../../core/localizations/translate')

const lang = process.env.USER_LANG

function Start(ctx) {
	const response = translate("startMessage", lang)

	ctx.reply(response, CommandKeyboard)
}

function GetSettings(ctx) {
  ctx.reply(translate('settings_text', lang), SettingsKeyboard)
}

module.exports = {
	Start,
	GetSettings
}