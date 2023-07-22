/*  2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var pname = "hassan";
var stat = "Welcome ".concat(pname, "! let learn python ");
console.log(stat);
/*3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
var names = "hassan";
console.log(names.toUpperCase());
console.log(names.toLowerCase());
//console.log(names.split("").map
/*Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:*/
console.log("Albert einstein said \"man in free\"");
/*Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.*/
var fname = "albert";
console.log("".concat(fname, " said \"man in free\""));
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
var personname = "\n\t\thassan\n\n";
console.log(personname);
console.log(personname.trim());
/*Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.*/
console.log(2 * 2 * 2);
/*

    You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.*/
console.log("--------------------------------------------\n", 5 + 3, "\n-----------------------------------------");
/*Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.*/
var fav_num = 7;
console.log("fav number is ".concat(fav_num));
/*Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/
var fre_names = ["hassan", "ali", "john", "malik"];
console.log(fre_names[0]);
console.log(fre_names[1]);
console.log(fre_names[2]);
console.log(fre_names[3]);
/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s names*/
console.log("greetings ".concat(fre_names[0]));
console.log("greetings ".concat(fre_names[1]));
console.log("greetings ".concat(fre_names[2]));
console.log("greetings ".concat(fre_names[3]));
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
var transport = ["motorcycle", "train", "bike"];
console.log("i would like to own a ".concat(transport[1]));
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
var guests = ["ali", "kareem", "saleem"];
console.log("".concat(guests[0], " is invited"));
console.log("".concat(guests[1], " is invited"));
console.log("".concat(guests[2], " is invited"));
/*15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/
console.log("not invited ".concat(guests.pop()));
console.log("newly invited".concat(guests.push('huss')));
console.log("new guests list\n");
console.log("".concat(guests[0], " is invited"));
console.log("".concat(guests[1], " is invited"));
console.log("".concat(guests[2], " is invited"));
/*
    More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
console.log("bigger table found now ");
console.log(guests);
guests.splice(0, 0, "akram");
console.log(guests);
guests.splice(2, 0, "akam");
console.log("".concat(guests[0], " is invited"));
console.log("".concat(guests[1], " is invited"));
console.log("".concat(guests[2], " is invited"));
console.log("".concat(guests[3], " is invited"));
console.log("".concat(guests[4], " is invited"));
/*
    Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
console.log("guest not invited ".concat(guests.pop()));
console.log("guest not invited ".concat(guests.pop()));
console.log("guest not invited ".concat(guests.pop()));
console.log("guest invited ".concat(guests[0]));
console.log("guest  invited ".concat(guests[1]));
guests.pop();
guests.pop();
console.log(guests);
var places = ["seoul", "us", "uk", "japan", "china"];
console.log(places);
console.log(places.slice().sort());
console.log(places);
console.log(places.slice().sort().reverse());
console.log(places);
console.log(places.sort().reverse());
console.log(places.sort().reverse());
console.log(places.sort());
console.log(places.sort().reverse());
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner*/
console.log("guests invited ".concat(places.length));
var cities = ["islamabad", "rawalpindi", "multan ", "pindi"];
var obj = {
    name: ' john',
    age: 30,
    address: "jhjhjahs"
};
console.log(obj.address);
/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
console.log(places[7]);
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // This will print: true
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // This will print: false
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // This will print: false
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // This will print: true
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // This will print: true
console.log("Is car === 'toyota'? I predict False.");
console.log(car === 'toyota'); // This will print: false
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // This will print: false
console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota'); // This will print: true
console.log("Is typeof car == 'string'? I predict True.");
console.log(typeof car == 'string'); // This will print: true
console.log("Is typeof car == 'number'? I predict False.");
console.log(typeof car == 'number'); // This will print: false
/*
    More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
var car2 = 'Subaru';
var cars = ['Toyota', 'Honda', 'Ford', 'Subaru'];
// Tests for equality and inequality with strings
console.log(car2 == 'Subaru'); // true
console.log(car2 != 'Toyota'); // true
// Tests using the lower case function
console.log(car2.toLowerCase() == 'subaru'); // true
console.log(car2.toLowerCase() != 'toyota'); // true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num = 10;
console.log(num == 10); // true
console.log(num != 5); // true
console.log(num > 5); // true
console.log(num < 15); // true
console.log(num >= 10); // true
console.log(num <= 15); // true
// Tests using "and" and "or" operators
console.log(num > 5 && num < 15); // true
console.log(num < 5 || num > 15); // false
/*
    Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
var alien_color = 'green';
if (alien_color == 'green') {
    console.log("you earn 5 points");
}
/*
    23 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
var alienColor = 'green'; // Change this to 'yellow' or 'red' to test the other conditions
if (alienColor == 'green') {
    console.log('The player earned 5 points.');
}
else if (alienColor == 'yellow') {
    console.log('The player earned 10 points.');
}
else if (alienColor == 'red') {
    console.log('The player earned 15 points.');
}
else {
    console.log('Invalid alien color.');
}
/*
    Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/
var age = 25; // Change this to test the other conditions
if (age < 2) {
    console.log('The person is a baby.');
}
else if (age >= 2 && age < 4) {
    console.log('The person is a toddler.');
}
else if (age >= 4 && age < 13) {
    console.log('The person is a kid.');
}
else if (age >= 13 && age < 20) {
    console.log('The person is a teenager.');
}
else if (age >= 20 && age < 65) {
    console.log('The person is an adult.');
}
else if (age >= 65) {
    console.log('The person is an elder.');
}
else {
    console.log('Invalid age.');
}
/*
   29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
var favoriteFruits = ['apple', 'banana', 'cherry']; // Change this to your favorite fruits
if (favoriteFruits.indexOf('apple') !== -1) {
    console.log('You really like apples!');
}
if (favoriteFruits.indexOf('banana') !== -1) {
    console.log('You really like bananas!');
}
if (favoriteFruits.indexOf('cherry') !== -1) {
    console.log('You really like cherries!');
}
if (favoriteFruits.indexOf('date') !== -1) {
    console.log('You really like dates!');
}
if (favoriteFruits.indexOf('apple') !== -1) {
    console.log('You really like apples');
}
/* 30
    ello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
var usernames = ["admin", "eric", "john"];
console.log(usernames.length);
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] == 'admin') {
        console.log("hello admin");
    }
    else {
        console.log("hello ".concat(usernames[i]));
    }
}
/**
   31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
usernames.pop();
usernames.pop();
usernames.pop();
if (usernames.length == 0) {
    console.log("we need to add users");
}
/*
32
    Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
var currentUsers = ['John', 'Mike', 'Anna', 'Sarah', 'Liam'];
var newUsers = ['Emma', 'JOHN', 'Eva', 'MIKE', 'Lucas'];
var lowerCaseCurrentUsers = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var user = newUsers_1[_i];
    if (lowerCaseCurrentUsers.indexOf(user.toLowerCase()) > -1) {
        console.log("Username ".concat(user, " has already been used, you need to enter a new username."));
    }
    else {
        console.log("Username ".concat(user, " is available."));
    }
}
/*33.
    Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
    var number = numbers_1[_a];
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(number).concat(ordinalEnding));
}
/*
    Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
  */
var pizzas = ['Pepperoni', 'Margherita', 'Hawaiian'];
for (var _b = 0, pizzas_1 = pizzas; _b < pizzas_1.length; _b++) {
    var pizza = pizzas_1[_b];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
/*35.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */
var animals = ['Dog', 'Cat', 'Rabbit'];
for (var _c = 0, animals_1 = animals; _c < animals_1.length; _c++) {
    var animal = animals_1[_c];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
/*36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
function make_shirt(size, tex) {
    console.log("the shirt is size ".concat(size, " and text is ").concat(tex));
}
make_shirt(8, "new shirts");
/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.  */
function make_shirt2(tex, size) {
    if (size === void 0) { size = "large"; }
    console.log("the shirt is size ".concat(size, " and text is ").concat(tex));
}
make_shirt2("new shirts");
/* 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.  */
function describeCity(city, country) {
    if (country === void 0) { country = 'USA'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describeCity('Karachi', 'Pakistan');
describeCity('New York');
describeCity('London', 'United Kingdom');
/*

   39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
function city_country(city, country) {
    return console.log("".concat(city, ", ").concat(country));
}
city_country('Lahore', 'Pakistan');
city_country('Tokyo', 'Japan');
city_country('Sydney', 'Australia');
var album12 = {
    name2: "hello",
    artist: "hassan"
};
var album13 = {
    name2: "hello",
    artist: "hassan"
};
function make_album2_fun(artist_name, album_title, tracks) {
    var album = { artist_name: artist_name, album_title: album_title };
    if (tracks != undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album2_fun("artist1", "art2");
var album2 = make_album2_fun("a", "b", 2);
console.log(album1);
console.log(album2);
/* 41  Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array */
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var originalMagicians = ["Merlin", "Houdini", "David Copperfield", "Dynamo"];
/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
function makeGreat(magicians) {
    // Modify the array of magicians by adding "the Great" to each magician's name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Call makeGreat() to modify the original array
makeGreat(originalMagicians);
// Show the modified array
console.log("Modified Magicians:");
showMagicians(originalMagicians);
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
function makeGreatCopy(magicians) {
    // Return a new array with "the Great" added to each magician's name
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}
// Original array of magicians
var originalMagicians1 = ["Merlin", "Houdini", "David Copperfield", "Dynamo"];
// Call makeGreatCopy() with a copy of the original array
var greatMagicians2 = makeGreatCopy(originalMagicians1);
// Show the original array (unchanged)
console.log("Original Magicians:");
showMagicians(originalMagicians1);
// Show the new array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians2);
/*User
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time */
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("\n");
}
// Now we can call the function with different numbers of arguments:
makeSandwich("ham", "cheese", "tomato", "lettuce");
makeSandwich("turkey", "bacon");
makeSandwich("peanut butter", "jelly", "banana");
function createCarDetails(manufacturer, details) {
    return __assign({ manufacturer: manufacturer }, details);
}
var car12 = createCarDetails("Tesla", "uu", { color: "red", feature: "autopilot" });
console.log(car12);
