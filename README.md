# Contact List Playwright E2E Tests

## Table of Contents

- [Contact List Playwright E2E Tests](#contact-list-playwright-e2e-tests)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Tests](#running-tests)
    - [Run all tests](#run-all-tests)
  - [Commit patterns](#commit-patterns)
  - [Design Choices](#design-choices)
    - [Architecture](#architecture)
  - [Challenges Faced](#challenges-faced)
    - [1. Multiple Playwright Reports in GitHub Pages](#1-multiple-playwright-reports-in-github-pages)
    - [2. Capturing POST Response Data for Test Reuse](#2-capturing-post-response-data-for-test-reuse)
  
## Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (LTS version recommended)
* **Yarn**

## Installation

1.  **Install dependencies:**

    ```bash
    yarn install
    ```

## Running Tests

### Run all tests

To run all tests in headless mode:

```bash
yarn e2e
```

## [Commit patterns](./docs/conventional-commits.md)

## Design Choices

### Architecture
- **Page Object Model**: Implemented with abstract base classes to reduce code duplication and improve maintainability
- **Component-based approach**: Extracted reusable UI components (forms, tables) that can be shared across pages
- **Fixture pattern**: Used Playwright's fixture system for test setup/teardown and dependency injection
-  **Test isolation**: Each test uses unique generated data via Faker.js to prevent test interference
- **Setup/Teardown via API**: Used API calls for user creation in setup and cleanup to speed up test execution

## Challenges Faced

### 1. Multiple Playwright Reports in GitHub Pages
**Challenge**: Attempted to publish separate HTML reports for different test suites (UI vs API) to GitHub Pages.

**Issue**: The GitHub Pages action only supports publishing a single artifact directory. Tried combining reports but the complexity of merging Playwright HTML reports wasn't worth the effort.

### 2. Capturing POST Response Data for Test Reuse
**Challenge**: Needed to capture the `addContact` POST response to get the generated contact ID for use in subsequent test assertions.

**Issue**: When the POST request completes, the browser immediately redirects to the contact list page, causing the response to be lost before it could be captured.

**Attempted Solutions**:
- Used `page.route()` to intercept requests - worked partially but introduced other issues
- Tried `page.waitForResponse()` but the redirect happened too quickly