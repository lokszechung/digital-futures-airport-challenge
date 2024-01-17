# Domain Models and Test Plan

### Problems the software solves

This software will solve problems pertaining to the control of the flow of planes and plane capacity at an airport and boost efficiency and performance of the airport.

1. By defining the maximum capacity at this airport, it ensures that all planes can take off and land safely without having to manually monitor the number of planes.
2. Allows planes to efficiently board and unboard passengers as there will not be a queue of planes waiting for a gate. This reduces delays improves customer experience.
3. By implementing a cap in number planes, it will also reduce the number of people in the airport, ensuring is not overcrowded, which improves safety and customer experience.
4. Controlling the number of planes at the airport leads to reduced noise and air pollution in the area.
5. Reduces stress of passengers and airport staff alike!

### Benefits of the software:

1. It will automatically track the number of planes at the airport, so human error will be minimised.
2. A manual override is included for special circumstances, such as emergency landings or airport expansion.

### Risks of the software:

1. Override might not be reverted after use, or perhaps negligent use of the override may deem the software redundant.
2. Weather conditions need to be manually updated, so there is a risk of allowing planes to land and take off during stormy weather.

---

<br>

## Core Features

**1\. As an Air Traffic Contoller, I want to tell a plane to land at an airport, so that passengers can disembark**

| Objects | Properties            | Messages          | Output     |
| ------- | --------------------- | ----------------- | ---------- |
| Plane   | planeId @String       |                   |            |
| Airport | planes @Array[@Plane] | landPlane(@Plane) | @undefined |

- Test 1 - Plane landed in Airport increases airportPlanes array by 1
- Test 2 - Plane landed in Airport exists in airportPlanes array

<br>

**2\. As an Air Traffic Contoller, I want to tell a plane to take off from an airport, so that it can be on its way to the next destination and make room for consequent planes**

| Objects | Properties            | Messages        | Output     |
| ------- | --------------------- | --------------- | ---------- |
| Plane   | planeId @String       |                 |            |
| Airport | planes @Array[@Plane] | takeoff(@Plane) | @undefined |

- Test 3 - Plane that has taken off should decrease planes array by 1
- Test 4 - Plane that has taken off from the airport should not exist planes array

<br>

**3\. As an Air Traffic Contoller, I want to know when the airport is at capacity, so that the airport is not overfilled with planes**

| Objects | Properties            | Messages           | Output   |
| ------- | --------------------- | ------------------ | -------- |
| Airport | capacity @Number      | isAtFullCapacity() | @Boolean |
|         | planes @Array[@Plane] |                    |          |

_Note: capacity set to 5 by default_

- Test 5 - isAtFullCapacity() returns true when airport is full
- Test 6 - isAtFullCapacity() returns false when airport is not full

<br>

**4\. As an Air Traffic Contoller, I want to tell a plane to land only if is not full, so as to control the flow of planes at the airport**

| Objects | Properties            | Messages     | Output     |
| ------- | --------------------- | ------------ | ---------- |
| Plane   | planeId @String       |              |            |
| Airport | planes @Array[@Plane] | land(@Plane) | @undefined |

- Test 7 - When airport is at capacity, landing a plane at the airport should not increase planes array length
- Test 8 - When airport is not at capacity, landing a plane at the airport should increase planes array length by 1

<br>

**5\. As an Air Traffic Contoller, I want to tell a plane to land at an airport if it is not already at the airport, so there aren't any errors**

| Objects | Properties            | Messages            | Output   |
| ------- | --------------------- | ------------------- | -------- |
| Plane   | planeId @String       |                     |          |
| Airport | planes @Array[@Plane] | planeExists(@Plane) | @Boolean |

- Test 9 - When landing a plane already at the airport, planes array should be the same length

<br>

**6\. As an Air Traffic Contoller, I want to tell a plane to take off from an airport only if it is already at the airport, so there aren't any errors**

| Objects | Properties            | Messages            | Output   |
| ------- | --------------------- | ------------------- | -------- |
| Plane   | planeId @String       |                     |          |
| Airport | planes @Array[@Plane] | planeExists(@Plane) | @Boolean |

- Test 10 - When a plane not at the the airport tries to take off, planes array should be the same length

<br>

**7\. As an Air Traffic Contoller, I want to know the capacity limit, so I can decide to override it if necessary**

| Objects | Properties       | Messages      | Output  |
| ------- | ---------------- | ------------- | ------- |
| Airport | capacity @Number | getCapacity() | @Number |

- Test 11 - Function getCapacity should return the capacity limit of the airport

<br>

**8\. As an Air Traffic Contoller, I want be able to change (override) the capacity limit for the airport, so that I can respond to emergencies**

| Objects | Properties       | Messages                | Output     |
| ------- | ---------------- | ----------------------- | ---------- |
| Airport | capacity @Number | modifyCapacity(@Number) | @undefined |

- Test 12 - Function modifyCapacity should change the airport capacity to the specified amount
- Test 13 - Function modifyCapacity should not be able change the capacity to below 0

<br>

**9\. As an Air Traffic Contoller, I want to change the decrease the capacity limit up to the number of planes currently at the airport, so that there are no errors**

| Objects | Properties       | Messages                | Output     |
| ------- | ---------------- | ----------------------- | ---------- |
| Airport | capacity @Number | modifyCapacity(@Number) | @undefined |

- Test 14 - Function modifyCapacity should not be able change the capacity below the current number of planes at the airport

---

<br>

## Additional Features

In addition to these features, the client has asked for the following functionality to be implemented if time allows you to do so:

Planes must not be able to land if the weather is stormy
Planes must not be able to take off if the weather is stormy

**1\. As an Air Traffic Contoller, I want to see if the weather is stormy, so I can safely instruct a plane to land**

| Objects | Properties        | Messages     | Output     |
| ------- | ----------------- | ------------ | ---------- |
| Weather | condition @String |              |            |
| Airport | weather @String   | getWeather() | @undefined |
|         |                   | isStormy()   | @Boolean   |

- Test 15 - Function getWeather should store the weather condition in the airport's weather property
- Test 16 - When weather is stormy, function isStormy should return true
- Test 17 - When weather is not stormy, function isStormy should return false

<br>

**2\. As an Air Traffic Contoller, I want to not let a plane land if the weather is stormy, so it does not cause an accident**

| Objects | Properties            | Messages     | Output     |
| ------- | --------------------- | ------------ | ---------- |
| Weather | condition @String     |              |            |
| Airport |                       | isStormy()   | @Boolean   |
|         | planes @Array[@Plane] | land(@Plane) | @undefined |

- Test 18 - Trying to landing a plane during stormy weather should not change planes array length

**2\. As an Air Traffic Contoller, I want to not let a plane take off if the weather is stormy, so it does not cause an accident**

| Objects | Properties            | Messages        | Output     |
| ------- | --------------------- | --------------- | ---------- |
| Weather | condition @String     |                 |            |
| Airport |                       | isStormy()      | @Boolean   |
|         | planes @Array[@Plane] | takeOff(@Plane) | @undefined |

- Test 19 - A plane trying to taking off during stormy weather should not change planes array length
