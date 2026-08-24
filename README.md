# Playwright QA Automation Framework

A test automation portfolio project built with **Playwright** and **TypeScript**.

The project demonstrates UI and API test automation using Page Object Model, reusable fixtures, environment-based configuration, cross-browser testing, and CI with GitHub Actions.

## Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions
* dotenv

## Test Coverage

### UI Tests

The UI tests are implemented against [SauceDemo](https://www.saucedemo.com/).

Current scenarios include:

* Successful login
* Invalid login
* Add a product to the shopping cart
* Complete checkout flow and verify order confirmation

UI tests run across:

* Chromium
* Firefox
* WebKit

### API Tests

The API tests use [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

Current scenarios include:

* GET an existing user and validate status and response data
* GET a non-existing user and validate the 404 response
* POST a new resource and validate the returned data

API tests run in a separate Playwright project and do not require a browser.

## Project Structure

```text
playwright-qa-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── fixtures/
│   └── authFixture.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── test-data/
│   └── users.ts
│
├── tests/
│   ├── UI Tests/
│   │   ├── login.spec.ts
│   │   ├── cart.spec.ts
│   │   └── checkout.spec.ts
│   │
│   └── API Tests/
│       ├── users.api.spec.ts
│       └── posts.api.spec.ts
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Framework Design

### Page Object Model

The UI tests use the **Page Object Model (POM)** to separate page-specific selectors and interactions from the test scenarios.

Page objects are currently implemented for:

* Login
* Inventory
* Cart
* Checkout

This keeps selectors and common UI interactions in one place while allowing the test files to focus on test scenarios and expected results.

### Authentication Fixture

A custom Playwright fixture provides an authenticated page for tests that require the user to already be logged in.

This removes repeated login setup from tests such as cart and checkout while keeping the login tests independent.

### Test Data

Test users are stored separately from the test scenarios.

This reduces duplicated test data and makes it easier to update or add users without changing individual tests.

### UI and API Projects

UI and API tests are configured as separate Playwright projects.

UI tests run against Chromium, Firefox, and WebKit to provide cross-browser coverage.

API tests run once without a browser, avoiding unnecessary duplicate executions across browser projects.

### Environment Configuration

The application base URL is loaded from an environment variable using `dotenv`.

This keeps environment-specific configuration outside of the test code and makes it possible to use the same framework against different environments.

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/antfra125/playwright-qa-framework.git
cd playwright-qa-framework
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Configure the Environment

Create a `.env` file in the project root based on `.env.example`.

```env
BASE_URL=https://www.saucedemo.com
```

The `.env` file is excluded from Git.

## Running Tests

### Run the Complete Test Suite

```bash
npx playwright test
```

### Run Only API Tests

```bash
npx playwright test --project=api
```

### Run UI Tests in Chromium

```bash
npx playwright test --project=chromium
```

### Run UI Tests in Firefox

```bash
npx playwright test --project=firefox
```

### Run UI Tests in WebKit

```bash
npx playwright test --project=webkit
```

### Run a Specific Test File

```bash
npx playwright test tests/UI\ Tests/login.spec.ts
```

## Test Reports

Playwright's HTML reporter is enabled.

After a test run, the latest report can be opened with:

```bash
npx playwright show-report
```

Traces are collected on the first retry to assist with debugging failed tests.

## Continuous Integration

The project includes a **GitHub Actions** workflow.

The test suite runs automatically on pushes and pull requests. In CI:

* Dependencies are installed
* Playwright browsers are installed
* Tests are executed
* Failed tests are retried
* The Playwright HTML report is uploaded as an artifact

This provides automated feedback when changes are pushed to the repository.

## Current Test Suite

The framework currently contains:

* 4 UI test scenarios
* 3 API test scenarios
* Cross-browser UI execution across Chromium, Firefox, and WebKit
* Separate API execution without a browser

The focus of the project is not to maximize the number of test cases, but to demonstrate a maintainable automation structure covering UI testing, API testing, reusable setup, test data management, environment configuration, cross-browser execution, reporting, and CI.

## Future Improvements

Possible future improvements include:

* Additional negative and edge-case scenarios
* API schema validation
* Multiple environment configurations
* Test tagging
* Parallel CI jobs
* Linting and formatting
* Additional test data strategies

## Purpose

This project was created as a practical portfolio project to develop and demonstrate test automation skills using Playwright and TypeScript.

The main focus is maintainability, clear test structure, separation of responsibilities, and automated execution rather than creating a large number of similar test cases.
