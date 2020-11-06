# Formative Style Guide

## Table of Contents

1. Statement
2. Variable
3. Comments
4. Operators
5. Conditional structure - "if"

## 1. Statement
#### Each JS statement must end with a Semicolon.

##### *Bad Example*
var name = document.getElementById('name')

##### *Good Example*
var name = document.getElementById('name');

#### Each JS statement is followed by a line break.

##### *Bad Example*
var name = "Yoobee"; var place = "Wellington";

##### *Good Example*
var name = "Yoobee";
<br> var place = "Wellington";

#### Column limit is 80 characters.
Once the code has reached 80 characters the code must then be line-wrapped.

## 2. Variable
We declare a variable with the keyword "var".
We declare this at the top of the code block.
#### Variable names are written using camelCase.

##### *Bad Example*
nameexamplehere
##### *Good Example*
nameExampleHere

#### Decalre a loop variable before using in the loop instead of inline.

##### *Bad Example*
For (var i = 0; i < 10; i++){};
##### *Good Example*
var i = 0;
<br> for( i = 0; i < 10; i ++){
  <br>x = x + 5<br>
};

## 3. Comments
#### Comments can be created by using either "/* ... */" OR "//"

##### *Bad Example*
/* I am writing a comment.
##### *Good Example*
/* I am writing a comment and making sure it is closed. */ <br>
// I can also write comments like this but do not need it to be closed.

#### Use /* ... */ when commenting with more than one line.

##### *Bad Example*
/* My comment is way too long and now I have to break it up so that the comment can be seen without scrolling left and right. */
##### *Good Example*
/* My comment is now readable <br> without having to <br> scroll left and right. */

#### Use comments on each code block.
This is to help others who look at your code to understand the functions <br> you are trying to implement.

#### Write comments between a series of asterisks above and below the comment line.
(Note: This is only dependent on the Style Guide used for your project.)

###### *Bad Example*
// Display age greater than 20.

###### *Good Example*
(Note: cannot use more than two asterisks in ReadMe File.)<br>
** <br>
// Display age greater than 20
<br> **

## 4. Operators
#### Keep a space before and after any operator.

###### *Bad Example*
var x=y+2;

###### *Good Example*
var x = y + 2;


## 5. Conditional Structure - *If*
#### Use space after the keyword if.
#### Use space after the parenthesis.
#### Use open curly braces at the end of the first line.
#### Use close curly braces in a new line.
#### Keep the "else" keyword on the same line as the closed curly braces of the previous set of brackets.
#### Indent the code as given in the good example.

###### *Bad Example*

if (age>17){
alert('hi');
}
else{alert('hello');}

###### *Good Example*

if (age > 17){
  alert('hi');
<br>} else {<br>
  alert('hello');
<br>};
