# Bug Report – Buggy Car Rating App

## Table of Contents
- [BUG 1 – "Read More" Link in Comment Section Redirects to Car Detail Page](#bug-1-read-more-link-in-comment-section-redirects-to-car-detail-page)
- [BUG 2 – User Name Not Clickable in Header/Profile Section](#bug-2-user-name-not-clickable-in-headerprofile-section)
- [BUG 3 – Register Button Highlights Along With Login Button on Registration Page](#bug-3-register-button-highlights-along-with-login-button-on-registration-page)
- [BUG 4 – Pagination Next Button Latency Issue](#bug-4-pagination-next-button-latency-issue)
- [BUG 5 – Table Header Rearranges Cars Without Sort/Filter](#bug-5-table-header-rearranges-cars-without-sort-filter)



---

## BUG 1 – "Read More" Link in Comment Section Redirects to Car Detail Page
<a name="bug-1-read-more-link-in-comment-section-redirects-to-car-detail-page"></a>

**Bug ID:** BUG 1  

**Description:**  
Clicking the **Read More** link in the comment section unexpectedly redirects the user to the car detail page.  
It should either expand the comment **inline** or navigate to a dedicated full-comment view.  

This issue is observed on the **Popular Make** and **Overall Rating** pages, disrupting the reading experience.  

**Steps to Reproduce:**  
1. Log in to the Buggy Car Rating App.  
2. Navigate to **Popular Make** or **Overall Rating** pages.  
3. Locate a comment truncated with a **Read More** link.  
4. Click the **Read More** link.  

**Expected Behavior:**  
- Clicking **Read More** should expand the comment inline or navigate to a full-comment page.  

**Actual Behavior:**  
- Clicking **Read More** redirects the user to the car detail page.  

**Severity Level:** Medium  

**Priority Level:** Medium  

**Environment Details:**  
- Browser: Chrome 122, Firefox 117  
- OS: Windows 11, Android 15  

**Screenshots/Attachments:**  
- [Read More button highlight](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/Read%20more.png)  

**Suggested Fix/Workaround:**  
- Update the **Read More** functionality to expand inline or navigate to full-comment view.  
- Ensure consistency across all pages (Popular Make, Overall Rating).

---

## BUG 2 – User Name Not Clickable in Header/Profile Section
<a name="bug-2-user-name-not-clickable-in-headerprofile-section"></a>

**Bug ID:** BUG 2  

**Description:**  
The user name in the header/profile section is not clickable.  
On hover, the cursor shows a **red circle cross**, preventing navigation to the profile page or dropdown menu options.  

**Steps to Reproduce:**  
1. Log in to the Buggy Car Rating App with a valid account.  
2. Navigate to any page showing the user name in the header.  
3. Hover over the user name.  
4. Attempt to click it.  

**Expected Behavior:**  
- User name should be clickable to navigate to profile or show dropdown options.  
- Cursor changes to a pointer (hand) on hover.  

**Actual Behavior:**  
- Cursor shows a red circle with a cross.  
- Clicking the user name does nothing.  

**Severity Level:** Medium  

**Priority Level:** Medium  

**Environment Details:**  
- Browser: Chrome v122 / Firefox v117  
- OS: Windows 10  

**Screenshots/Attachments:**  
- [Red cross mouse pointer](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/Red%20cross%20over%20user%20name.jpg)  

**Suggested Fix/Workaround:**  
- Make the user name element clickable.  
- Update CSS to show pointer cursor on hover.  
- Test across browsers for consistent behavior.

---

## BUG 3 – Register Button Highlights Along With Login Button on Registration Page
<a name="bug-3-register-button-highlights-along-with-login-button-on-registration-page"></a>

**Bug ID:** BUG 3  

**Description:**  
On the registration page, when a user fills all required fields, the **Register** button highlights correctly.  
However, the **Login** button also highlights simultaneously, causing confusion.  

**Steps to Reproduce:**  
1. Go to the registration page of the Buggy Car Rating App.  
2. Fill all required fields (Username, First Name, Last Name, Password, Confirm Password).  
3. Observe button highlight behavior.  

**Expected Behavior:**  
- Only **Register** should highlight when the form is complete.  
- **Login** button should remain unhighlighted unless hovered/clicked.  

**Actual Behavior:**  
- Both **Register** and **Login** buttons highlight simultaneously.  

**Severity Level:** Medium  

**Priority Level:** Medium  

**Environment Details:**  
- Browser: Chrome v122 / Firefox v117  
- OS: Windows 10 / macOS  

**Screenshots/Attachments:**  
- [Register / Login Button Highlight Issue](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/LoginRegister%20highlight.png)

**Suggested Fix/Workaround:**  
- Separate CSS/JS logic for hover and form-completion highlight.  
- Ensure only **Register** reacts to form completion.  
- Test across browsers for consistent behavior.

---

## BUG 4 – Pagination Next Button Latency Issue
<a name="bug-4-pagination-next-button-latency-issue"></a>

**Bug ID:** BUG 4  

**Description:**  
Clicking the **Next** button in pagination takes 1.5–2 seconds per page.  
For multi-page jumps (e.g., page 10), the cumulative delay frustrates users.  

**Steps to Reproduce:**  
1. Log in to the Buggy Car Rating App.  
2. Go to a car listing page (Popular Make, Popular Model, or Overall Rating).  
3. Click **Next** to move to the next page.  
4. Repeat for multiple pages.  
5. Observe the load times.  

**Expected Behavior:**  
- Page transitions should be smooth (<500ms).  
- Users should be able to jump to any page directly without waiting.  

**Actual Behavior:**  
- Each page takes 1.5–2 seconds to load.  
- Multi-page jumps result in cumulative wait times (~20s for 10 pages).  

**Severity Level:** Medium  

**Priority Level:** Medium  

**Environment Details:**  
- Browser: Chrome v122 / Firefox v117  
- OS: Windows 10 / macOS  
- Network: 100 Mbps  

**Screenshots/Attachments:**  
- [Pagination Latency Issue][(https://github.com/Raguram-N/-GoQuant_assignment/blob/main/Page%20navigation.png)  

**Suggested Fix/Workaround:**  
- Optimize server/API response for pagination.  
- Implement **pre-fetching** or **AJAX-based pagination**.  
- Enable direct page number navigation to skip pages.  
- Test across devices and browsers.


---

## BUG 5 – Table Header Rearranges Cars Without Sort/Filter
<a name="bug-5-table-header-rearranges-cars-without-sort-filter"></a>

**Bug ID:** BUG 5  


**Description:**  
Clicking the column headers (**Make, Model, Rank, Votes, Engine**) Rearrange Car Listings WithoutWithout User Awarenes, Sorting/Filtering Feedback, Causing Confusion and Latency  

- **Issue 1:** Users are **not informed** about the criteria used for rearrangement.  
- **Issue 2:** There are **no visible sort icons or filtering options**, making the action unclear.  
- **Issue 3:** Rearrangement introduces a **latency delay** of ~1.5–2 seconds per action, compounding user frustration when trying to explore multiple columns.  

This negatively impacts usability, as users cannot predict, control, or understand the behavior of the table.  

**Steps to Reproduce:**  
1. Log in to the Buggy Car Rating App.  
2. Navigate to a car listing table (Popular Make, Overall Rating, or similar).  
3. Click any column header: **Make, Model, Rank, Votes, Engine**.  
4. Observe how the list rearranges and the delay that occurs.  

**Expected Behavior:**  
- Column headers should either:  
  - Allow **sorting with visible ascending/descending icons**, or  
  - Provide a **tooltip or message** explaining the rearrangement criteria.  
- Sorting/rearranging should occur **instantly** (<500ms) without latency.  

**Actual Behavior:**  
- Clicking headers rearranges the cars without explanation.  
- No sort icons, filters, or messages are provided.  
- Rearrangement takes ~1.5–2 seconds, causing noticeable latency.  

**Severity Level:** Medium  

**Priority Level:** Medium  

**Environment Details:**  
- Browser: Chrome v122 / Firefox v117  
- OS: Windows 10 / macOS  
- Network: 100 Mbps  

**Screenshots/Attachments:**  
- [Table Header Rearrangement Issue Screenshot](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/Header%20title.png)

**Suggested Fix/Workaround:**  
- Implement **sorting indicators** (asc/desc icons) for each column header.  
- Add **tooltips or messages** explaining the sorting criteria when clicked.  
- Optimize **sorting logic** to reduce latency.  
- Consider adding **filter options** for better user control.  

