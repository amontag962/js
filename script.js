// Переменные
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = +prompt("Сколько будут стоить услуги посредника?");
let adaptive = confirm("Нужен ли адаптив на сайте");
let questionOne = prompt("Какой дополнительный тип услуги нужен?");
let priceOne = +prompt("Сколько это будет стоить?");
let questionTwo = prompt("Какой дополнительный тип услуги нужен?");
let priceTwo = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + priceOne + priceTwo;
let servicePercentPrice = Math.ceil(fullPrice - rollback);

// Вывод данных в консоль
console.log("servicePercentPrice: ", servicePercentPrice);
screens = screens.toLowerCase().split(" ");

console.log("Добрый день");
console.log("Стоимость верстки экранов: ", screenPrice, "рублей");
console.log("стоимость разработки сайта: ", fullPrice, "рублей");
console.log("screens: ", screens);
alert("Расчет стоимости услуг готов");

if (fullPrice > 30000) {
  console.log("Ваша скидка 10%");
} else if (30000 >= fullPrice > 15000) {
  console.log("Ваша скидка 5%");
} else if (15000 >= fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}
