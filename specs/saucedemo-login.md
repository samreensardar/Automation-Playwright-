# SauceDemo login plan

## Application Overview

Plan for SauceDemo login flow scenarios covering valid login, locked user, empty fields, and invalid credentials.

## Test Scenarios

### 1. SauceDemo login

**Seed:** `tests/seed.spec.js`

#### 1.1. Successful login with standard_user

**File:** `specs/saucedemo-login.md`

**Steps:**
  1. Open https://www.saucedemo.com in a fresh browser session.
    - expect: The login page loads and shows the username field, password field, and Login button.
  2. Enter standard_user in the Username field and secret_sauce in the Password field.
    - expect: The credentials are entered without errors.
  3. Click the Login button.
    - expect: The user is redirected to the inventory page.
    - expect: The page shows the Products header and inventory items.

#### 1.2. Locked out user shows error

**File:** `specs/saucedemo-login.md`

**Steps:**
  1. Open https://www.saucedemo.com in a fresh browser session.
    - expect: The login page loads successfully.
  2. Enter locked_out_user in the Username field and secret_sauce in the Password field.
    - expect: The credentials are entered without errors.
  3. Click the Login button.
    - expect: An error message is shown indicating the user is locked out.
    - expect: The user remains on the login page.

#### 1.3. Empty username submission

**File:** `specs/saucedemo-login.md`

**Steps:**
  1. Open https://www.saucedemo.com in a fresh browser session.
    - expect: The login page loads successfully.
  2. Leave the Username field empty, enter secret_sauce in the Password field, and click Login.
    - expect: A validation error is shown for the missing username.
    - expect: The user remains on the login page.

#### 1.4. Empty password submission

**File:** `specs/saucedemo-login.md`

**Steps:**
  1. Open https://www.saucedemo.com in a fresh browser session.
    - expect: The login page loads successfully.
  2. Enter standard_user in the Username field, leave the Password field empty, and click Login.
    - expect: A validation error is shown for the missing password.
    - expect: The user remains on the login page.

#### 1.5. Invalid credentials show authentication error

**File:** `specs/saucedemo-login.md`

**Steps:**
  1. Open https://www.saucedemo.com in a fresh browser session.
    - expect: The login page loads successfully.
  2. Enter invalid credentials such as standard_user with a wrong password or a random username with secret_sauce.
    - expect: The credentials are entered without errors.
  3. Click the Login button.
    - expect: An authentication error message is shown.
    - expect: The user remains on the login page.
