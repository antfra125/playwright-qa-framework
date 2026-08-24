# Playwright QA Automation Framework

A test automation portfolio project built with **Playwright** and **TypeScript**, covering both UI and API testing.

## What's Included

### UI Testing – SauceDemo

- Successful and invalid login scenarios
- Add product to cart
- Complete checkout flow
- Cross-browser execution with Chromium, Firefox and WebKit

### API Testing – JSONPlaceholder

- GET user and validate response data
- Negative GET scenario with 404 validation
- POST resource and validate response data

## Framework Structure

```text
playwright-qa-framework/
├── fixtures/       # Reusable authenticated setup
├── pages/          # Page Object Model
├── test-data/      # Test users and data
├── tests/
│   ├── ui/
│   └── api/
├── .github/        # GitHub Actions workflow
└── playwright.config.ts
```

The framework uses **Page Object Model** to separate page interactions from test scenarios and a custom Playwright fixture to provide an authenticated state for tests that require login.

UI and API tests are configured as separate Playwright projects. UI tests run across three browser engines while API tests run independently without a browser.

Environment-specific configuration such as the application base URL is handled through `.env`.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/antfra125/playwright-qa-framework.git
cd playwright-qa-framework
npm install
npx playwright install
```

Create a `.env` file based on `.env.example`:

```env
BASE_URL=https://www.saucedemo.com
```

## Running Tests

Run the complete test suite:

```bash
npm test
```

Run all UI tests:

```bash
npm run test:ui
```

Run only API tests:

```bash
npm run test:api
```

Open the HTML report:

```bash
npm run report
```

## CI

GitHub Actions automatically runs the Playwright test suite on pushes and pull requests and uploads the HTML test report as an artifact.

---

The goal of this project is to demonstrate a maintainable Playwright automation setup with UI testing, API testing, reusable fixtures, test data management, cross-browser execution and CI.