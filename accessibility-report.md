# ♿ Accessibility Audit Report – Buggy Car Rating Application  

**🛠 Tool Used**: Lighthouse (Chrome DevTools)  
**📅 Date**: September 9, 2025  
**🔗 URL Tested**: [https://buggy.justtestit.org/](https://buggy.justtestit.org/)  
**💻 Device/Mode**: Emulated Desktop  
**🌍 Browser**: Chromium 122.0.0.0  
**📦 Lighthouse Version**: 11.4.0  

---

## 📊 Accessibility Score  
![Accessibility Score](https://img.shields.io/badge/Accessibility-63%2F100-orange?style=for-the-badge&logo=w3c&logoColor=white)  

> ⚠️ The score indicates there are opportunities to improve inclusivity and meet WCAG standards.  

---

## 🚩 Issues Identified  

| Category | Issue | Impact |
|----------|-------|--------|
| **Names & Labels** | ❌ Images missing `[alt]` attributes | Screen readers can’t describe images |
|                  | ❌ Links without discernible names | Users can’t identify link purpose |
| **Contrast** | ❌ Insufficient background–foreground contrast | Hard to read for low-vision users |
| **Internationalization** | ❌ `<html>` missing `[lang]` attribute | Screen readers can’t detect language |

---

## ✅ Passed Audits  
- ✔️ 9 checks passed successfully  
- ➖ 48 checks not applicable  

---

## 📌 Recommendations  

- 🖼 Add descriptive `[alt]` attributes to images  
- 🔗 Provide meaningful text or `aria-label` for links  
- 🎨 Fix color contrast to meet WCAG AA standards (min 4.5:1)  
- 🌍 Add `<html lang="en">` attribute  
- 🧑‍🦯 Perform manual screen reader & keyboard navigation testing  

---

## 🚀 Next Steps  
- [ ] Fix alt attributes  
- [ ] Add meaningful link names  
- [ ] Correct color contrast ratios  
- [ ] Add language attribute  
- [ ] Run manual accessibility tests  

---

📄 *Generated automatically using Lighthouse 11.4.0. Manual verification is recommended for full WCAG compliance.*  
