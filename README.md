# Playwright QA Automation Framework

A test automation portfolio project built with **Playwright** and **TypeScript**, demonstrating UI and API test automation, reusable test architecture, cross-browser testing, Docker containerization, and CI/CD integration.

The framework is designed to demonstrate maintainable automated testing practices and consistent execution across local and containerized environments.

## Tech Stack

| Technology | Purpose |
|---|---|
| Playwright | UI and API test automation |
| TypeScript | Test development |
| Node.js | JavaScript runtime |
| Docker | Containerized test execution |
| Docker Compose | Test environment configuration |
| GitHub Actions | Continuous integration |
| Page Object Model | Reusable page interactions |
| Playwright HTML Reporter | Test reporting and debugging |

## Test Coverage

### UI Testing – SauceDemo

Automated end-to-end tests against [SauceDemo](https://www.saucedemo.com/).

Test scenarios include:

- Successful login with valid credentials
- Login validation with invalid credentials
- Adding products to the shopping cart
- Shopping cart functionality
- Checkout process
- Order completion and confirmation

UI tests are executed across three browser engines:

- Chromium
- Firefox
- WebKit

### API Testing – JSONPlaceholder

Automated API tests using Playwright's built-in API testing capabilities.

Test scenarios include:

- GET requests with response data validation
- Negative testing with HTTP 404 validation
- POST requests with response status and body validation

API tests are organized separately from UI tests and run without requiring a browser.

## Framework Architecture

The project uses **Page Object Model (POM)** to separate UI interactions from test scenarios.

Reusable Playwright fixtures provide authenticated application states, reducing repeated login steps and improving test maintainability.

UI and API tests are configured as separate Playwright projects, allowing independent execution.

### Project Structure

```text
playwright-qa-framework/
├── .github/
│   └── workflows/         # GitHub Actions CI
├── fixtures/              # Reusable test fixtures
├── pages/                 # Page Object Model classes
├── test-data/             # Test users and data
├── tests/
│   ├── ui/                # UI test scenarios
│   └── api/               # API test scenarios
├── Dockerfile             # Docker image configuration
├── .dockerignore          # Docker build exclusions
├── compose.yaml           # Docker Compose configuration
├── playwright.config.ts   # Playwright configuration
├── package.json
├── package-lock.json
├── .env.example
└── README.md
```

## Getting Started

### Prerequisites

For local execution:

- Node.js
- npm
- Playwright browser dependencies

For containerized execution:

- Docker Desktop or Docker Engine
- Docker Compose

### Installation

Clone the repository:

```bash
git clone https://github.com/antfra125/playwright-qa-framework.git
cd playwright-qa-framework
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

### Environment Configuration

Create a `.env` file based on `.env.example`.

Example:

```env
BASE_URL=https://www.saucedemo.com
```

The framework uses environment variables for application configuration, with a default SauceDemo base URL defined in `playwright.config.ts`.

The `.env` file is excluded from Docker builds.

## Running Tests Locally

Run the complete test suite:

```bash
npm test
```

Run UI tests across Chromium, Firefox and WebKit:

```bash
npm run test:ui
```

Run API tests only:

```bash
npm run test:api
```

Open the HTML report:

```bash
npm run report
```

## Docker Support

The framework supports containerized test execution using Docker.

Docker provides a consistent Linux-based environment with the required Playwright browser dependencies and Node.js runtime.

This reduces environment-specific configuration differences between developers and test execution environments.

### Build the Docker Image

```bash
docker build -t playwright-qa .
```

The Dockerfile:

1. Uses the official Playwright Docker image.
2. Configures the working directory.
3. Installs project dependencies using `npm ci`.
4. Copies the test framework into the image.
5. Configures Playwright test execution as the default command.

### Run Tests in Docker

```bash
docker run --rm --init --ipc=host playwright-qa
```

This creates a temporary container, executes the complete Playwright test suite and removes the container after execution.

### Docker Compose

Docker Compose simplifies container execution and test artifact management.

Build and execute the test suite:

```bash
docker compose up --build --abort-on-container-exit --exit-code-from tests
```

Remove the test container and Compose network:

```bash
docker compose down
```

The Compose configuration includes bind mounts for:

- `playwright-report/` – HTML test reports
- `test-results/` – Test execution artifacts, including traces and screenshots when generated

These files remain accessible on the host machine after the container has stopped.

## Test Reporting and Debugging

Playwright's HTML reporter provides an overview of executed tests, results, and failures.

The framework also supports trace collection on the first retry, helping investigate failures in CI environments.

### Reporting Features

- HTML test reports
- Individual test execution results
- Failure information
- Trace collection on first retry
- Persistent artifacts when using Docker Compose

Reports can be accessed locally through:

```text
playwright-report/index.html
```

## Continuous Integration

The project uses **GitHub Actions** to automatically execute Playwright tests on pushes and pull requests.

The CI workflow runs automated tests and uploads the Playwright HTML report as a downloadable artifact.

The framework also includes Docker support for reproducible local and containerized execution.

Docker-based execution and the existing GitHub Actions workflow are currently separate configurations.

## Key Learning Outcomes

This project demonstrates practical experience with:

- Developing UI and API automated tests using Playwright and TypeScript
- Designing reusable Page Object Model classes
- Implementing custom Playwright fixtures
- Separating UI and API test execution
- Cross-browser test automation
- Managing environment-based test configuration
- Containerizing automated tests with Docker
- Using Docker Compose to configure test execution
- Persisting test reports and debugging artifacts
- Integrating automated tests with GitHub Actions

## Future Improvements

Potential areas for further development include:

- Expanded API test coverage
- Improved test data isolation
- Additional negative and edge-case scenarios
- Parallel execution optimization
- Docker-based CI execution
- Enhanced reporting and debugging workflows

---

**Project Goal**

The purpose of this project is to demonstrate practical QA automation engineering skills through a maintainable Playwright framework that combines UI testing, API testing, reusable test components, Docker containerization, and continuous integration.