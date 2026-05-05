"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makingChai(obj) {
    if (!obj) {
        console.log("No chai selected");
        return;
    }
    console.log(obj);
    switch (obj.type) {
        case "ginger":
            console.log("Ginger chai, amount:", obj.amount);
            break;
        case "masala":
            console.log("Masala chai, spice level:", obj.spiceLevel);
            break;
        case "regular":
            console.log("Regular chai, aroma:", obj.aroma);
            break;
    }
}
makingChai({
    type: "regular",
    aroma: 10,
});
//# sourceMappingURL=type.js.map