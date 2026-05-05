"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "34";
let numariclength = response.length;
console.log(numariclength);
let bookString = '{"name":"Norwegian Wood"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
let inputElement = document.getElementById('id'); //“Trust me, this element is specifically an <input> element.”
inputElement.value;
let inputError = document.getElementById("id");
//inputError.value   //// ❌ Property 'value' does not exist on type 'HTMLElement'
//# sourceMappingURL=typeAssertion.js.map