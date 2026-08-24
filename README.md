# Playwright QA Automation Framework

A test automation portfolio project built with **Playwright** and **TypeScript**, covering both UI and API testing.

## What's Included

### UI Testing – SauceDemo

* Successful and invalid login scenarios
* Add product to cart
* Complete checkout flow
* Cross-browser execution with Chromium, Firefox and WebKit

### API Testing – JSONPlaceholder

* GET user and validate response data
* Negative GET scenario with 404 validation
* POST resource and validate response data

## Framework Structure

```text id="5d2iyb"
playwright-qa-framework/
├── fixtures/       # Reusable authenticated setup
├── pages/          # Page Object Model
├── test-data/      # Test users and data
├── tests/
│   ├── UI Tests/
│   └── API Tests/
├── .github/        # GitHub Actions workflow
└── playwright.config.ts
```

The framework uses **Page Object Model** to separate page interactions from test scenarios and a custom Playwright fixture to provide an authenticated state for tests that require login.

UI and API tests are configured as separate Playwright projects. UI tests run across three browser engines while API tests run independently without a browser.

Environment-specific configuration such as the application base URL is handled through `.env`.

## Getting Started

Clone the repository and install dependencies:

```bash id="atip45"
git clone https://github.com/antfra125/playwright-qa-framework.git
cd playwright-qa-framework
npm install
npx playwright install
```

Create a `.env` file based on `.env.example`:

```env id="td3e4m"
BASE_URL=https://www.saucedemo.com
```

Run the complete test suite:

```bash id="d37fgb"
npx playwright test
```

Run only the API tests:

```bash id="7hrut5"
npx playwright test --project=api
```

Open the HTML report:

```bash id="8g4a3h"
npx playwright show-report
```

## CI

GitHub Actions automatically runs the Playwright test suite on pushes and pull requests and uploads the HTML test report as an artifact.

---

The goal of this project is to demonstrate a maintainable Playwright automation setup with UI testing, API testing, reusable fixtures, test data management, cross-browser execution and CI.
