//  ANY
let value: any
value = "chai"
value = [1, 2, 4, 4]
value = 3.2
value.toUpperCase()  // no error at compile_time but there is error at runtime
//value.toUpperCase is not a function


// UNKOWN
let newvalue: unknown
newvalue = "chai"
newvalue=[1,2,3,4,3]
newvalue = 34
//newvalue.toUpperCase() // will get error here only at compile_time 
//to over come this will use type guards

if (typeof newvalue === "string") console.log(newvalue.toUpperCase()); 
console.log(typeof newvalue)




