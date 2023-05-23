// Однорядковий коментар

/* Багаторядковий коментар
   Тут можна додати більше пояснень */

// Створення змінних з різними типами даних
var numberVariable = 10;              // числовий тип даних
var stringVariable = "Hello, world!"; // рядковий тип даних
var booleanVariable = true;           // логічний тип даних
var arrayVariable = [1, 2, 3];        // масив
var objectVariable = {                // об'єкт
    name: "John",
    age: 25,
    city: "New York"
};
var nullVariable = null;              // значення null
var undefinedVariable;                // значення undefined
var symbolVariable = Symbol("mySymbol"); // символьний тип даних
var bigintVariable = BigInt(1234567890); // bigint

// Перевірка типів змінних
console.log(typeof numberVariable);
console.log(typeof stringVariable);
console.log(typeof booleanVariable);
console.log(typeof arrayVariable);
console.log(typeof objectVariable);
console.log(typeof nullVariable);
console.log(typeof undefinedVariable);
console.log(typeof symbolVariable);
console.log(typeof bigintVariable);

// Оператори присвоєння та виведення результату
var a = 5;
var b = 10;
var c = a + b;
console.log(c);

// Логічні та побітові оператори
var x = true;
var y = false;
var logicalAnd = x && y;
var logicalOr = x || y;
var bitwiseAnd = 5 & 3;
var bitwiseOr = 5 | 3;

console.log(logicalAnd);
console.log(logicalOr);
console.log(bitwiseAnd);
console.log(bitwiseOr);
