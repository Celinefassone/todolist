export { default as Home } from './Home'



/*
const colors = [
  "#ff9494;",
  "#ceedc7;",
  "#d7e3fc;",
  "#fff4ac;",
  "#ffd4b2;",
  "#ffc8dd;",
];

First of all, I want to create an array to store all the colours that I want to use. To do so, I have to
use the colors variables that I created before and make them into classes that I can add and delete with 
the classlist property. Once the array has been created i want to get the element that I want to make 
changes to (.task-box) from the dom by using document.querySelector and make a constant called box. Once
i've done that I can create a for each function on the box which will iterate the array and add the 
classlist color in the position [0]. When another todo element will be created the classlist color in the
position [1] will be added. This process will repeat until the array is over and start again. 


*/