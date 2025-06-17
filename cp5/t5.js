function isItFridayToday() {
  const today = new Date();
  const currentDay = today.getDay();
  
  let message;
  let daysUntilFriday;
  
  switch (currentDay) {
    case 5:
      message = "Сегодня пятница!";
      break;
    case 4:
      message = "Завтра пятница!";
      break;
    case 6:
      message = "Пятница была вчера";
      break;
    default:
      daysUntilFriday = (5 - currentDay) % 7;
      const dayWord = getDayWord(daysUntilFriday);
      message = `Пятница будет через ${daysUntilFriday} ${dayWord}`;
  }
  
  console.log(message);
}

function getDayWord(day) {
  
  switch (day) {
    case 1:
      return 'день';
    case 2:
    case 3:
    case 4:
      return 'дня';
    default:
      return 'дней';
  }
}

isItFridayToday();