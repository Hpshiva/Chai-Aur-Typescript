"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders = ["12", "34", "24", "55"];
let currentorder;
for (let order of orders) {
    if (order == "24") {
        // console.log(typeof order)
        currentorder = order;
        console.log(order);
        break;
    }
    currentorder = "11";
}
console.log(currentorder);
//# sourceMappingURL=union_And_any.js.map