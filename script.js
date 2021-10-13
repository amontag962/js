"use strict";

// Блок объявления переменных
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте");
let questionOne = prompt("Какой дополнительный тип услуги нужен?");
let priceOne = +prompt("Сколько это будет стоить?");
let questionTwo = prompt("Какой дополнительный тип услуги нужен?");
let priceTwo = +prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice = screenPrice + priceOne + priceTwo;
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

// Блок описания функций
const getRollbackMessage = function (fullPrice) {
  if (fullPrice >= 30000) {
    return "Ваша скидка 10%";
  } else if (30000 > fullPrice && fullPrice > 15000) {
    return "Ваша скидка 5%";
  } else if (15000 >= fullPrice && fullPrice >= 0) {
    return "Скидка не предусмотрена";
  } else if (fullPrice < 0) {
    return "Что то пошло не так";
  }
};
const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};
const getAllServicePrices = function () {
  return priceOne + priceTwo;
};
function getFullPrice() {
  return screenPrice + allServicePrices;
}
function getTitle() {
  title = title.trim();
  title = title[0].toUpperCase() + title.substring(1).toLowerCase();
}
function getServicePercentPrices() {
  Math.ceil(fullPrice - fullPrice * (rollback / 100));
}

// Блок функционала
screens = screens.toLowerCase().split(" ");
let allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();

getTitle();
servicePercentPrice = getServicePercentPrices();

// Блок выводов в консоль и логов (Треш блок)
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(screens.split(" "));
console.log("servicePercentPrice: ", servicePercentPrice);

alert("Расчет стоимости услуг готов");
