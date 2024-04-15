# Sprint 7 project

## Project Description

This project houses comprehensive API integration tests for the Urban Grocers e-commerce platform.  Tests are designed to verify core functionality and ensure consistent API behavior across the following types of requests:

* GET 
* POST
* PUT
* DELETE

**Key Objectives**

* Validate successful response status codes for various endpoints.
* Parse API responses and assert the presence of expected data structures.

## Technologies Used

* **Jest:**  JavaScript testing framework for structuring and executing tests.
* **Node.js:** JavaScript runtime environment for test execution.

## How to Run the Tests

**Prerequisites**

* Node.js (version 14 or higher recommended)
* npm (usually bundled with Node.js)

**Setup and Execution**

1. **Clone Repository:** Clone this repository to your local machine.
2. **Install Dependencies:** Navigate to the project directory in your terminal and run `npm install`.
3. **Run Tests:** Execute the tests using `npm test` or `npx jest`.

## Test Structure

Tests are organized into files located within the `tests` directory.  File names or internal structures may reflect API endpoint groupings

## Configuration

* The base API URL is set in `config.js`.


## Additional Notes

* The Urban Grocers API documentation is a crucial reference for understanding expected behaviors. It is available here: https://cnt-4fb30833-bcba-47fc-af85-1ad0fa8522b0.containerhub.tripleten-services.com/docs/
