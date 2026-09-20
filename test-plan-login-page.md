# OpenCart Login Page Core User Operations Test Plan

## Application Overview

A focused functional test plan for the OpenCart Account Login page at https://naveenautomationlabs.com/opencart/index.php?route=account/login. The plan covers five independent operations a typical end user performs from this page: successful authentication, rejected authentication, blank-input handling, password recovery navigation, and new-account registration navigation. Tests intentionally do not cover the home page, cart page, or post-login account features beyond confirming successful authentication.

## Test Scenarios

### 1. Account Login Page

**Seed:** `tests/seed.spec.ts`

#### 1.1. Log in with valid credentials

**File:** `tests/account-login/successful-login.spec.ts`

**Steps:**
  1. Start from a fresh logged-out browser state and open the Account Login page.
    - expect: The page title is "Account Login".
    - expect: The Returning Customer section is visible with E-Mail Address, Password, Forgotten Password, and Login controls.
  2. Enter "rajubhai@gmail.com" in the E-Mail Address field.
    - expect: The email field contains the supplied address.
  3. Enter "Playwright!2030" in the Password field.
    - expect: The password field accepts the value and masks the entered characters.
  4. Click the Login button once.
    - expect: The form is submitted.
    - expect: The user is authenticated and the browser navigates to the account area with the "My Account" page title.
    - expect: No authentication warning is displayed.
  5. If the authentication check passes, end the scenario without navigating to the home page or cart page.
    - expect: The test is considered successful only when the authenticated account destination is reached.

#### 1.2. Reject invalid login credentials

**File:** `tests/account-login/invalid-credentials.spec.ts`

**Steps:**
  1. Start from a fresh logged-out browser state and open the Account Login page.
    - expect: The login form is empty and the page remains on the Account Login route.
  2. Enter an unregistered email such as "invalid@example.com" in the E-Mail Address field and "WrongPassword!" in the Password field.
    - expect: Both values are accepted for submission and the password remains masked.
  3. Click the Login button once.
    - expect: The browser remains on the Account Login page.
    - expect: A visible warning states "No match for E-Mail Address and/or Password.".
    - expect: The user is not authenticated and no account page is opened.
    - expect: The entered email and password are not treated as a successful session.

#### 1.3. Handle submission with blank login fields

**File:** `tests/account-login/blank-fields-validation.spec.ts`

**Steps:**
  1. Start from a fresh logged-out browser state and open the Account Login page.
    - expect: The E-Mail Address and Password fields are empty.
  2. Leave both fields blank and click the Login button.
    - expect: The browser does not authenticate the user.
    - expect: The page remains on the Account Login route.
    - expect: The login form remains available for correction.
    - expect: A validation or authentication feedback state is shown according to the application behavior; the test must not accept navigation to the account area as success.
  3. Enter a valid-looking email while leaving Password blank, then click Login.
    - expect: The user remains on the login page and is prompted to provide a password or receives the site's failed-login feedback.
    - expect: No authenticated session is created.
  4. Reload the login page and enter a password while leaving E-Mail Address blank, then click Login.
    - expect: The user remains on the login page and is prompted to provide an email address or receives the site's failed-login feedback.
    - expect: No authenticated session is created.

#### 1.4. Open forgotten-password recovery from the login page

**File:** `tests/account-login/password-recovery-navigation.spec.ts`

**Steps:**
  1. Start from a fresh logged-out browser state and open the Account Login page.
    - expect: The Returning Customer section is visible.
  2. Click the Forgotten Password link within the Returning Customer form.
    - expect: The browser navigates to the account password-recovery route.
    - expect: The page title is "Forgot Your Password?".
    - expect: The recovery page provides an email address input and a Continue action.
    - expect: The test does not navigate to the home page or cart page.
  3. Use the browser's direct navigation to return to the Account Login page for cleanup.
    - expect: The Account Login page is displayed again and remains logged out.

#### 1.5. Open account registration from the login page

**File:** `tests/account-login/registration-navigation.spec.ts`

**Steps:**
  1. Start from a fresh logged-out browser state and open the Account Login page.
    - expect: The New Customer panel is visible with account-creation information and a Continue link.
  2. Click the Continue link in the New Customer panel.
    - expect: The browser navigates to the account registration route.
    - expect: The page title is "Register Account".
    - expect: The registration form is displayed for creating a new customer account.
    - expect: The test does not navigate to the home page or cart page.
  3. Use the browser's direct navigation to return to the Account Login page for cleanup.
    - expect: The Account Login page is displayed again and remains logged out.
