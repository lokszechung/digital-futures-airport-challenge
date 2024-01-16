import { assertEquals, test } from "./test/test-framework.js";

import Airport from "../src/airport.js";
import Plane from "../src/plane.js";

// 1. As an ATC, I want to tell a plane to land at an airport, so that passengers can disembark

test('Test 1 - Plane landed at airport increases planes array by 1', () => {
  //Arrange
  const airport = new Airport()
  const plane1 = new Plane('plane1')
  const expectedOutput = 1

  //Act
  airport.land(plane1)
  const actualOutput = airport.planes.length

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

test('Test 2 - Plane landed in Airport exists in planes array', () => {
  //Arrange
  const airport = new Airport()
  const plane1 = new Plane('plane1')
  const expectedOutput = plane1

  //Act
  airport.land(plane1)
  const actualOutput = airport.planes[0]

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

// 2. As an ATC, I want to tell a plane to take off from an airport, so that it can be on its way to the next destination and make room for consequent planes

test('Test 3 - Plane that has taken off decreases planes array by 1', () => {
  //Arrange
  const airport = new Airport()
  const plane1 = new Plane('plane1')
  const plane2 = new Plane('plane2')
  const expectedOutput = 1

  //Act
  airport.land(plane1)
  airport.land(plane2)
  airport.takeOff(plane1)
  const actualOutput = airport.planes.length

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

test('Test 4 - Plane that has taken off does not exist planes array', () => {
  //Arrange
  const airport = new Airport()
  const plane1 = new Plane('plane1')
  const plane2 = new Plane('plane2')
  const expectedOutput = -1

  //Act
  airport.land(plane1)
  airport.land(plane2)
  airport.takeOff(plane1)
  const actualOutput = airport.planes.indexOf(plane1)

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

// 3. As an ATC, I want to know when the airport is at capacity, so that the airport is not overfilled with planes

test('Test 5 - Function isAtCapacity returns true when airport is full', () => {
  //Arrange
  const airport = new Airport()
  const planes = ['plane1', 'plane2', 'plane3', 'plane4', 'plane5'].map(plane => new Plane(plane))
  const expectedOutput = true

  //Act
  planes.forEach(plane => airport.land(plane))
  const actualOutput = airport.isAtFullCapacity()

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

test('Test 6 - Function isAtCapacity returns false when airport is not full', () => {
  //Arrange
  const airport = new Airport()
  const planes = ['plane1', 'plane2', 'plane3'].map(plane => new Plane(plane))
  const expectedOutput = false

  //Act
  planes.forEach(plane => airport.land(plane))
  const actualOutput = airport.isAtFullCapacity()

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

// 4. As an ATC, I want to tell a plane to land only if is not full, so as to control the flow of planes at the airport

test('Test 8 - When airport is at capacity, landing a plane at the airport should not increase planes array length', () => {
  //Arrange
  const airport = new Airport()
  const planes = ['plane1', 'plane2', 'plane3', 'plane4', 'plane5', 'plane6'].map(plane => new Plane(plane))
  const expectedOutput = 5

  //Act
  planes.forEach(plane => airport.land(plane))
  const actualOutput = airport.planes.length

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

test('Test 9 - When airport is not at capacity, landing a plane at the airport should increase planes array length by 1', () => {
  //Arrange
  const airport = new Airport()
  const planes = ['plane1', 'plane2', 'plane3', 'plane4', 'plane5'].map(plane => new Plane(plane))
  // const plane5 = new Plane('plane5')
  const expectedOutput = 1

  //Act
  planes.slice(0,4).forEach(plane => airport.land(plane))
  const noOfPlanesBefore = airport.planes.length
  airport.land(planes[4])
  const actualOutput = airport.planes.length - noOfPlanesBefore

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

// 6. As an ATC, I want to tell a plane to land at an airport if it is not already at the airport, so there aren't any errors

test('Test 10 - When landing a plane already at the airport, planes array should be the same length ', () => {
  //Arrange
  const airport = new Airport()
  const plane1 = new Plane('plane1')
  const expectedOutput = 1

  //Act
  airport.land(plane1)
  airport.land(plane1)
  const actualOutput = airport.planes.length

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

// 7. As an ATC, I want to tell a plane to take off from an airport only if it is already at the airport, so there aren't any errors

test('Test 11 - When a plane not at the the airport tries to take off, planes array should be the same length', () => {
  //Arrange
  const airport = new Airport()
  const plane1 = new Plane('plane1')
  const plane2 = new Plane('plane2')
  const expectedOutput = 1

  //Act
  airport.land(plane1)
  airport.takeOff(plane2)
  const actualOutput = airport.planes.length

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

// As an ATC, I want to know the capacity limit, so I can decide to override it if necessary

test('Test 12 - Function getCapacity should return the capacity limit of the airport', () => {
  //Arrange
  const airport = new Airport()
  const expectedOutput = 5

  //Act
  const actualOutput = airport.getCapacity()

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

// As an ATC, I want be able to change the capacity limit for the airport, so that I can respond to emergencies

test('Test 13 - Function modifyCapacity should change the airport capacity to the specified amount', () => {
  //Arrange
  const airport = new Airport()
  const newCapacity = 3
  const expectedOutput = newCapacity

  //Act
  airport.modifyCapacity(3)
  const actualOutput = airport.getCapacity()

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

test('Test 14 - Function modifyCapacity should not be able change the capacity to below 0', () => {
  //Arrange
  const airport = new Airport()
  const expectedOutput = 5 //default capacity

  //Act
  airport.modifyCapacity(-1)
  const actualOutput = airport.getCapacity()

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})

// As an ATC, I want to only decrease the capacity up to the number of planes currently at the airport, so that there are no errors

test('Test 15 - Function modifyCapacity should not be able change the capacity below the current number of planes at the airport', () => {
  //Arrange
  const airport = new Airport()
  const planes = ['plane1', 'plane2', 'plane3', 'plane4'].map(plane => new Plane(plane))
  planes.forEach(plane => airport.land(plane));
  const expectedOutput = 5 //default capacity

  //Act
  airport.modifyCapacity(3)
  const actualOutput = airport.getCapacity()

  //Assert 
  assertEquals(actualOutput, expectedOutput)
})