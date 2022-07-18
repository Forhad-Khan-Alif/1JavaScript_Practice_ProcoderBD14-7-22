// Js Syntax ...........................................................
/*var x = 10;
var y = 5;
z = x+y;*/

// console.log(z); 
// document.getElementById('js_syntax').innerHTML= z;

// Single Line Comment
/* Multiple Line Comment....*/


// Variable_VAR_LET_CONST................................................
/*let x = 90;
let y = 10;
let z = x+y;
document.getElementById('variable_VAR_LET_CONST_ES6').innerHTML= z ;*/

// Js Operators ..........................................................
// let messiAge = 22;
// let otamendiAge = 28;
// let totalAge = messiAge+otamendiAge;

// document.getElementById('Js_operators').innerHTML= totalAge;
// console.log(messiAge);

// let messiAge = 22;
// messiAge +=4;
// document.getElementById('Js_operators').innerHTML= messiAge;

// let nameString = 'Forhad Khan';
// document.getElementById('Js_operators').innerHTML= nameString.length;

// let nameString = 'Forhad Khan';
// document.getElementById('Js_operators').innerHTML= nameString.toUpperCase();

// let nameString = 'Forhad Khan';
// document.getElementById('Js_operators').innerHTML= nameString.substring(0, 6);

// let nameString = 'Forhad Khan';
// document.getElementById('Js_operators').innerHTML= nameString.substring(4);

// let nameString = 'Forhad Khan';
// document.getElementById('Js_operators').innerHTML= nameString.split('');

// let firstName = 'Forhad';
// let lastName = prompt('What is your last name?');
// let age = prompt('What is your age?');
// document.getElementById('Js_operators').innerHTML= firstName + ' ' + lastName + ' ' + 'I am' +  ' ' + age + ' ' + 'Years Old.';
// console.log(firstName + ' ' + lastName + ' ' + age);

// let firstName = prompt('What is your first name?');
// let lastName = prompt('What is your last name?');
// let age = prompt('What is your age?');
// document.getElementById('Js_operators').innerHTML='I am' + ' ' + firstName + ' ' + lastName + '. ' + 'I am' +  ' ' + age + ' ' + 'years old.';
// console.log(firstName + ' ' + lastName + ' ' + age);

// Js Data types ..........................................................

// let phone = 'OnePlus';
// let model = 7;
// let model = 7.7;
// let phone = 'OnePlus' + 7;
// let phone = 7 + 8 + 'OnePlus';
// let phone = 'OnePlus' + 7 + 8;
// let phone = "Hello World. 'My name is Forhad Khan'";
// let phone = 'Hello World. "My name is Forhad Khan"';
// let phone = 7;
// let mobile = 8;

// Js Array...............................................................
// let phone = ['Apple', 'Xiaomi', 'Oneplus'];
// document.getElementById('Js_Data_types').innerHTML= phone;
// console.log(phone);

// let phone = ['Apple', 'Xiaomi', 'Oneplus'];
// document.getElementById('Js_Data_types').innerHTML= phone[1];
// console.log(phone);

// let phone = ['Apple', 'Xiaomi', 'Oneplus'];
// phone[3] = 'Nokia';
// document.getElementById('Js_Data_types').innerHTML= phone[1];
// console.log(phone);

// Js Object..............................................................
// let phone = {
//     model: 'iPhone 13',
//     storage: '164GB',
//     color: 'Black',
// };
// document.getElementById('Js_Data_types').innerHTML= phone;
// console.log(phone);

// let phone = {
//     model: 'iPhone 18',
//     storage: '164GB',
//     color: 'Black',
// };
// document.getElementById('Js_Data_types').innerHTML= phone.model;
// console.log(phone);

// let phone = {
//     model: 'iPhone 18',
//     storage: '164 GB',
//     color: 'Black',
// };
// phone.storage = '256 GB';
// document.getElementById('Js_Data_types').innerHTML= phone.storage;
// console.log(phone);

// Js null, undefined...........................................................
// let phone;
// document.getElementById('Js_Data_types').innerHTML= phone;
// console.log(phone);

// let phone = null;
// document.getElementById('Js_Data_types').innerHTML= phone;
// console.log(phone);

// let phone = null;
// document.getElementById('Js_Data_types').innerHTML= null == undefined;
// console.log(phone);

// let phone = null;
// document.getElementById('Js_Data_types').innerHTML= null === undefined;
// console.log(phone);


// Js Operator precedence......................................................
// Bracket Precedency: (First) {second} [third]
// Ongker Chinho Precedency: / * - + = 

// let nowYear = 2022;
// let forhadBirth = 2002;
// let bdAdultAge = 21;

// let isAdultAge = nowYear - forhadBirth >= bdAdultAge;
// document.getElementById('Js_Operator_precedence').innerHTML= isAdultAge;


// let nowYear = 2022;
// let forhadAge = 21;
// let bdAdultAge = 21;
// let alifAge = 35

// let average = (forhadAge + alifAge) / 2;
// document.getElementById('Js_Operator_precedence').innerHTML= average;


// Js Function.......................................................................

// function name(){
//     console.log('Hello Forhad');
// }
// name();


// function name(firstName, lastName){
//     console.log('Hello ' + firstName + ' ' + lastName);
// }
// name('Forhad', 'Khan');

// function mathFunctionName(number){
//     number + number;
// }
// console.log(mathFunctionName(8));

// function mathFunctionName(number){
//    return number + number;
// }
// console.log(mathFunctionName(8));

// function mathFunctionName(number){
//     return number * number;
//  }
//  console.log(mathFunctionName(8));

// function mathFunctionName(number, number2){
//     return number + number2;
//  }
//  console.log(mathFunctionName(8, 10));


//  let bivinnoStyleFunctionNeyar = function nameOfFunction(){

//  }


// Js Events........................................................................
// function jsEvents(){
//     document.write('Hello Forhad Khan. Js Events');
// }
// jsEvents();

function jsEvents(){
    document.write('Hello Forhad Khan. (onclick) Js Events');
}

function jsEvents_dblclick(){
    document.write('Hello Forhad Khan. (ondblclick) Js Events');
}

function jsEvents_rightclick(){
    document.write('Hello Forhad Khan. (right click, oncontextmenu) Js Events');
}

function jsEvents_mouseHoverEnter(){
    document.write('Hello Forhad Khan. (onmouseenter) Js Events');
}

function jsEvents_mouseHoverOut(){
    document.write('Hello Forhad Khan. (onmouseout) Js Events');
}

function jsEvents_keypress_onlyUseBodyFormTag(){
    document.write('Hello Forhad Khan. (onkeypress) Js Events. Ati Shudhu body, form tag e use hoy.');
}

// onload, onresize, scrool: ai Events gulo shudhu body tage kaj korbe.

// Js Math..............................................................................
// console.log(Math.PI);

// console.log(Math.round(3.49));
// console.log(Math.round(3.50));
// console.log(Math.pow(3,2));
// console.log(Math.pow(8,2));

// console.log(Math.sqrt(144));
// console.log(Math.sqrt(64));

// console.log(Math.abs(-6));

// console.log(Math.ceil(9.5));
// console.log(Math.ceil(9.000000001));

// console.log(Math.floor(10.99));
// console.log(Math.floor(9.000000001));

// console.log(Math.sin(90 * Math.PI/180));
// console.log(Math.sin(0 * Math.PI/180));

// console.log(Math.cos(0 * Math.PI/180));

// console.log(Math.min(1, 9, 10, 59, 99, 100));

// console.log(Math.random());

// Js Math (random)......................................................................
// console.log(Math.random());

// console.log(Math.ceil(Math.random()));

// console.log(Math.random().toFixed(2));

// console.log(Math.random().toFixed(2) * 10);
// console.log(Math.random().toFixed(2) * 10+1);

// Js Math (random) diye app....................
// let upperValue = 6;
// let lowerValue = 1;

// let resultValue = Math.random() * (upperValue - lowerValue);
// console.log(resultValue);

// let upperValue = 6;
// let lowerValue = 1;

// let resultValue = Math.ceil(Math.random() * (upperValue - lowerValue)+1);
// console.log(resultValue);

// let upperValue = 6;
// let lowerValue = 0;

// let resultValue = Math.floor(Math.random() * (upperValue - lowerValue)+1);
// console.log(resultValue);

// Js Boolean........................................................................
// let numOne;
// console.log(Boolean(numOne));

// let numOne = 0;
// console.log(Boolean(numOne));

// let numOne = 9;
// console.log(Boolean(numOne));

// let numOne = 5>9;
// console.log(Boolean(numOne));

// let numOne = 'Forhad';
// console.log(Boolean(numOne));

// let numOne = '';
// console.log(Boolean(numOne));

// Js Conditional statements........................................................

// 6am to 12am "Good Morning" Message
// 12am to 6pm "Good Afternoon" Message
// Otherwise "Good Evening" Message

// let userTime = new Date().getHours();;

// if(userTime >= 6 && userTime < 12){
//     console.log('Good Morning');
// }

// else if (userTime >= 12 && userTime < 18){
//     console.log('Good Afternoon');
// }

// else {
//     console.log('Good Evening');
// }

// ..............................
// let userTime = 17;

// if(userTime >= 6 && userTime < 12){
//     console.log('Good Morning');
// }

// else if (userTime >= 12 && userTime < 18){
//     console.log('Good Afternoon');
// }

// else {
//     console.log('Good Evening');
// }

// Js switch................................................................................
// let x = 1;

// switch(x){
//     case 0:
//         x= "Off";
//     break;
//     case 1:
//         x= "On";
// }
// console.log(x);

// ...........................................
// let dayShow = 1;

// switch(dayShow){
//     case 0:
//         dayShow= "Sunday";
//     break;
//     case 1:
//         dayShow= "Monday";
//     break;
//     case 2:
//         dayShow= "Tuesday";
//     break;        
//     case 3:
//         dayShow= "Wednesday";
//     break;
//     case 4:
//         dayShow= "Thursday";
//     break;
//     case 5:
//     dayShow= "Friday";
//     break;
//     case 6:
//     dayShow= "Saturday";
//     break;
//     default:
//         dayShow = "Not Found"; 
// }

// console.log(dayShow);

// ...............................

// let dayShow = 1;

// switch(dayShow){
//     case 0:
//         dayShow= "Sunday, Its weekend";
//     break;
//     case 1:
//     case 2:     
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         dayShow = "Its office day";
//         break;
//     default:
//         dayShow = "Not Found"; 
// }

// console.log(dayShow);

// .........................................
// let dayShow;

// switch(new Date().getDay()){
//     case 0:
//         dayShow= "Sunday, Its weekend";
//     break;
//     case 1:
//     case 2:     
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         dayShow = "Its office day";
//         break;
//     default:
//         dayShow = "Not Found"; 
// }

// console.log(dayShow);

// .................................
// let dayShow;

// switch(new Date().getDay()){
//     case 0:
//         dayShow= "Sunday, Its weekend";
//     break;
//     case 1:
//     case 2:
//         dayShow = "This is Tuesday";
//         break;
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         dayShow = "Its office day";
//         break;
//     default:
//         dayShow = "Not Found"; 
// }

// console.log(dayShow);


// Js Loops................................................................

// Js For Loop......................
// Increment.......
// for (let i=0; i<6; i++)
//     console.log('Hello Forhad'+i);

// for (let i=0; i<=6; i++)
//     console.log('Hello Forhad',i);

// Decrement.......
// for (let i=6; i>0; i--){
//     console.log('Hello Forhad', i);
//     if (i===4) break;
// }


// const vehicles = ['Bus', 'car', 'Cycle', 'Chopper'];

// for (let i=0; i<vehicles.length; i++){
//     console.log(vehicles[i]);
// }

// Js While Loop.............................................................
// let numVariable = 1;

// while (numVariable <=10){
//     console.log('This is while loop', numVariable);
//     numVariable ++;
// }



// let numVariable = 1;

// while (numVariable <10){
//     console.log('This is while loop', numVariable);
//     numVariable ++;
// }
// document.write("Your loop work fine");


// Js Mistake You Should Avoid............................................


// Js Why You Should Avoid var.................................
// var = function-scoped
// let, const = block-scoped

// var name = 'Forhad Khan';
// let country = 'Bangladesh';

// function newMessage(){
//     console.log('Hello Bangladesh');
// }
// newMessage();

// ...........................

// var name = 'Forhad Khan';
// let country = 'Bangladesh';

// function newMessage(){
//     for(let i=0; i<5; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// newMessage();

// ..........................

// var name = 'Forhad Khan';
// let country = 'Bangladesh';

// function newMessage(){
//     for(var i=0; i<5; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// newMessage();


// var name = 'Alif Babu';
// console.log(name);

// ......................

// var name = 'Forhad Khan';
// let country = 'Bangladesh';

// function newMessage(){
//     for(var i=0; i<5; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// newMessage();


// let country = 'BD';
// console.log(country);