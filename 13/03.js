const grades = [5, 2, 4, 3, 5]

/*document.write(grades[0], '<br>')
document.write(grades[1], '<br>')
document.write(grades[2], '<br>')
document.write(grades[3], '<br>')
document.write(grades[4], '<br>')*/

for (let i = 0; i < grades.length; i++) {
    document.write(grades[i], '<br>')
}

let book1 = "Война и мир";
let book2 = "Мастер и Маргарита";
let book3 = "Преступление и наказание";
let book4 = "Капитанская дочка";

const books = [book1, book2, book3, book4];

for (let i = 0; i < books.length; i++) {
    document.write(books[i], '<br>')
}

const students = [
    {
        name: 'Andrey',
        age: 33
    },
    {
        name: 'Olga',
        age: 35
    }
]

for (let i = 0; i < students.length; i++) {
    document.write('<br>')
    document.write(students[i] && students[i].name, '<br>')
    document.write('<br>')
}

let shoppingLists = [
    ["Кефир", "Молоко", "Вода"],
    ["Колбаса", "Сыр"],
    ["Шоколад", "Печенье"],
];

for (let i = 0; i < shoppingLists.length; i++) {
    let products = shoppingLists[i]
    document.write('Список ', i + 1, '<br>')
    document.write("------------", '<br>')
    for (let j = 0; j < products.length; j++) {
        let product = products[j]
        document.write(j + 1, ' - ')
        document.write(product, '<br>')
    }
    document.write('<br>')
}





