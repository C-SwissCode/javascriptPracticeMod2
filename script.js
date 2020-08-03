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

// var john = {
//   fullName: 'John Smith',
//   mass: 100,
//   height: 25,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   }
// };

// var mark = {
//   fullName: 'Mark Holbrook',
//   mass: 150,
//   height: 27,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   }
// };


// if (john.calcBMI() > mark.calcBMI()) {
//   console.log(john.fullName + ' has a higher BMI!');
// } else if (mark.BMI > john.BMI) {
//   console.log(mark.fullName + ' has a higher BMI!');
// } else {
//   console.log('Their BMIs are equal');
// }

// console.log(john.BMI, mark.BMI);

// /********************************
//  * Recursive Functions
//  */

// var a = function b(i) {
//   if (i > 10) {
//     return i;
//   } else {
//     return b(++i);
//   }
// }

// console.log(a(5));

/**********************
 * Loops and iteration
 */


// For loop
//  for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer', false];
// console.log(john[0]);

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// // While loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// continue and break statements

// var john = ['John', 'Smith', 1990, 'designer', false];
// console.log(john[0]);

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }


// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }

// // Looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

/********************************
 * Coding Challenge 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var johnEating = {
  fullName: 'John Jacob Smith',
  subBills: [124, 48, 268, 180, 42],
  tips: [],
  totals: [],
  calcTip: function () {
    var calculatingTheTip = function (subs) {
      var percentage;
      if (subs < 50) {
        percentage = .2;
      } else if (subs >= 50 && subs <= 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      return subs * percentage;
    }

    for (i = 0; i < this.subBills.length; i++) {
      this.tips.push(calculatingTheTip(this.subBills[i]));
      this.totals.push(this.subBills[i] + this.tips[i]);
    }
    return this.tips;
  }
}


console.log(johnEating.subBills);
console.log(johnEating.calcTip());
console.log(johnEating.totals);

var markEating = {
  fullName: 'Mark Levinn',
  subBills: [77, 375, 110, 45],
  tips: [],
  totals: [],
  calcTip: function (subs) {
    var calculatingTheTip = function (subs) {
      var percentage;
      if (subs < 100) {
        percentage = .2;
      } else if (subs >= 100 && subs <= 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }
      return subs * percentage;
    }

    for (i = 0; i < this.subBills.length; i++) {
      this.tips.push(calculatingTheTip(this.subBills[i]));
      this.totals.push(this.subBills[i] + this.tips[i]);
    }
    return this.tips;
  }
}

console.log(markEating.fullName + ' tips:')
console.log(markEating.calcTip());
console.log(markEating.fullName + ' totals:');
console.log(markEating.totals);

var avgTipCalc = function (...tipAmmounts) {
  var tipsArry = tipAmmounts;
  var totalTips = 0;
  for (i = 0; i < tipsArry.length; i++) {
    totalTips += tipsArry[i];
  }
  return totalTips / tipsArry.length;
}

var johnsAvgTip = avgTipCalc(...johnEating.tips);
var marksAvgTip = avgTipCalc(...markEating.tips);

if (johnsAvgTip > marksAvgTip) {
  console.log(johnEating.fullName + ' has a higher avg tip than ' + markEating.fullName);
  console.log('John\'s Avg Tip: ' + johnsAvgTip + '\n' + 'Mark\'s Avg Tip: ' + marksAvgTip);
} else if (marksAvgTip > johnsAvgTip) {
  console.log(markEating.fullName + ' has a higher avg tip than ' + johnEating.fullName);
  console.log('Mark\'s Avg Tip: ' + marksAvgTip + '\n' + 'John\'s Avg Tip: ' + johnsAvgTip);
} else {
  console.log('Their avg tips are the same! wow');
}