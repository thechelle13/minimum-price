const findExpensiveFlowers = (flowers, minimumPrice) => {
    const expensive = []

    for ( const flower of flowers) {
        if (flower.price >= minimumPrice) {
            expensive.push(flower)
        }
    }  return expensive
}





// Define the task for a minion
const buyGroceries = (arrayOfFoodToBuy) => {
	// Code to buy groceries with money
	for (const food of arrayOfFoodToBuy) {
		console.log(`I bought ${food}`)
	}
}

// Tell the minion to perform the task with specific information
const items = ["Milk", "Onions", "Ketchup"]
buyGroceries(items)



/*
    Define a function with a parameter. This means the
    function needs a value to be provided.
*/
const createFancyName = (name) => {
    return `Her Majesty, ${name}.`
}

const athena = createFancyName("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)
// output: "Her Majesty, Athena Perez."


const charisse = createFancyName("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)
// output: "Her Majesty, Charisse Ford."


const jenna = createFancyName("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)
// output: "Her Majesty, Jenna Solis."