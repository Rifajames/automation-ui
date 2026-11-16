# UI Automation Testing – Playwright & TypeScript

A simple UI automation testing project developed using **Playwright and TypeScript**, implementing the **Page Object Model (POM)** design pattern.

This project demonstrates a maintainable UI automation approach, focusing on login functionality, condition-based waiting, reliable locators, assertions, and test execution.

## 1. Tech Stack

| Technology | Purpose |
|---|---|
| TypeScript | Programming language |
| Playwright | UI automation framework |
| Playwright Test | Test runner and assertion library |
| Page Object Model | Automation design pattern |
| dotenv | Environment variable management |
| GitHub Actions | CI/CD integration (if configured) |

## 2. Project Structure

```text
qa-automation-framework/
│
├── pages/
│   └── LoginPage.ts
│
├── tests/
│   └── login.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

### Folder Description

- **pages/** – Contains Page Object classes, including page locators and reusable interactions.
- **tests/** – Contains UI automation test scenarios.
- **playwright.config.ts** – Contains Playwright configuration, browser settings, timeout, and reporting configuration.
- **.env** – Stores application URL and test credentials.
- **.gitignore** – Prevents sensitive files and generated artifacts from being committed.

## 3. Prerequisites

Make sure the following tools are installed:

- Node.js (LTS recommended)
- npm
- Visual Studio Code (recommended)
- Git

Check installed versions:

```bash
node -v
npm -v
git --version
```

## 4. Installation

Clone the repository:

```bash
git clone https://github.com/Rifajames/automation-ui.git
```

Navigate to the project directory:

```bash
cd qa-automation-framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install chromium
```

## 5. Environment Configuration

Create a `.env` file in the root directory.

Configure the following variables:

```env
BASE_URL=https://your-application-url.com
TEST_EMAIL=your-test-email@example.com
TEST_PASSWORD=your-test-password
```

Replace the example values with the authorized application URL and test credentials.

**Important:** Never commit `.env` or real credentials to GitHub. Use GitHub Secrets for CI execution.

## 6. Test Scenarios

The initial automation focuses on the Login functionality.

| Test Case ID | Scenario | Expected Result |
|---|---|---|
| LOGIN-001 | Login using valid credentials | User successfully logs in and accesses the dashboard |

### Preconditions

- Application is accessible.
- User account is registered and active.
- Valid test credentials are available.
- Login page is accessible.

### Expected Results

- Login page is displayed successfully.
- User can enter valid credentials.
- Login action is executed successfully.
- User is redirected to the dashboard.
- Dashboard is displayed correctly.

## 7. Automation Design Approach

### Page Object Model (POM)

This project implements the Page Object Model to separate page interactions and locators from test scenarios.

The main benefits are:

- Better code maintainability.
- Reusable page interactions.
- Reduced code duplication.
- Easier debugging and future test expansion.

### Locator Strategy

The automation prioritizes stable and accessible locators:

- `getByRole()`
- `getByLabel()`
- `getByPlaceholder()`
- `getByTestId()`

These locators help reduce dependency on unstable DOM structures.

### Waiting Strategy

The project uses Playwright's automatic waiting and condition-based assertions instead of relying on fixed delays.

Example:

```typescript
await expect(
    page.getByTestId('dashboard')
).toBeVisible();
```

This ensures the test waits for the expected condition before proceeding or reporting a timeout.

### Assertion Strategy

Assertions validate important checkpoints, including:

- Login page visibility.
- Successful navigation.
- Dashboard visibility.
- Expected authenticated application state.

## 8. Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run in debug mode:

```bash
npx playwright test --debug
```

## 9. Test Reports and Debugging

Generate and view the HTML report:

```bash
npx playwright show-report
```

The Playwright configuration also enables failure evidence collection:

| Evidence | Configuration |
|---|---|
| Screenshot | only-on-failure |
| Video | retain-on-failure |
| Trace | retain-on-failure |
| HTML Report | Enabled |

These artifacts help investigate test failures and identify potential root causes.

## 10. CI/CD Integration

The project can be executed through GitHub Actions to validate automation tests in a CI environment.

Recommended CI practices:

- Install dependencies using the committed lockfile.
- Install the required Playwright browser.
- Configure application credentials using GitHub Secrets.
- Execute the automation suite.
- Upload test reports and failure artifacts.
- Monitor test results after each execution.

## 11. Known Limitations and Future Improvements

The current implementation focuses on a basic successful login scenario.

Potential improvements include:

- Additional negative login scenarios.
- Logout automation.
- Test data management.
- Cross-browser testing.
- Improved test coverage.
- CI/CD execution and automated reporting.
- API integration for test data preparation.

## 12. Conclusion

This project demonstrates a basic but maintainable UI automation framework using Playwright and TypeScript.

The implementation focuses on reliable locator strategies, condition-based waiting, clear assertions, reusable page objects, and failure investigation capabilities.

The objective is not simply to automate user interactions, but to build automation that provides consistent and trustworthy feedback to the development team.