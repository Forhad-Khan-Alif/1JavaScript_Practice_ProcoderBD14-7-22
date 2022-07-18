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


