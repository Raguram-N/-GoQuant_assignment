# 📄 Buggy Car Rating Application – Detailed Test Cases

**Author:** Raguram Narayanaswamy  
**Date:** 6th September 2025  

This document contains detailed QA test cases for [Buggy Car Rating Application](https://buggy.justtestit.org/). Each test case includes scenario, preconditions, steps, expected result, actual result, pass/fail status, priority, and test data.

---

## 📑 Table of Contents
- [TC001 – User Registration](#tc001--user-registration)
- [TC002 – User Login](#tc002--user-login)
- [TC003 – Login with Invalid Credentials](#tc003--login-with-invalid-credentials)
- [TC004 – Add Car Rating](#tc004--add-car-rating)
- [TC005 – Add Multiple Ratings](#tc005--add-multiple-ratings)
- [TC006 – Search Car Model](#tc006--search-car-model)
- [TC007 – Search Non-Existent Car](#tc007--search-non-existent-car)
- [TC008 – Shopping Cart Add Item](#tc008--shopping-cart-add-item)
- [TC009 – Shopping Cart Remove Item](#tc009--shopping-cart-remove-item)
- [TC010 – Checkout Process](#tc010--checkout-process)
- [TC011 – Checkout with Empty Cart](#tc011--checkout-with-empty-cart)
- [TC012 – User Profile Update](#tc012--user-profile-update)
- [TC013 – Change Password](#tc013--change-password)
- [TC014 – Logout](#tc014--logout)
- [TC015 – Responsive Design Test](#tc015--responsive-design-test)
- [TC016 – Cross-Browser Functionality](#tc016--cross-browser-functionality)
- [TC017 – Navigation Links Test](#tc017--navigation-links-test)
- [TC018 – Error Messages Display](#tc018--error-messages-display)
- [TC019 – Session Timeout Test](#tc019--session-timeout-test)
- [TC020 – Popular Car Make Sorting](#tc020--popular-car-make-sorting)

---

## TC001 – User Registration
- **Objective:** Verify that a new user can successfully register an account
- **Precondition:** User is on the registration page of the [Buggy Car Rating App](https://buggy.justtestit.org/)
- **Test Steps:**  
  1. Open the registration page  
  2. Enter a valid **Login/Username** (e.g., `testuser123`)  
  3. Enter a valid **First Name** (e.g., `Test`)  
  4. Enter a valid **Last Name** (e.g., `User`)  
  5. Enter a **Password** (e.g., `Test@1234`)  
  6. Enter the **Confirm Password** field with the same password  
  7. Click **Register**  
  8. Observe if a confirmation message appears  
- **Expected Result:**  
  - A confirmation message appears (e.g., Registration is successful”)   
- **Priority:** High  
- **Test Data:** Random valid credentials for all required fields (Login, First Name, Last Name, Password)

 

---

## TC002 – User Login
- **Objective:** Verify that a registered user can successfully log in to the application
- **Precondition:** User has already registered an account on the Buggy Car Rating App
- **Test Steps:**  
  1. Open the login page of the [Buggy Car Rating App](https://buggy.justtestit.org/)  
  2. Enter the **registered email address** (e.g., `testuser@example.com`)  
  3. Enter the corresponding **password** (e.g., `Test@1234`)  
  4. Click the **Login** button  
  5. Observe if the user is redirected to the **dashboard/home page**  
  6. Verify that the user's name or profile icon appears on the page  
- **Expected Result:**  
  - User is successfully logged in  
  - Redirected to the dashboard/home page  
  - User-specific elements like profile name or icon are visible  
- **Priority:** High  
- **Test Data:** Valid registered user credentials

---

## TC003 – User Registration with Invalid Credentials
- **Objective:** Verify that the application prevents account creation when invalid or conflicting data is provided
- **Precondition:** User is on the registration page of the [Buggy Car Rating App](https://buggy.justtestit.org/)
- **Test Steps:**  
  1. Open the registration page  
  2. Enter a **Login/Username** that is already taken (e.g., `existinguser`)  
  3. Enter valid **First Name** and **Last Name**  
  4. Enter a **Password** that is too short (e.g., `123`)  
  5. Enter a **Confirm Password** that does not match the password (e.g., `1234`)  
  6. Click **Register**  
  7. Observe the error messages displayed for each issue  
  8. Try entering invalid characters in username or names to test validation  
  9. Attempt registration with blank required fields  
- **Expected Result:**  
  - Registration is blocked for all invalid inputs  
  - Specific error messages appear for each scenario:  
    - **Passwords do not match** → “Passwords must match”  
    - **Password too short** → “Minimum field size of 6, SignUpInput.Password”  
    - **Username already taken** → “Username already exists”  
    - **Missing required fields** → Field-specific error messages  
    - **Invalid characters** → Validation error message  
  - User remains on the registration page  
- **Priority:** High  
- **Test Data:**  
  - Username already taken  
  - Short password (less than 6 characters)  
  - Mismatched password/confirm password  
  - Blank fields  
  - Invalid characters in username/first/last name  



---

## TC004 – Add Car Rating
- **Precondition:** User is logged in  
- **Test Steps:**  
  1. Navigate to a car model page  
  2. Select star rating (1-5)  
  3. Click **Submit Rating**  
- **Expected Result:** Rating saved; average rating updates  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** High  
- **Test Data:** Any car model  

---

## TC005 – Add Multiple Ratings
- **Precondition:** User logged in  
- **Test Steps:**  
  1. Navigate to a car model  
  2. Submit rating multiple times with different stars  
- **Expected Result:** All ratings saved; average updates correctly  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Medium  
- **Test Data:** Any car model  

---

## TC006 – Search Car Model
- **Precondition:** User logged in  
- **Test Steps:**  
  1. Enter car model name in search bar  
  2. Click **Search**  
- **Expected Result:** Relevant car model(s) appear  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Medium  
- **Test Data:** Valid car names  

---

## TC007 – Search Non-Existent Car
- **Precondition:** User logged in  
- **Test Steps:**  
  1. Enter a random/non-existent car name  
  2. Click **Search**  
- **Expected Result:** No results displayed; proper message shown  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Low  
- **Test Data:** Random string  

---

## TC008 – Shopping Cart Add Item
- **Precondition:** User logged in  
- **Test Steps:**  
  1. Browse car models  
  2. Click **Add to Cart**  
- **Expected Result:** Item added; cart counter updates  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** High  
- **Test Data:** Any product  

---

## TC009 – Shopping Cart Remove Item
- **Precondition:** Item added to cart  
- **Test Steps:**  
  1. Open cart  
  2. Click **Remove** on an item  
- **Expected Result:** Item removed; cart counter updates  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** High  
- **Test Data:** Any product  

---

## TC010 – Checkout Process
- **Precondition:** Item in cart  
- **Test Steps:**  
  1. Click **Checkout**  
  2. Fill shipping and payment info  
  3. Submit order  
- **Expected Result:** Order confirmation displayed  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** High  
- **Test Data:** Test payment info  

---

## TC011 – Checkout with Empty Cart
- **Precondition:** Cart is empty  
- **Test Steps:**  
  1. Click **Checkout**  
- **Expected Result:** Warning message; cannot proceed  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Medium  
- **Test Data:** NA  

---

## TC012 – User Profile Update
- **Precondition:** User logged in  
- **Test Steps:**  
  1. Navigate to profile  
  2. Update details  
  3. Save changes  
- **Expected Result:** Changes saved; confirmation message  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Medium  
- **Test Data:** Valid profile info  

---

## TC013 – Change Password
- **Precondition:** User logged in  
- **Test Steps:**  
  1. Go to profile → change password  
  2. Enter old password  
  3. Enter new password  
  4. Confirm new password  
- **Expected Result:** Password updated; confirmation shown  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Medium  
- **Test Data:** Valid old + new password  

---

## TC014 – Logout
- **Precondition:** User logged in  
- **Test Steps:**  
  1. Click **Logout**  
- **Expected Result:** Redirected to login page  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** High  
- **Test Data:** NA  

---

## TC015 – Responsive Design Test
- **Precondition:** Any page open  
- **Test Steps:**  
  1. Resize browser window  
  2. Switch to mobile view  
- **Expected Result:** Layout adjusts; no broken elements  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Medium  
- **Test Data:** NA  

---

## TC016 – Cross-Browser Functionality
- **Precondition:** Any page open  
- **Test Steps:**  
  1. Open application in Chrome and Firefox  
  2. Perform login, search, add rating  
- **Expected Result:** Actions work identically in both browsers  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Medium  
- **Test Data:** NA  

---

## TC017 – Navigation Links Test
- **Precondition:** User logged in  
- **Test Steps:**  
  1. Click all main navigation links (Home, Profile, Cars, etc.)  
- **Expected Result:** Pages load correctly; no broken links  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Medium  
- **Test Data:** NA  

---

## TC018 – Error Messages Display
- **Precondition:** User performs invalid actions  
- **Test Steps:**  
  1. Submit empty registration form  
  2. Submit invalid search  
- **Expected Result:** Proper error messages shown for each case  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Medium  
- **Test Data:** NA  

---

## TC019 – Session Timeout Test
- **Precondition:** User logged in  
- **Test Steps:**  
  1. Remain idle for 10-15 minutes  
- **Expected Result:** Session expires; user redirected to login  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Low  
- **Test Data:** NA  

---

## TC020 – Popular Car Make Sorting
- **Precondition:** User logged in  
- **Test Steps:**  
  1. Navigate to popular car makes page  
  2. Observe sorting/filtering options  
- **Expected Result:** Cars sorted correctly; filters work  
- **Actual Result:** TBD  
- **Pass/Fail:** TBD  
- **Priority:** Medium  
- **Test Data:** NA  
