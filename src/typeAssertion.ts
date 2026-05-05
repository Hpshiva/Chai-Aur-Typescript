let response: any = "34";
let numariclength = (response as string).length;
console.log(numariclength);




type book = {
  name: string;
};
let bookString = '{"name":"Norwegian Wood"}';
let bookObject = JSON.parse(bookString) as book;
console.log(bookObject);



let inputElement = document.getElementById("id") as HTMLInputElement; //“Trust me, this element is specifically an <input> element.”
inputElement.value;



let inputError = document.getElementById("id");
//inputError.value   //// ❌ Property 'value' does not exist on type 'HTMLElement'



const data: unknown = "shiva kumar";
//     const strData:string=data   // so here strData... Type 'unknown' is not assignable to type 'string'.
//     strData will give error here so to over come that will do forceing by TYPE_ASSERTION
const strData: string = data as string;
