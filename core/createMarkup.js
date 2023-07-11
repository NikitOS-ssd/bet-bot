const { Markup } = require("telegraf");

const CreateMarkup = ({ text, callback, url, command }) => {
  if (url) {
    return Markup.button.url(text, url);
  } else if (command) {
    return Markup.button.text(text, command);
  } else {
    return Markup.button.callback(text, callback);
  }
};
module.exports = {
  CreateMarkup,
}