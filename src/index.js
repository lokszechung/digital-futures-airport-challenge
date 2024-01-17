import Airport from "./airport.js"
import Plane from "./plane.js"
import Weather from "./weather.js"

// Initialise an airport
console.log(">> Create an airport")
const airport = new Airport()
console.log(airport)
console.log("The airport has no planes")
console.log("planes: ", airport.planes)

console.log("")

// Initialise a plane
console.log(">> Create a plane")
const plane1 = new Plane('plane1')
console.log(plane1)

console.log("")

//As an Air Traffic Contoller, I want to tell a plane to land at an airport, so that passengers can disembark
console.log(">> Instruct plane1 to land at the airport")
airport.land(plane1)
console.log("planes:", airport.planes)

console.log("")

// As an Air Traffic Contoller, I want to tell a plane to take off from an airport, so that it can be on its way to the next destination and make room for consequent planes
console.log(">> Instruct plane1 to take off from the airport")
airport.takeOff(plane1)
console.log("planes:", airport.planes)

console.log("")

// As an Air Traffic Contoller, I want to know when the airport is at capacity, so that the airport is not overfilled with planes
console.log(">> Checking if airport is at capacity")
console.log("Capacity of airport is set to 5 by default")
console.log("capacity:", airport.capacity)
console.log("Check if airport is at full capacity")
console.log(`${airport.planes.length} planes at airport: `, airport.planes)
console.log(`Airport is${airport.isAtFullCapacity() ? "" : " not"} at full capacity`)

console.log("")

//As an Air Traffic Contoller, I want to tell a plane to land only if is not full, so as to control the flow of planes at the airport
console.log("Let's fill the airport up")
const planes = ['plane2', 'plane3', 'plane4', 'plane5'].map(plane => new Plane(plane))
airport.land(plane1)
planes.forEach(plane => airport.land(plane))
console.log(`${airport.planes.length} planes at airport: `, airport.planes)
console.log(`Airport is${airport.isAtFullCapacity() ? "" : "not"} at full capacity`)

console.log("")

console.log(">> When the airport is full, a new plane cannot land at the airport")
const plane6 = new Plane('plane6')
console.log("Trying to instruct plane6 to land...")
airport.land(plane6)
console.log(`Still only ${airport.planes.length} planes at airport, and no plane6`)
console.log(airport.planes)

console.log("")

console.log(">> When the airport is not full, a new plane can land at the airport")
console.log("Let's get some planes to take off to make some space")
airport.takeOff(planes[2])
airport.takeOff(planes[3])
console.log(`${airport.planes.length} planes at airport: `, airport.planes)
console.log(`Airport is${airport.isAtFullCapacity() ? "" : " not"} at full capacity`)
console.log("Instruct plane6 to land...")
airport.land(plane6)
console.log(`Now there are ${airport.planes.length} planes at airport, including plane6`)
console.log(airport.planes)

console.log("")

// As an Air Traffic Contoller, I want to tell a plane to land at an airport if it is not already at the airport, so there aren't any errors
console.log(">> If a plane is already at the airport, it cannot be instructed to land again")
console.log(`${airport.planes.length} planes currently at airport:`, airport.planes)
console.log("Plane6 is already at the airport, so if we try to land it again...")
airport.land(plane6)
console.log(`Still only ${airport.planes.length} planes at airport, including plane6 appearing only once`)
console.log(airport.planes)

console.log("")

// As an Air Traffic Contoller, I want to tell a plane to take off from an airport only if it is already at the airport, so there aren't any errors
console.log(">> If a plane is not at the airport, it cannot be instucted to take off")
console.log("Plane4 is not at the airport, so if we try to take off...")
airport.takeOff(planes[2])
console.log(`Still ${airport.planes.length} planes at airport`)
console.log(airport.planes)

console.log("")

// As an Air Traffic Contoller, I want to know the capacity limit, so I can decide to override it if necessary
console.log(">> Checking the capacity limit of the airport")
console.log(`Airport has a capacity limit of ${airport.getCapacity()} planes`)

console.log("")

// As an Air Traffic Contoller, I want be able to change (override) the capacity limit for the airport, so that I can respond to emergencies
console.log(">> Overriding the capacity limit")
console.log("Changing the limit from 5 to 10 planes...")
airport.modifyCapacity(10)
console.log(`Airport now has a capacity limit of ${airport.getCapacity()} planes`)

console.log("")

// As an Air Traffic Contoller, I want to change the decrease the capacity limit up to the number of planes currently at the airport, so that there are no errors
console.log(">> The capacity limit cannot go below the number of planes currently at the airport")
console.log(`There are currently ${airport.planes.length} planes at airport`)
console.log("Trying to change the limit from 10 to 2 planes...")
console.log(`Airport capacity remains at ${airport.getCapacity()} planes`)

console.log("")

// As an Air Traffic Contoller, I want to see if the weather is stormy, so I can safely instruct a plane to land
console.log(">> Create stormy weather:")
const weather = new Weather('stormy')
console.log(weather)

console.log("")

console.log(">> At the airport, update the airport's weather property")
airport.updateWeather(weather)
console.log(`Weather is stormy: ${airport.isStormy()}`)

console.log("")

// As an Air Traffic Contoller, I want to not let a plane land if the weather is stormy, so it does not cause an accident
console.log(">> During stormy weather, planes should not be able to land")
console.log(`${airport.planes.length} planes currently at airport: `, airport.planes)
console.log("Trying to land plane4 during storm...")
airport.land(planes[3])
console.log(`No change to planes currently at airport: `, airport.planes)

// As an Air Traffic Contoller, I want to not let a plane take off if the weather is stormy, so it does not cause an accident
console.log(">> During stormy weather, planes should not be able to take off")
console.log(`${airport.planes.length} planes currently at airport: `, airport.planes)
console.log("Trying to take off plane6 during storm...")
airport.takeOff(plane6)
console.log(`No change to planes currently at airport: `, airport.planes)