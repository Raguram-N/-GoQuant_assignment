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
