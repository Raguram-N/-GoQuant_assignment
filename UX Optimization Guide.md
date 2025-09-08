# UX Recommendations

- [Recommendation 1 – Search Bar Missing](#recommendation-1--search-bar-missing)
- [Recommendation 2 – Show/Hide Password Option Missing](#recommendation-2--showhide-password-option-missing)
- [Recommendation 3 – Missing Home/Back Navigation](#recommendation-3--missing-homeback-navigation)
- [Recommendation 4 – Sorting Options Missing](#recommendation-4--sorting-options-missing)
- [Recommendation 5 – Pagination Usability](#recommendation-5--pagination-usability)
- [Recommendation 6 - Welcome Thank You message is missing](#recommendation-6---welcome-thank-you-message-is-missing)
- [Recommendation 7 – Automatic Login After Registration](#recommendation-7--automatic-login-after-registration)
- [Recommendation 8 – Display Password Criteria](#recommendation-8--display-password-criteria)

---

## Recommendation 1 – Search Bar Missing
**Issue:** Users cannot quickly locate specific car models or makes due to the absence of a search functionality. This can increase cognitive load and time to complete tasks, especially for users who know exactly what they want.  

**UX Recommendation:** 
- Introduce a prominent search bar at the top of the dashboard and car listing pages.
- Provide **auto-suggestions** and **recent searches** to speed up discovery.
- Allow **filtering and sorting** directly from search results (e.g., by brand, model, rating, or popularity).

## Recommendation 2 – "Show/Hide Password" Option Missing
**Issue:** Users cannot toggle password visibility in registration or login forms. This may lead to input errors, frustration, and repeated attempts, especially on mobile devices where typing mistakes are common.  

**UX Recommendation:** 
- Add an **eye icon** (show/hide toggle) in all password input fields (registration, login, change password forms).  
- Ensure toggling the password does not compromise security (e.g., temporary visibility, masked by default).   
- Consider **visual feedback** (e.g., changing icon state) so users clearly know if the password is visible or hidden.  
- Test on **mobile and desktop devices** to ensure touch targets are large enough and intuitive.  

## Recommendation 3 – Missing Home/Back Navigation
**Issue:** Users have no direct way to return to the home/dashboard page or navigate back from a detailed view. This may cause frustration, disorientation, and inefficient workflows, especially for first-time users.  

**UX Recommendation:**  
- Add a **Home button** prominently on the dashboard and main navigation bar.  
- Include a **Back button** or breadcrumb navigation on all detailed pages (car details, profile, etc.) to help users return to the previous page easily.  
- Ensure buttons are **clearly labeled** and **consistently positioned** across the application. 

## Recommendation 4 – Sorting Options missing 
**Issue:** Users cannot sort lists of cars, models, or comments, making it difficult to find popular items, recent entries, or preferred choices efficiently. This can lead to frustration and increased cognitive load.  

**UX Recommendation:**  
- Implement **sorting options** on key lists such as Popular Make, Popular Model, Overall Rating, and Comments.  
- Common sort criteria could include:  
  - **Cars/Models:** Alphabetical, Most Voted, Highest Rated, Newest Added  
  - **Comments:** Most Recent, Oldest, Most Helpful (if applicable)  
- Place sorting controls in a **visible and intuitive location**, like above the list or in a filter bar.  
- Use **clear labels and icons** to indicate the current sort order.  

## Recommendation 5 – Pagination Usability
**Issue:** The current pagination only allows users to move one page at a time (Next/Previous), preventing direct access to a specific page. This increases effort and time, especially for users navigating large lists of cars or comments.  

**UX Recommendation:**  
- Implement **direct page navigation** in the pagination component, allowing users to jump to any page (e.g., page numbers 1, 2, 3… N).  
- Include **Next/Previous buttons** alongside numbered pages for flexibility.  
- Highlight the **current page** visually for easy orientation.  
- Consider adding **“First” and “Last” buttons** for quicker access to boundary pages.

## Recommendation 6 - Welcome Thank You message is missing
**Issue:** Users do not receive a welcome message upon login or a thank you/confirmation message upon logout, which reduces engagement and clarity about the action's success.  

**UX Recommendation:**  
- Display a **welcome board or greeting message** after successful login, e.g., “Welcome, [Username]!”  
- Show a **confirmation or thank-you message** upon logout, e.g., “You have successfully logged out. See you soon!”  
- Ensure these messages are **prominently visible** but non-intrusive, possibly using a toast notification or a banner.

## Recommendation 7 – Automatic Login After Registration
**Issue:** New users must manually log in again immediately after completing registration, which adds friction and may reduce engagement.  

**UX Recommendation:**  
- Implement **automatic login** for users immediately after successful registration.  
- Redirect the user directly to the **dashboard or home page** after registration, eliminating the need for a separate login step.   
- This reduces unnecessary steps, improves user experience, and increases the likelihood of continued engagement. 

## Recommendation 8 – Display Password Criteria
**Issue:** Users cannot see the required password rules while creating an account or changing their password, causing trial-and-error attempts and frustration.  

**UX Recommendation:**  
- Show **password requirements** clearly near the password input fields (e.g., minimum length, special characters, uppercase letters, numbers).  
- Use **real-time validation** with visual indicators (checkmarks or color change) as users type to show which criteria are met.  
- Display a **tooltip or info icon** that users can click to view password rules at any time.  
- Ensure the guidance is concise, readable, and accessible on both desktop and mobile devices.  
- This improves user confidence, reduces errors, and accelerates the registration or password change process.  



