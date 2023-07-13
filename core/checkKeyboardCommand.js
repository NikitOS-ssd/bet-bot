const fs = require("fs")
const ru = require("../core/localizations/ru.json")

function checkKeyboardCommand(message) {
  try {
    console.log("Start")
    if (!message) {
      return "Message not found"
    }
    // Читаем содержимое файла .json
    const jsonData = fs.readFileSync(ru, 'utf-8');
    const data = JSON.parse(jsonData);

    // Ищем совпадение по ключу в файле
    if (data.hasOwnProperty(message)) {
      return data[message];
    } else {
      return 'not found';
    }
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return 'not found';
  }
}

module.exports = {
  checkKeyboardCommand,
}