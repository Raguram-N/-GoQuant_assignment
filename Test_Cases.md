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
- [TC005 – User Profile Update](#tc005--user-profile-update)
- [TC006 – Verify Logout and Voting Option Absence](#tc006--verify-logout-and-voting-option-absence)
- [TC007 – Navigation and UI/UX Verification](#tc007--navigation-and-uiux-verification)
- [TC008 – Responsive Testing on Different Screen Sizes](#tc008--responsive-testing-on-different-screen-sizes)
- [TC009 – Cross-Browser Compatibility](#tc009--cross-browser-compatibility)
- [TC010 – Performance and Load Testing](#tc010--performance-and-load-testing)
- [TC011 – Security Testing: Input Validation](#tc011--security-testing-input-validation)
- [TC012 - Accessibility Testing](#tc012---accessibility-testing)
- [TC013 – Session Timeout Test](#tc013--session-timeout-test)


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
- **Precondition:**
     - User is logged in on the [Buggy Car Rating App](https://buggy.justtestit.org/)
     - navigated to a car detail page (can reach via **Popular Make**, **Popular Model**, or **Overall Rating**)  
- **Test Steps:**  
  1. On the car detail page, check the current **Votes** count  
  2. Click the **Vote** button for the car  
  3. Optionally, enter a comment in the **Your Comment** field 
  4. Submit the vote  
  5. Observe any confirmation message (e.g., “Thank you for your vote!”)  
  6. Verify that the **Votes** count increments by 1  
  7. Check that the comment (if entered) appears in the comments list with correct timestamp and author  
  8. Repeat voting from other user accounts (if possible) to validate vote increment  
      

- **Expected Result:**  
  - Vote is successfully registered  
  - Total votes count increases correctly  
  - Comment appears under the car (if provided) 
  - Users cannot vote multiple times from the same account for same car (if intended)  

- **Priority:** High  
- **Test Data:**  
  - Any valid car model  
  - Normal comment text  
  - Malicious/script input for security testing  

---

## TC005 – User Profile Update
- **Objective:** Verify that a logged-in user can view and update profile information safely
- **Precondition:** User is logged in on the [Buggy Car Rating App](https://buggy.justtestit.org/)
- **Test Steps:**  
  1. Navigate to the **Profile Page** from the user menu  
  2. Verify that the current profile data is displayed correctly:  
     - Login/Username  
     - First Name  
     - Last Name  
     - Additional Info: Gender, Age, Address, Phone, Hobby  
  3. Update profile fields with valid data:  
     - First Name, Last Name, Address, Phone, Hobby, etc.  
     - Optional: Change Password by entering Current Password, New Password, Confirm Password  
  4. Click **Save/Update** button  
  5. Verify that success message appears (e.g., “Profile updated successfully”)  
  6. Attempt negative inputs:  
     - Leave required fields blank  
     - Enter invalid characters in names or phone number  
     - Enter mismatched new password and confirm password  
  7. Submit the form and verify validation messages for each issue  
- **Expected Result:**  
  - Valid updates are saved and displayed correctly  
  - Password changes only if current password is correct and new/confirm match  
  - Validation messages appear for invalid inputs  
  - No XSS or script injection vulnerabilities (e.g., `<script>` displays as text)  
- **Priority:** High  
- **Test Data:**  
  - Valid profile info  
  - Invalid/missing data for negative testing  
  - Script/malicious inputs to test security

---

## TC006 – Verify Logout and Voting Option Absence  

**Objective:**  
Ensure that once a user logs out, the voting functionality is no longer accessible.  

**Precondition:**  
User is logged in on the [Buggy Car Rating App](https://buggy.justtestit.org/) 

**Test Steps:**  
1. Log out of the application using the **Logout** button.  
2. Attempt to navigate back to a car detail page (via Popular Make/Model/Overall Rating or direct URL).  
3. Check if the **Vote button** and **Comment box** are visible.  

**Expected Result:**  
- **Vote button and Comment box must not be displayed**.  
- Application should display a message like: *“You need to be logged in to vote.”*  

**Priority:** High  

---

## TC007 – Navigation and UI/UX Verification
- **Objective:** Verify that all navigation links, menus, and buttons work correctly and the user interface is intuitive
- **Precondition:** User is logged in (or on main pages for general navigation)
- **Test Steps:**  
  1. Click all main navigation links (Home, Profile, Cars, Logout, etc.)  
  2. Verify pages load correctly without errors  
  3. Check buttons, icons, and links for visibility and proper labels  
  4. Ensure consistent design (colors, fonts, spacing) across pages  
  5. Validate that menus expand/collapse as expected (if any dropdowns)  
- **Expected Result:**  
  - All navigation links and buttons work as intended  
  - UI elements are consistent and visually clear  
  - No broken links or misaligned elements  
- **Priority:** Medium  
- **Test Data:** NA

---

## TC008 – Responsive Testing on Different Screen Sizes
- **Objective:** Verify that the application layout, content, and interactive elements adapt correctly across various screen sizes (desktop, tablet, mobile)
- **Precondition:** User is logged in or on any accessible page of the Buggy Car Rating App
- **Test Steps:**  
  1. Open the application in a desktop browser (full screen)  
     - Check layout, images, buttons, forms, and menus  
     - Perform main workflows: login, vote, update profile, navigation  
  2. Resize the browser window to tablet size (e.g., 768px width)  
     - Verify that text remains readable, images scale properly, and buttons are accessible  
     - Ensure menus or dropdowns work correctly  
  3. Switch to mobile view (e.g., 375px width) using browser DevTools or a real device  
     - Verify all elements are visible and functional  
     - Check that the voting button, comment box, and profile update forms work correctly  
  4. Rotate device orientation (portrait/landscape) and observe layout adjustments  
- **Expected Result:**  
  - Layout adjusts properly for all screen sizes without overlapping or hidden elements  
  - Interactive elements remain usable (buttons clickable, forms fillable)  
  - Text remains readable and images scale correctly  
  - Menus, navigation, and vote functionality work in all screen sizes  
- **Priority:** Medium  
- **Test Data:** NA

---

## TC009 – Cross-Browser Compatibility
- **Objective:** Verify that the Buggy Car Rating App functions correctly on different browsers
- **Precondition:** User is logged in or on any accessible page of the application
- **Test Steps:**  
  1. Open the application in **Google Chrome**  
     - Perform key workflows: login, vote for a car, update profile, navigate between pages  
     - Check layout, buttons, forms, and images  
  2. Open the application in **Mozilla Firefox**  
     - Repeat the same workflows as in Chrome  
     - Compare behavior, appearance, and functionality with Chrome  
  3. (Optional) Test in additional browsers like **Edge** or **Safari** if available  
     - Repeat main workflows and check layout and interactive elements  
- **Expected Result:**  
  - All functionalities work identically across tested browsers  
  - Layout, text, buttons, forms, and images appear correctly  
  - No browser-specific glitches or broken elements  
- **Priority:** Medium  
- **Test Data:** NA

---

## TC010 – Performance and Load Testing
- **Objective:** Verify that the Buggy Car Rating App performs efficiently under normal and high load conditions, and page elements load within acceptable time limits
- **Precondition:** Application is accessible; test user account exists (optional)
- **Test Steps:**  
  1. Open the application on a desktop or laptop  
     - Measure page load time for home page, registration/login, and car details pages  
  2. Perform typical user actions sequentially:  
     - Log in, navigate to a car detail page, vote for a car, view profile  
     - Note the time taken for each action and page response  
  3. Simulate **multiple users** (if possible using tools like JMeter or LoadNinja) accessing the site simultaneously  
     - Measure response time under moderate load (e.g., 10–50 users)  
     - Measure response time under high load (e.g., 100+ users)  
  4. Observe any errors, crashes, or slowdowns during high load scenarios  
  5. Optionally, test on different browsers and devices to check consistency  
- **Expected Result:**  
  - Pages load within acceptable time (e.g., <3 seconds for desktop, <5 seconds for mobile)  
  - No errors, crashes, or broken elements occur under normal and high load  
  - Application remains functional and responsive under simulated load  
- **Priority:** Medium  
- **Test Data:**  
  - Registered user account(s)  
  - Simulated user load scenarios (number of concurrent users, actions performed) 

---

## TC011 – Security Testing: Input Validation
- **Objective:** Ensure that all input fields in the Buggy Car Rating App properly validate data and prevent common security vulnerabilities
- **Precondition:** User is on any form page (registration, login, voting, profile update)
- **Test Steps:**  
  1. Enter special characters, scripts, or SQL-like inputs in text fields (e.g., <script>alert('xss')</script>, ' OR '1'='1)  
  2. Observe validation messages and application behavior  
  3. Verify that no unintended behavior, alerts, or crashes occur  
- **Expected Result:**  
  - Malicious inputs are sanitized and displayed as text or blocked  
  - Application remains stable, no XSS, SQL injection, or buffer overflow occurs  
- **Priority:** High  
- **Test Data:**  
  - Malicious script inputs, invalid characters, empty fields, extremely long strings

---

## TC012  – Accessibility Testing
- **Objective:** Verify that the app is accessible to users with disabilities and follows accessibility standards
- **Precondition:** User is on any page of the Buggy Car Rating App
- **Test Steps:**
  1. Navigate using **keyboard only**
  2. Check all interactive elements are reachable and actionable
  3. Verify all images have **alt text**
  4. Use screen reader (NVDA, VoiceOver) to navigate pages
  5. Check for sufficient color contrast
  6. Resize text in browser (zoom up to 200%) and verify usability
- **Expected Result:**
  - All interactive elements accessible via keyboard
  - Screen readers correctly announce content
  - Images have descriptive alt text
  - Sufficient color contrast exists
  - Layout remains functional when zoomed
- **Priority:** Medium
- **Test Data:** NA

---


## TC013 – Session Timeout Test
- **Objective:** Verify that the application automatically logs out the user after a period of inactivity to maintain security and session integrity.

- **Precondition:** User is logged in on the Buggy Car Rating App.

- **Test Steps:**
  1. Log in with a valid user account.
  2. Navigate to the home page or any accessible page of the application.
  3. Remain idle without performing any actions for 10-15 minutes (or the configured session timeout duration).
  4. Attempt to perform an action after the idle period (e.g., click a navigation link, vote, or access profile).
  5. Observe the application behavior and messages displayed.

- **Expected Result:**
  - The session automatically expires after the idle period.
  - User is redirected to the login page.
  - Any action attempted after timeout requires re-login.
  - No sensitive data is accessible after session expiration.

- **Priority:** Medium
- **Test Data:** Valid registered user credentials
