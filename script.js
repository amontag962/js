let title = "Авиасеилс";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 5000;
let rollback = 95;
let fullPrice = 20000;
let adaptive = !5;

screens = screens.toLowerCase().split(",");

console.log("Добрый день");
console.log("title: ", typeof title);
console.log("fuulPrice: ", typeof fullPrice);
console.log("adaptive: ", typeof adaptive);
console.log("screens: ", screens.length);
console.log("Стоимость верстки экранов: ", screenPrice, "рублей");
console.log("стоимость разработки сайта: ", fullPrice, "рублей");
console.log("screens: ", screens);
console.log(fullPrice * (rollback / 100));
alert("Расчет стоимости услуг готов");
