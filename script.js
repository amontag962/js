"use strict";

let appData = {
  // Переменные
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    // функциональный блок
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
  // Проверка на число
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  // Задает вопросы пользователю
  asking: function () {
    do {
      appData.title = prompt(
        "Как называется ваш проект?",
        "Калькулятор верстки"
      );
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt("Какие типы экранов нужно разработать?", "Большие");
      } while (appData.isNumber(name));

      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа?", "10000");
      } while (!appData.isNumber(price));
      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let service;
      let price;
      if (i === 0) {
        do {
          service = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
        } while (appData.isNumber(service));

        do {
          price = prompt("Сколько это будет стоить?", "3000");
        } while (!appData.isNumber(price));
        service = i + " " + service;
        appData.services[service] = +price;
      } else if (i === 1) {
        do {
          service = prompt(
            "Какой дополнительный тип услуги нужен?",
            "Отправка форм"
          );
        } while (appData.isNumber(service));
        do {
          price = prompt("Сколько это будет стоить?", "3000");
        } while (!appData.isNumber(price));
        service = i + " " + service;
        appData.services[service] = +price;
      }
    }
    appData.adaptive = confirm("Нужен ли адаптив на сайте");
  },
  // Сложение усллуг внутри объектов
  addPrices: function () {
    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + +item.price;
    }, 0);
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  // Получаем сумму цен за экраны и доп услуг
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  // Получаем сумму с учетом скидки
  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },
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
  // Функция добавления верхнего регистра для первой буквы
  getTitle: function () {
    appData.title = appData.title.trim();
    appData.title =
      appData.title[0].toUpperCase() + appData.title.substring(1).toLowerCase();
  },

  logger: function () {
    // for (let key in appData) {
    //   console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
    // }
    // Вывод в консоль данных
    console.log("Сумма всех доп услуг: ", appData.allServicePrices);
    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log("Общая сумма ", appData.fullPrice);
    console.log("Стоимость верстки: ", appData.servicePercentPrice);
    alert("Расчет стоимости услуг готов");
    console.log(appData.screens);
  },
};

appData.start();
console.log(appData.services);
