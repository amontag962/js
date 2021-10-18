"use strict";

// Блок объявления переменных----------------------------------------------------

let title;
let screens;
let screenPrice;
let adaptive;

let questionOne = prompt("Какой дополнительный тип услуги нужен?", "от");
let priceOne = +prompt("Сколько это будет стоить?", "3000");
let questionTwo = prompt("Какой дополнительный тип услуги нужен?", "вал");
let priceTwo = +prompt("Сколько это будет стоить?", "2000");

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

// Блок описания функций---------------------------------------------------------

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "большие");
  screenPrice = +prompt("Сколько будет стоить данная работа?", "9000");
  adaptive = confirm("Нужен ли адаптив на сайте");
};
// Задает вопросы пользователю

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
// Сумма скидки

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};
// Выводит в консоль типы данных

const getAllServicePrices = function () {
  return priceOne + priceTwo;
};
// Сумма дополнительных услуг

function getFullPrice(a, b) {
  return a + b;
}
// Получаем сумму цен за экраны и доп услуг

function getTitle() {
  title = title.trim();
  title = title[0].toUpperCase() + title.substring(1).toLowerCase();
}
// Функция добавления верхнего регистра для первой буквы

function getServicePercentPrices() {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
}
// Получаем сумму с учетом скидки

// Блок функционала--------------------------------------------------------------
asking();
screens = screens.toLowerCase().split(" ");
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices();
title = getTitle();

// Блок выводов в консоль и логов (Треш блок)
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(screens);
console.log("servicePercentPrice: ", servicePercentPrice);

alert("Расчет стоимости услуг готов");
