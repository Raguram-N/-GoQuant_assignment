# 📄 Buggy Car Rating Application – Detailed Test Cases

**Author:** Raguram Narayanaswamy  
**Date:** 6th September 2025  

This document contains detailed QA test cases for [Buggy Car Rating Application](https://buggy.justtestit.org/). Each test case includes scenario, preconditions, steps, expected result, actual result, pass/fail status, priority, and test data.

---

## 📑 Table of Contents
- [TC001 – User Registration](#tc001--user-registration)
- [TC002 – User Login](#tc002--user-login)
- [TC003 – Negative Scenarios: Registration and Login](#tc003--negative-scenarios-registration-and-login)
- [TC004 – Add Car voting](#tc004--add-car-voting)
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
  - The **Register button remains disabled** until all required fields are filled correctly  
  - After clicking, a confirmation message appears (e.g., “Registration is successful”) 
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

## TC003 – Negative Scenarios: Registration and Login
- **Objective:** Verify that the application prevents account creation or login when invalid, conflicting, or missing data is provided
- **Precondition:** User is on the registration page or login page of the [Buggy Car Rating App](https://buggy.justtestit.org/)

- **Test Steps (Registration):**  
  1. Open the **registration page**  
  2. Enter a **Login/Username** that is already taken (e.g., `existinguser`) 
  3. Enter **First Name** and **Last Name** with invalid characters
  4. Enter a **Password** that is too short (e.g., `123`) 
  5. Enter a **Confirm Password** that does not match the password (e.g., `1234`) 
  6. Click **Register**  
  7. Observe the **error messages** displayed for each invalid or missing input  

- **Test Steps (Login):**  
  1. Open the **login page**  
  2. Enter an incorrect **username/email** (e.g., `wronguser@example.com`) **OR** leave it blank  
  3. Enter an incorrect **password** (e.g., `WrongPass123`) **OR** leave it blank  
  4. Click **Login**  
  5. Verify that an **error message** is displayed  
  6. Ensure that the user **remains on the login page** and cannot access the dashboard or protected pages  

- **Expected Result:**  
  - Registration is blocked for all invalid inputs  
  - Login is blocked for invalid credentials  
  - Specific error messages appear:  
    - **Passwords do not match** → “Passwords must match”  
    - **Password too short** → “Minimum field size of 6, SignUpInput.Password”  
    - **Username already taken** → “Username already exists”  
    - **Missing required fields** → Field-specific error messages  
    - **Invalid characters** → Validation error message  
    - **Invalid login credentials** → “Invalid username or password”  
  - User remains on the respective page (registration or login)  

- **Priority:** High  

- **Test Data:**  
  - **Registration:** Username already taken, short password, mismatched password/confirm password, blank fields, invalid characters in username/first/last name  
  - **Login:** Invalid username/email, invalid password, blank fields  



---

## TC004 – Add Car voting
- **Objective:** Verify that a logged-in user can vote for a car and optionally add a comment, and that the total votes count updates correctly  
- **Precondition:** User is logged in and navigated to a car detail page (can reach via **Popular Make**, **Popular Model**, or **Overall Rating**)  
- **Test Steps:**  
  1. On the car detail page, check the current **Votes** count  
  2. Click the **Vote** button for the car  
  3. Optionally, enter a comment in the **Your Comment** field 
     - Enter normal text (e.g., `Great car!`)  
     - Enter potentially malicious text (e.g., `<script>alert('hack')</script>`)   
  4. Submit the vote  
  5. Observe any confirmation message (e.g., “Thank you for your vote!”)  
  6. Verify that the **Votes** count increments by 1  
  7. Check that the comment (if entered) appears in the comments list with correct timestamp and author  
  8. Repeat voting from other user accounts (if possible) to validate vote increment  
  9. Attempt to submit invalid inputs in the comment (e.g., scripts, special characters) to check validation  

- **Expected Result:**  
  - Vote is successfully registered  
  - Total votes count increases correctly  
  - Comment appears under the car (if provided) 
  - No XSS or script injection vulnerabilities  - Script/HTML injection is **escaped or blocked** (e.g., `<script>` displays as text, not executed)  
  - Users cannot vote multiple times from the same account for same car (if intended)  

- **Priority:** High  
- **Test Data:**  
  - Any valid car model  
  - Normal comment text  
  - Malicious/script input for security testing  

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
