"use strict";

// Блок объявления переменных---------------------------------------------------------------

let appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  questionOne: "",
  servicePrice: 0,
  questionTwo: "",
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  // Переменные

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  // Проверка на число

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "простые"
    );

    do {
      appData.screenPrice = prompt(
        "Сколько будет стоить данная работа?",
        "10000"
      );
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте");
  },
  // Задает вопросы пользователю

  getAllServicePrices: function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
      if (i == 0) {
        appData.questionOne = prompt(
          "Какой дополнительный тип услуги нужен?",
          "от"
        );
      } else if (i === 1) {
        appData.questionTwo = prompt(
          "Какой дополнительный тип услуги нужен?",
          "до"
        );
      }
      do {
        appData.servicePrice = prompt("Сколько это будет стоить?", "3000");
      } while (!appData.isNumber(appData.servicePrice));
      sum += parseFloat(appData.servicePrice);
    }
    appData.allServicePrices = sum;
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
    appData.fullPrice = a + b;
  },
  // Получаем сумму цен за экраны и доп услуг

  getTitle: function () {
    appData.title = appData.title.trim();
    appData.title =
      appData.title[0].toUpperCase() + appData.title.substring(1).toLowerCase();
  },
  // Функция добавления верхнего регистра для первой буквы

  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },
  // Получаем сумму с учетом скидки

  logger: function () {
    for (let key in appData) {
      console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
    }
    // Вывод в консоль данных
    console.log("Сумма всех доп услуг: ", appData.allServicePrices);
    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log("Стоимость верстки: ", appData.servicePercentPrice);
    alert("Расчет стоимости услуг готов");
  },
  start: function () {
    appData.asking();
    appData.screens = appData.screens.toLowerCase().split(" ");
    appData.getAllServicePrices();
    appData.getFullPrice(+appData.screenPrice, appData.allServicePrices);
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
  // функциональный блок
};

appData.start();
