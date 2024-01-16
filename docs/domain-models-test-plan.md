# Domain Models and Test Plan

Core Features
The Business Analyst team working with the client has identified the following features that should be implemented:

A representation of the airport is needed in the software that defines the maximum capacity of the number of planes that can be at the airport at any one time
This capacity should have the ability to be overridden as appropriate
Air Traffic Controllers need to be able to:
Instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport
Instruct a plane to take off from an airport as long as it is currently at the airport

Explain the benefits of the software to the client - why they need it and how it will help them. You should include:
The problem that the software is solving
The benefits that the software will bring to the client
The risks associated with the software
From the requirements listed above, devise a set of user stories that describe the functionality that the client has requested
From these user stories, create a domain model to describe how the objects will use messages to communicate with one another
Using a test-driven approach, implement the code necessary to implement the functionality described in the user stories
Create a program that will run in the terminal (without any user input) that demonstrates the functionality of the code based on the user stories

Problem the software solves:

This software will solve problems pertaining to the control of the flow of planes and plane capacity at an airport and efficiency of airport functionality and performance.

1. by defining the maximum capacity at this airport, it ensures that all planes can take off and land safely without having to manually monitor the number of planes
2. it also allows planes to efficiently board and unboard passengers as there will not be a queue of planes waiting for a gate. This reduces delays improves customer experience
3. By implementing a cap in number planes, it wll also reflect in the number of poeple in the airport , ensuring is not overcrowded, which improves safety and customer experience
4. reduces stress of passengers and airport staff alike!
5. pollution (noise and air) is reduced in the area

Benefits of the software:

1. It will track the number of planes at the airport, so human error will be minimised
2. a manual override is included for special circumstances, such as emergency landings.

Risks of the software:

1. Override might not be turned off after use, or perhaps negligent use of the override may deem the software redundant
2.

Requirements

1. A representation of the airport is needed in the software that defines the maximum capacity of the number of planes that can be at the airport at any one time

2. This capacity should have the ability to be overridden as appropriate

Air Traffic Controllers need to be able to: 3. Instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport 4. Instruct a plane to take off from an airport as long as it is currently at the airport

## User Stories

1. As an ATC, I want to tell a plane to land at an airport, so that passengers can disembark

2. As an ATC, I want to tell a plane to take off from an airport, so that it can be on its way to the next destination and make room for consequent planes

3. As an ATC, I want to know when the airport is at capacity, so that the airport is not overfilled with planes

4. As an ATC, I want to tell a plane to land at an airport if it is not full, so as to control the flow of planes at the airport

5. As an ATC, I want to tell a plane not to land at an airport if it is full, so as to control the capacity of planes at the airport

6. As an ATC, I want to tell a plane to land at an airport if it is not already at the airport, so there aren't any errors

7. As an ATC, I want to tell a plane to take off from an airport if it is already at the airport, so there aren't any errors

8. As an ATC, I want to be able to override the capacity, so that planes can land in emergency circumstances

## Domain Models

1. As an ATC, I want to tell a plane to land at an airport, so that passengers can disembark

| Objects | Properties                   | Messages          | Output     |
| ------- | ---------------------------- | ----------------- | ---------- |
| Plane   | planeId @String              |                   |            |
| Airport | airportPlanes @Array[@Plane] | landPlane(@Plane) | @undefined |

2. As an ATC, I want to tell a plane to take off from an airport, so that it can be on its way to the next destination and make room for consequent planes

| Objects | Properties                   | Messages        | Output     |
| ------- | ---------------------------- | --------------- | ---------- |
| Plane   | planeId @String              |                 |            |
| Airport | airportPlanes @Array[@Plane] | takeoff(@Plane) | @undefined |

3. As an ATC, I want to know when the airport is at capacity, so that the airport is not overfilled with planes

| Objects | Properties                   | Messages       | Output   |
| ------- | ---------------------------- | -------------- | -------- |
| Airport | airportCapacity @Number      | isAtCapacity() | @Boolean |
|         | airportPlanes @Array[@Plane] |                |          |

<!-- 4. As an ATC, I want to tell a plane to land at an airport if it is not full, so as to control the flow of planes at the airport

5. As an ATC, I want to tell a plane not to land at an airport if it is full, so as to control the capacity of planes at the airport -->

6. As an ATC, I want to tell a plane to land at an airport if it is not already at the airport, so there aren't any errors

| Objects | Properties                   | Messages            | Output   |
| ------- | ---------------------------- | ------------------- | -------- |
| Plane   | planeId @String              |                     |          |
| Airport | airportPlanes @Array[@Plane] | planeExists(@Plane) | @Boolean |

7. As an ATC, I want to tell a plane to take off from an airport if it is already at the airport, so there aren't any errors

| Objects | Properties                   | Messages            | Output   |
| ------- | ---------------------------- | ------------------- | -------- |
| Plane   | planeId @String              |                     |          |
| Airport | airportPlanes @Array[@Plane] | planeExists(@Plane) | @Boolean |

8. As an ATC, I want to be able to override the capacity, so that planes can land in emergency circumstances

## Test Planes

1. As an ATC, I want to tell a plane to land at an airport, so that passengers can disembark

| Objects | Properties            | Messages          | Output     |
| ------- | --------------------- | ----------------- | ---------- |
| Plane   | planeId @String       |                   |            |
| Airport | planes @Array[@Plane] | landPlane(@Plane) | @undefined |

- [ ] Plane landed in Airport increases airportPlanes array by 1
- [ ] Plane landed in Airport exists in airportPlanes array
<!-- - [ ] Plane without planeId is not passed into airportPlanes array
- [ ] null item is not passed into airportPlanes array -->

2. As an ATC, I want to tell a plane to take off from an airport, so that it can be on its way to the next destination and make room for consequent planes

| Objects | Properties            | Messages        | Output     |
| ------- | --------------------- | --------------- | ---------- |
| Plane   | planeId @String       |                 |            |
| Airport | planes @Array[@Plane] | takeoff(@Plane) | @undefined |

- [ ] Plane that has taken off should decrease planes array by 1
- [ ] Plane that has taken off from the airport should not exist planes array

3. As an ATC, I want to know when the airport is at capacity, so that the airport is not overfilled with planes

| Objects | Properties            | Messages       | Output   |
| ------- | --------------------- | -------------- | -------- |
| Airport | capacity @Number      | isAtCapacity() | @Boolean |
|         | planes @Array[@Plane] |                |          |

NB: capacity set at 5 by default

- [ ] isAtCapacity() returns true when airport is full
- [ ] isAtCapacity() returns false when airport is not full

4. As an ATC, I want to tell a plane to land only if is not full, so as to control the flow of planes at the airport

| Objects | Properties            | Messages     | Output     |
| ------- | --------------------- | ------------ | ---------- |
| Plane   | planeId @String       |              |            |
| Airport | planes @Array[@Plane] | land(@Plane) | @undefined |

- [ ] When airport is at capacity, landing a plane at the airport should not increase planes array length
- [ ] When airport is not at capacity, landing a plane at the airport should increase planes array length by 1

6. As an ATC, I want to tell a plane to land at an airport if it is not already at the airport, so there aren't any errors

| Objects | Properties            | Messages            | Output   |
| ------- | --------------------- | ------------------- | -------- |
| Plane   | planeId @String       |                     |          |
| Airport | planes @Array[@Plane] | planeExists(@Plane) | @Boolean |

- [ ] When landing a plane already at the airport, planes array should be the same length
- [ ] when adding same plane twice, it there is only one instance of it in the array

7. As an ATC, I want to tell a plane to take off from an airport only if it is already at the airport, so there aren't any errors

| Objects | Properties            | Messages            | Output   |
| ------- | --------------------- | ------------------- | -------- |
| Plane   | planeId @String       |                     |          |
| Airport | planes @Array[@Plane] | planeExists(@Plane) | @Boolean |

- [ ] When a plane not at the the airport tries to take off, planes array should be the same length

8. As an ATC, I want to be able to override the capacity limit, so that planes can land in emergency circumstances

//need to know the capacity and have the ability to change it as needed

9. As an ATC, I want to know the capacity limit, so I can decide to override it if necessary

| Objects | Properties       | Messages      | Output  |
| ------- | ---------------- | ------------- | ------- |
| Airport | capacity @Number | getCapacity() | @Number |

- [ ] Function getCapacity should return the capacity limit of the airport

10. As an ATC, I want be able to change the capacity limit for the airport, so that I can respond to emergencies

| Objects | Properties       | Messages                | Output     |
| ------- | ---------------- | ----------------------- | ---------- |
| Airport | capacity @Number | modifyCapacity(@Number) | @undefined |

- [ ] Function modifyCapacity should change the airport capacity to the specified amount
- [ ] Function modifyCapacity should not be able change the capacity to below 0

12. As an ATC, I want to change the decrease the capacity limit up to the number of planes currently at the airport, so that there are no errors

| Objects | Properties       | Messages                | Output     |
| ------- | ---------------- | ----------------------- | ---------- |
| Airport | capacity @Number | modifyCapacity(@Number) | @undefined |

- [ ] Function modifyCapacity should not be able change the capacity below the current number of planes at the airport
