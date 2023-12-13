const pipka = require('readline');

const rl = pipka.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите пароль: ", (password) => {
  rl.question("Подтвердите пароль: ", (confirmPassword) => {
    if (password === confirmPassword) {
      console.log("Пароль принят! 👍");
    } else {
      console.log("Пароль не принят. 😔");
    }
    rl.close();
  });
});