"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeNarrowing 
function getChai(kind) {
    // if(typeof kind ==="string") return `Kind of Chai is ${kind}`
    // return `Chai Quantity is ${kind}`
    // both are okay here for type narrowing if...else and ternary 
    return typeof kind === "string" ? `Kind of Chai is ${kind}` : `Chai Quantity is ${kind}`;
}
console.log(getChai(23));
// With "?" (optional parameter)
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
console.log(serveChai("Ginger Chai"));
console.log(serveChai()); // if not "?" then typescript give error “Expected 1 argument, but got 0”
//typescript union type
function orderChai(size) {
    if (size === "small")
        return `Ordered Chai size is ${size}`;
    if (size === "medium" || size === "large")
        return `Ordered Chai size is ${size}`;
    return `Order Quantity is - ${size}`;
}
console.log(orderChai("small"));
console.log(orderChai("large"));
console.log(orderChai());
console.log(orderChai(12));
//with class
class regularTea {
    serve() {
        return `Serving Regular Tea`;
    }
}
class masalaTea {
    serve() {
        return `Serving Masala Tea`;
    }
}
function serve(chai) {
    if (chai instanceof masalaTea) {
        return chai.serve();
    }
    return chai.serve();
}
console.log(serve(new regularTea()));
console.log(serve(new masalaTea()));
//# sourceMappingURL=typenarrowing.js.map