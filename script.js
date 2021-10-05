let title = "Авиасеилс";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 5000;
let rollback = 95;
let fuulPrice = 20000;
let adaptive = !5;

console.log("Добрый день");
console.log("title: ", typeof title);
console.log("fuulPrice: ", typeof fuulPrice);
console.log("adaptive: ", typeof adaptive);
console.log("screens: ", screens.length);
console.log("Стоимость верстки экранов: ", screenPrice, "рублей");
console.log("стоимость разработки сайта: ", fuulPrice, "рублей");
console.log("screens: ", screens.toLowerCase());
console.log("screens: ", screens.split());
console.log(fuulPrice * (rollback / 100));
alert("Расчет стоимости услуг готов");
