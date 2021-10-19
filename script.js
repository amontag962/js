"use strict";

// Блок объявления переменных---------------------------------------------------------------

let title;
let screens;
let screenPrice;
let adaptive;

let questionOne;
let priceOne;
let questionTwo;
let priceTwo;

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

// Блок описания функций------------------------------------------------------------

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};
// Проверка на число

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "простые");

  while (!isNumber(screenPrice)) {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  }

  adaptive = confirm("Нужен ли адаптив на сайте");
};
// Задает вопросы пользователю

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i == 0) {
      priceOne = prompt("Какой дополнительный тип услуги нужен?", "от");
    } else if (i === 1) {
      priceTwo = prompt("Какой дополнительный тип услуги нужен?", "до");
    }
    sum += +prompt("Сколько это будет стоить?", "3000");
  }
  return sum;
};
// Сумма дополнительных услуг

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

const showTypeOf = function (v) {
  console.log(v, typeof v);
};
// Выводит в консоль типы данных

function getFullPrice(a, b) {
  return a + b;
}
// Получаем сумму цен за экраны и доп услуг

function getTitle() {
  title = title.trim();
  return (title = title[0].toUpperCase() + title.substring(1).toLowerCase());
}
// Функция добавления верхнего регистра для первой буквы

function getServicePercentPrices() {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
}
// Получаем сумму с учетом скидки

// Блок функционала---------------------------------------------------------------------
asking();

screens = screens.toLowerCase().split(" ");
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(+screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices();
title = getTitle();

// Блок выводов в консоль и логов (Треш блок)
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices: ", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(screens);
console.log("servicePercentPrice: ", servicePercentPrice);

alert("Расчет стоимости услуг готов");
