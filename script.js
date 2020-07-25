/*************************
 * CODING CHALLENGE 1
 */

/*
 Mark and John are trying to compare their BMI, which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters).

 1. Store Mark's and John's mass and height in variables
 2. Calculate both their BMIs
 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

 massMark = 150;
 massJohn = 100;
 heightMark = 27;
 heightJohn = 25;
*/

// var massMark, massJohn, heightMark, heightJohn;
// var BMI_Mark, BMI_John, isMarksGreater;

// massMark = 150;
// massJohn = 100;
// heightMark = 27;
// heightJohn = 25;

// BMI_Mark = massMark / heightMark ** 2;
// BMI_John = massJohn / heightJohn ** 2;
// console.log(BMI_Mark, BMI_John);

// isMarksGreater = BMI_Mark > BMI_John;
// // console.log("Is Mark's BMI higher than John's?" + ' ' + isMarksGreater);

// if (isMarksGreater) {
//   console.log('Mark\'s BMI is higher than John\'s BMI.');
// } else {
//   console.log('Actually John has the higher BMI!!!');
// }

/**************************
 * Coding Challenge 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120, and 103 points, while Mike's team scored 116, 94, and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins on average (highest average score), and print the winner to the console.
Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw.

4. EXTRA: Marry also plays basketball, and her team scored 97, 134, and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decisioin.
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

// var avgJohn, avgMike;

// avgJohn = (89 + 120 + 103) / 3;
// avgMike = (116 + 94 + 123) / 3;
// avgMarry = (97 + 134 + 105) / 3;


// if (avgJohn === avgMike) {
//   console.log('John and Mike tie both with an avg score of ' + avgJohn);
// } else if (avgJohn > avgMike) {
//   console.log('John wins with an avg of ' + avgJohn + '! Mike scored ' + avgMike);
// } else {
//   console.log('Mike wins with an avg of ' + avgMike + '! John scored an avg of ' + avgJohn);
// }

// if (avgJohn === avgMike && avgJohn === avgMarry) {
//   console.log('They all tie with an avg of ' + avgJohn);
// } else if (avgJohn > avgMike && avgJohn > avgMarry) {
//   console.log('John wins with an avg of ' + avgJohn + '! Mike scored a ' + avgMike + ' and Marry scored a ' + avgMarry);
// } else if (avgMarry > avgJohn && avgMarry > avgMike) {
//   console.log('Marry wins! \nMike: ' + avgMike + '\nJohn: ' + avgJohn + '\nMarry: ' + avgMarry);
// } else if (avgMike > avgJohn && avgMike > avgMarry) {
//   console.log('Mike wins!\nMike: ' + avgMike + '\nJohn: ' + avgJohn + '\nMarry: ' + avgMarry);
// } else if (avgJohn === avgMike && avgJohn > avgMarry) {
//   console.log('Both John and Mike tied for 1st and both beat Marry!');
// } else if (avgJohn === avgMarry && avgJohn > avgMike) {
//   console.log('Both John and Marry beat Mike!');
// } else if (avgMike === avgMarry && avgMike > avgJohn) {
//   console.log('Both Mike and Marry beat John!');
// } else {
//   console.log('somehthing wen\'t wrong');
// }

// Try it another way using boolean variables and terciary operators

// avgJohn = (116 + 94 + 123) / 3;
// avgMike = (116 + 94 + 123) / 3;
// avgMarry = (116 + 94 + 123) / 3;

// var isJohnWinner, isMikeWinner, isMarryWinner;
// var isJohnAndMikeWinners, isJohnAndMarryWinners, isMikeAndMarryWinners;

// isJohnWinner = avgJohn > avgMike && avgJohn > avgMarry ? true : false;
// isMikeWinner = avgMike > avgJohn && avgMike > avgMarry ? true : false;
// isMarryWinner = avgMarry > avgJohn && avgMarry > avgMike;
// is3WayTie = avgMike === avgJohn && avgJohn === avgMarry ? true : false;

// isJohnAndMikeWinners = avgJohn === avgMike && avgJohn > avgMarry ? true : false;

// isJohnAndMarryWinners = avgJohn === avgMarry && avgJohn > avgMike ? true : false;

// isMikeAndMarryWinners = avgMike === avgMarry && avgMike > avgJohn ? true : false;

// switch (true) {
//   case isJohnWinner:
//     console.log('John wins with an avg of ' + avgJohn + '! Mike scored a ' + avgMike + ' and Marry scored a ' + avgMarry);
//     break;
//   case isMikeWinner:
//     console.log('Mike wins!\nMike: ' + avgMike + '\nJohn: ' + avgJohn + '\nMarry: ' + avgMarry);
//     break;
//   case isMarryWinner:
//     console.log('Marry wins! \nMike: ' + avgMike + '\nJohn: ' + avgJohn + '\nMarry: ' + avgMarry);
//     break;
//   case isJohnAndMikeWinners:
//     console.log('Both John and Mike tied for 1st and both beat Marry!');
//     break;
//   case isJohnAndMarryWinners:
//     console.log('Both John and Marry beat Mike!');
//     break;
//   case isMikeAndMarryWinners:
//     console.log('Both John and Marry beat Mike!');
//     break;
//   case is3WayTie:
//     console.log('everyone tied');
//     break;
//   default:
//     console.log('Something wen\'t wrong!');
// }

/* Practice function expression */

// var whatDoYouDo = function (job, firstName) {
//   switch (job) {
//     case 'teacher':
//       return firstName + ' teaches kids how to code';
//     case 'driver':
//       return firstName + ' drives kids to school';
//     case 'designer':
//       return firstName + ' designs beutiful websites';
//     default:
//       return firstName + ' does something else';
//   }
// }

// var jobDescriptionTaylor = whatDoYouDo('driver', 'Taylor');
// console.log(jobDescriptionTaylor);


/*********************
 * Arrays
 */

// Initialize new array

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[1] + names[2]);
// console.log(names);
// console.log(names.length);

// // Mutate array data

// names[1] = 'Ben';
// names[names.length] = 'Marry';
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];

// console.log(john[4]);

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// console.log(john);

// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// console.log(john.indexOf('designer')); //returns -1 since it does not exist in the array, this is a good method for testing if an element exists within an array.

// var isDesigne = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigne);

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// Calculation Functions

// tipCalc = function (bill) {
//   var percentage;
//   if (bill < 50) {
//     percentage = .2;
//   } else if (bill >= 50 && bill <= 200) {
//     percentage = .15;
//   } else {
//     percentage = .1;
//   }
//   return bill * percentage;
// }

// var totalCalc = function (subtotal, tip) {
//   return subtotal + tip;
// }

// // Arrays

// var subsJohn = [124, 48, 268];

// var tips = [];
// var totalBills = [];

// // 2 ways to add the values to the arrays
// tips.push(tipCalc(subsJohn[0]), tipCalc(subsJohn[1]), tipCalc(subsJohn[2]));
// tips = [tipCalc(subsJohn[0]),
//   tipCalc(subsJohn[1]),
//   tipCalc(subsJohn[2])
// ];

// totalBills.push(totalCalc(subsJohn[0], tips[0]), totalCalc(subsJohn[1], tips[1]), totalCalc(subsJohn[2], tips[2]));
// totalBills = [subsJohn[0] + tips[0],
//   subsJohn[1] + tips[1],
//   subsJohn[2] + tips[2]
// ];

// console.log(tips);
// console.log(totalBills);


/**********************************
 * Objects and properties
 */

// Object literal
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false
// };
// console.log(john.family);
// console.log(john['lastName']);

// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john.job)
// console.log(john.isMarried);

// // new Object syntax

// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1989;
// jane['lastName'] = 'Johnson';
// console.log(jane);

/************************************
 * Objects and methods
 */

// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function () {
//     this.age = 2020 - this.birthYear;
//   }
// };

// john.calcAge();
// console.log(john.age);


/*************************
 * CODING CHALLENGE 1
 */

/*
 Mark and John are trying to compare their BMI, which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters).

 1. Store Mark's and John's mass and height in variables
 2. Calculate both their BMIs
 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

 massMark = 150;
 massJohn = 100;
 heightMark = 27;
 heightJohn = 25;
*/

// var massMark, massJohn, heightMark, heightJohn;
// var BMI_Mark, BMI_John, isMarksGreater;

// massMark = 150;
// massJohn = 100;
// heightMark = 27;
// heightJohn = 25;

// BMI_Mark = massMark / heightMark ** 2;
// BMI_John = massJohn / heightJohn ** 2;
// console.log(BMI_Mark, BMI_John);

// isMarksGreater = BMI_Mark > BMI_John;
// // console.log("Is Mark's BMI higher than John's?" + ' ' + isMarksGreater);

// if (isMarksGreater) {
//   console.log('Mark\'s BMI is higher than John\'s BMI.');
// } else {
//   console.log('Actually John has the higher BMI!!!');
// }

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// Creating the objects

var john = {
  fullName: 'John Smith',
  mass: 100,
  height: 25,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
};

var mark = {
  fullName: 'Mark Holbrook',
  mass: 150,
  height: 27,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
};


if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + ' has a higher BMI!');
} else if (mark.BMI > john.BMI) {
  console.log(mark.fullName + ' has a higher BMI!');
} else {
  console.log('Their BMIs are equal');
}

console.log(john.BMI, mark.BMI);