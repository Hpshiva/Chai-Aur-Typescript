function wrapInArray<T>(item: T): T[]{
    return [item]
}

console.log(wrapInArray("shiva"))
console.log(wrapInArray(43))
console.log(wrapInArray({ flavor: "Ginger" }))
 


