// 1.Task: Array Filtering And Mapping
const persons = [
    { name: 'Alice', age: 25, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    { name: 'Charlie', age: 28, gender: 'male' },
    { name: 'Diana', age: 22, gender: 'female' },
    { name: 'Eve', age: 35, gender: 'female' },
    { name: 'Frank', age: 40, gender: 'male' }
  ];

  const males = persons.filter((person) => person.gender !== "female").map(p =>p.name)
  console.log(males)

  // 2.Task: Object Manipulation
const books = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  { title: 'Moby-Dick', author: 'Herman Melville', year: 1851 }
];

const  bookTitles = (books) =>{
  const titles = books.map(book => book.title)
  return titles;
}
const result = bookTitles(books);
console.log(result)

// 4.Task: Sorting Objects
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2019 },
  { make: 'Honda', model: 'Accord', year: 2017 },
  { make: 'Ford', model: 'Mustang', year: 2021 },
  { make: 'Chevrolet', model: 'Malibu', year: 2018 },
  { make: 'Nissan', model: 'Altima', year: 2020 }
];

const sortByYear = (cars) =>{
  const result = cars.sort((a, b) => a.year - b.year);
  return result;
}
const result4 = sortByYear(cars)
console.log(result4)

// 5.Task: Find And Modify
const findByName = (persons , updateName, updateAge) =>{
  const result = persons.find(person => person.name === updateName)
  if(result){
    result.age = updateAge;
  }
}
findByName(persons, 'Alice', 27);
console.log(persons);

// 6.Task: Array Reduction
const numbers = [12, 1, 3, 10, 14, 13, 18, 20, 22, 21, 26, 24];
const sumOfEvenNumbers = (numbers) =>{
  return numbers.reduce((acc, curr) =>  curr%2 === 0 ? acc + curr : acc, 0);
}
const result6 = sumOfEvenNumbers(numbers);
console.log(result6)

// 7.  Task: Leap Year Checker
const leapYear = (year) =>{
  if(year%400 == 0 || year%100 !=0 && year%4 == 0){
    console.log(`${year} is a Happy New Year`);
  }else{
    console.log('Not A Leap Year');
  }
}
leapYear(2000);

// 8. Task: Unique Values
const numbersWithDuplicates = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 5, 9, 10, 8, 6];
const uniqueNumbers = (numbers) =>{
  return [...new Set(numbers)]
}
const result8 = uniqueNumbers(numbersWithDuplicates)
console.log(result8);
// 09. Task: Find Maximum Value:
const maxNumber = (numbers) =>{
 const res = Math.max(...numbers);
 return res
}
const result9 = maxNumber(numbers)
console.log(result9)

