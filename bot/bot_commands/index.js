async function Start(ctx) {
	const response = `Приветствую, ${ctx.message.from.first_name}!
	${CommandsMessages.StartMessageForUser.message1}`
	
		await ctx.reply(response)
	
		await ctx.replyWithPhoto(`${ClinicObj.image}`)
	
		await ctx.reply(CommandsMessages.StartMessageForUser.message2, Keyboard.startKeyboard)
	
}