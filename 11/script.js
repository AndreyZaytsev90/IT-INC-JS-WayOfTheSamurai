let myConsole = {};
console.log(); // console - это объект, log - свойство объекта console. В данном случае log является МЕТОДОМ объекта console, так как log - это функция.
myConsole = {
  name: "Andrey",
  age: 33,
};
myConsole.age = 34;

const myLapTop = {
  name: "Macbook",
  manufacturer: {
    title: "Apple",
    location: "Russia",
    address: "Malaya Gruzinskaya str., 3, Moscow 1905 Street",
  },
  price: 1200,
};

const lapTopWife = {
  name: "Book",
  manufacturer: "ASUS",
  price: 500,
};

const moneyTransfering = {
  from: "Andrey",
  to: "Olga",
  amount: 500,
};
