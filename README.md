# Cypress Automation Framework

End-to-end automation framework built with Cypress following scalable QA automation practices.

This project automates core user flows from the Automation Exercise demo application, including login, product purchase, checkout, and payment scenarios.

## Tech Stack

- Cypress
- JavaScript
- GitHub Actions
- Page Object Model (POM)

---

# Framework Architecture

The project follows a modular structure to improve readability, scalability, and maintainability.

## Project Structure

```bash
cypress/
│
├── e2e/
├── fixtures/
├── support/
│   ├── Assertions/
│   ├── Commands/
│   ├── Constants/
│   ├── Flows/
│   └── Pages/
```

## Architecture Overview

### Pages

Contains page objects and reusable UI interactions.

### Assertions

Contains reusable assertions separated from business flows.

### Flows

Contains reusable user workflows such as payment or purchase flows.

### Fixtures

Stores test data for users and payment cards.

### Commands

Custom Cypress commands for reusable actions like login.

---

# Automated Scenarios

## Authentication

- User login
- Login validations

## Purchase Flow

- Product selection
- Cart validation
- Checkout process
- Payment processing

## Payment Scenarios

- Valid payment flow
- Invalid card scenarios (demo environment behavior)
- Empty payment fields validation

---

# CI/CD

GitHub Actions was implemented to execute Cypress tests automatically on push and pull requests.

---

# Running the Project

## Install dependencies

```bash
npm install
```

## Open Cypress

```bash
npx cypress open
```

## Run tests in headless mode

```bash
npx cypress run
```

---

# Future Improvements

- Dynamic test data generation
- Test isolation improvements
- Cleanup strategies for reusable test accounts
- Faker integration
- Enhanced reporting and screenshots

---

# Notes

This project uses the Automation Exercise demo application for educational and portfolio purposes.

Some payment scenarios reflect the behavior of the demo environment, which accepts non-real payment data.
