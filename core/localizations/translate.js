const ru = require('./ru')
const en = require('./en')

function translate(key, language = 'ru') {
  let langData = {};
  if (language === 'en') {
    langData = en;
  } else if (language === 'ru') {
    langData = ru;
  }
  return langData[key];
}

module.exports = {
	translate
}