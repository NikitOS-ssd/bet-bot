const { Markup } = require("telegraf");

const CreateMarkup = ({text, callback, url}) => url ? Markup.button.url(text, url) : Markup.button.callback(text, callback)

module.exports = {
  CreateMarkup,
}