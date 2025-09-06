## Bug 4 – "Read More" in Comment Section Redirects to Car Detail Page

**Bug ID:** BUG004  
**Type:** Functional / UX  
**Severity Level:** Medium  
**Priority Level:** Medium  

### Description
Clicking the **Read More** link in the comment section unexpectedly redirects the user to the car detail page instead of either expanding the comment inline or navigating to a dedicated full-comment view. This occurs on **Popular Make** and **Overall Rating** pages, disrupting the user’s reading experience.

### Steps to Reproduce
1. Log in to the Buggy Car Rating App.  
2. Navigate to **Popular Make** or **Overall Rating** pages.  
3. Locate a comment that is truncated with a **Read More** link.  
4. Click the **Read More** link.

### Expected Behavior
- Clicking **Read More** should either:  
  - Expand the comment **inline**, showing the full text without leaving the page, **or**  
  - Navigate to a dedicated page showing the full comment thread, keeping the user’s context clear.

### Actual Behavior
- Clicking **Read More** redirects the user to the car detail page.

### Environment Details
- Browser: Chrome 122, Firefox 117  
- OS: Windows 11, Android 15  

### Screenshots/Attachments
- Screenshot showing the **Read More** link and the resulting redirect.
- [Read More button - (Read highlight)](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/Read%20more.png)

### Suggested Fix/Workaround
- Update the **Read More** functionality to either expand comments inline or navigate to a full-comment view, instead of redirecting to the car detail page.  
- Maintain consistency across all pages (Popular Make, Overall Rating, etc.).




### BUG005 – User Name Not Clickable

**Description:**  
The user name displayed in the header/profile section is not clickable. On hover, the cursor changes to a “red circle cross,” preventing navigation to the profile page or related options.

**Steps to Reproduce:**  
1. Log in to the Buggy Car Rating App with a valid account.  
2. Navigate to any page displaying the user name in the header.  
3. Hover the mouse over the user name.  
4. Attempt to click the user name.

**Expected Behavior:**  
- User name should be clickable to navigate to profile or show a dropdown menu.  
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
[Red cross mouse pointer (yellow highlight)](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/Red%20cross%20over%20user%20name.jpg)

**Suggested Fix/Workaround:**  
- Ensure the user name element has correct clickable link or button functionality.  
- Update CSS to show pointer cursor on hover.  
- Test across browsers for consistent behavior.

