const Translate = require('../../core/localizations/translate')

async function Start(ctx) {
	const response = Translate.translate("startMessage", 'ru')
	
		await ctx.reply(response)
}

module.exports = {
	Start
}