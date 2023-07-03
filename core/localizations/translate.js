import en from './en.json';
import ru from './ru.json';

function translate(key, language) {
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