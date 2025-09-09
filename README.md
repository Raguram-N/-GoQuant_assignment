# 📄 Test Plan for GoQuant Assignment

**Title:** Test Plan – Buggy Car Rating Application  
**Author:** Raguram Narayanaswamy  
**Date:** 6th September 2025  

---

## 📑 Table of Contents
- [1. Introduction](#1-introduction)
- [2. Scope](#2-scope)
- [3. Test Objectives](#3-test-objectives)
- [4. Test Environment](#4-test-environment)
- [5. Test Strategy](#5-test-strategy)
- [6. Test Deliverables](#6-test-deliverables)
- [7. Exit Criteria](#7-exit-criteria)
- [8. Test Approach and Coverage](#8-test-approach-and-coverage)
- [9. Risks and Mitigation](#9-risks-and-mitigation)
- [10. Approval](#10-approval)

---

## 1. Introduction
This document presents the Test Plan for the Buggy Car Rating Web Application (https://buggy.justtestit.org/).  
The goal of testing is not limited to identifying functional issues but also to ensure that the application delivers a smooth, intuitive, and customer-centric user experience.  

The application allows users to register, log in, explore popular car makes, etc. Each of these flows is critical to user engagement, and testing will therefore focus on validating these end-to-end user journeys.  

Our approach combines manual exploratory testing (to uncover usability and design issues from a real-user perspective) with automation using Playwright (to validate repetitive workflows like login and rating submission efficiently).  

In addition to finding bugs, this testing exercise also aims to provide UX recommendations to enhance navigation, layout consistency, error handling, and accessibility. This test plan ensures both functional reliability and delightful user interaction.  

---

## 2. Scope

✅ **In Scope**:
- User registration & login  
- Product browsing & car model ratings  
- Popular make/model ranking  
- User profile management  
- UI/UX consistency  
- Cross-browser (Chrome, Firefox)  
- Responsive design checks  

❌ **Out of Scope**:
- Backend database performance  
- Third-party integrations  

---

## 3. Test Objectives
- Validate major workflows (login, search, add rating).  
- Ensure usability and accessibility compliance.  
- Detect functional and UI/UX issues.  
- Provide actionable recommendations for improvement.  

---

## 4. Test Environment
- **OS:** Windows 11  
- **Browsers:** Chrome (latest), Firefox (latest)  
- **Devices:** Laptop (1366x768, 1920x1080), Mobile view (Chrome DevTools)  
- **Tools:** Playwright (automation), Browser DevTools, MS Word (reporting), OBS/Loom (recording)  

---

## 5. Test Strategy
- **Manual Testing** → functional, regression, UI/UX, responsive design  
- **Automation (Playwright)** → login, search, add rating  

---

## 6. Test Deliverables  
- [Test Cases](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/Test_Cases.md/) 
- [Bug Identification & Reporting](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/Bug%20Identification%20%26%20Reporting.md)  
- [Automation Suite](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/goquant-assignment.zip)
- [Performance Test Report](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/Performance%20Test%20Report.md)
- [Accessibility-report](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/accessibility-report.md)
- [UX Optimization Guide](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/UX%20Optimization%20Guide.md)  
- Demo Video  

---

## 7. Exit Criteria
- All high-priority test cases executed  
- All critical bugs identified and documented  
- Automation suite executed with report  

---

## 8. Test Approach and Coverage

| Testing Type | Coverage | Tools Used |
|--------------|----------|------------|
| **Functional** | Registration, Login, Ratings | Manual |
| **Regression** | Repeat core flows | Automation (Playwright) |
| **UI/UX** | Layout, Accessibility | Exploratory |
| **Responsive** | Mobile + Desktop views | Chrome DevTools |

---

## 9. Risks and Mitigation
- **Risk:** Limited time may reduce coverage → **Mitigation:** Focus on high-priority flows  
- **Risk:** Test environment instability → **Mitigation:** Document environment specs carefully  

---

## 10. Approval
- **Tester:** Raguram Narayanaswamy  
- **Reviewed by:** [To be filled by reviewer]  
