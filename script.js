"use strict";

// Блок объявления переменных---------------------------------------------------------------

let title;
let screens;
let screenPrice;
let adaptive;

let questionOne;
let servicePrice;
let questionTwo;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

// Блок описания функций------------------------------------------------------------

let functions = {
  isNumber: function (num) {
    return isNaN(parseFloat(num)) && isFinite(num);
  },
  // Проверка на число
  asking: function () {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "простые");

    do {
      screenPrice = prompt("Сколько будет стоить данная работа?", "10000");
    } while (functions.isNumber(screenPrice));
    {
    }

    adaptive = confirm("Нужен ли адаптив на сайте");
  },
  // Задает вопросы пользователю
  getAllServicePrices: function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      if (i == 0) {
        questionOne = prompt("Какой дополнительный тип услуги нужен?", "от");
      } else if (i === 1) {
        questionTwo = prompt("Какой дополнительный тип услуги нужен?", "до");
      }
      do {
        servicePrice = prompt("Сколько это будет стоить?", "3000");
      } while (functions.isNumber(servicePrice));
      sum += parseFloat(servicePrice);
    }
    return sum;
  },
  // Сумма дополнительных услуг
  getRollbackMessage: function (fullPrice) {
    if (fullPrice >= 30000) {
      return "Ваша скидка 10%";
    } else if (30000 > fullPrice && fullPrice > 15000) {
      return "Ваша скидка 5%";
    } else if (15000 >= fullPrice && fullPrice >= 0) {
      return "Скидка не предусмотрена";
    } else if (fullPrice < 0) {
      return "Что то пошло не так";
    }
  },
  getFullPrice: function (a, b) {
    return a + b;
  },
  // Получаем сумму цен за экраны и доп услуг
  getTitle: function () {
    title = title.trim();
    return (title = title[0].toUpperCase() + title.substring(1).toLowerCase());
  },
  // Функция добавления верхнего регистра для первой буквы
  getServicePercentPrices: function () {
    return Math.ceil(fullPrice - fullPrice * (rollback / 100));
  },
  // Получаем сумму с учетом скидки
  start: function () {
    functions.asking();
    screens = screens.toLowerCase().split(" ");
    allServicePrices = functions.getAllServicePrices();
    fullPrice = functions.getFullPrice(+screenPrice, allServicePrices);
    servicePercentPrice = functions.getServicePercentPrices();
    title = functions.getTitle();
    console.log("Сумма всех доп услуг: ", allServicePrices);
    console.log(functions.getRollbackMessage(fullPrice));
    console.log("Стоимость верстки: ", servicePercentPrice);
    alert("Расчет стоимости услуг готов");
  },
};

functions.start();
