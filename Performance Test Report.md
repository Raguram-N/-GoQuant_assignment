# 📄 Performance Test Report

## 1. Test Objective
To measure the maximum concurrent users the application can handle before response degradation or failure.

---

## 2. Test Configuration
- **Tool:** Apache JMeter 5.3.6  
- **Scenario:** Thread Group simulating concurrent users
- **Users:** 1000
- **Ramp-up:** 1 seconds  
- **Loop Count:** 100 
- **Target URL:**
- Home : https://buggy.justtestit.org/
- Popular Make : https://buggy.justtestit.org/make/ckl2phsabijs71623vk0
- Popular Model : https://buggy.justtestit.org/model/ckl2phsabijs71623vk0%7Cckl2phsabijs71623vqg
- Overall Rating : https://buggy.justtestit.org/overall 

---

## 3. Observation
- Up to **371 users**, all requests were successful with stable response times.  
- At **User 372**, the following result occurred:

| Time          | Thread             | Sampler | Response Time (ms) | Status       | Bytes |
|---------------|------------------|--------|-----------------|-------------|-------|
| 20:12:18.727  | Thread Group 1-372 | Home   | 1889            | Warning (Failure) | 0     |

---

## 4. Analysis
- The system **first failed at 372 concurrent users**.  
- Response time increased sharply (**1889 ms vs ~300–500 ms earlier**).  
- Failure indicates **system capacity limit under stress**.
- after this point, Website face inconsistency in loading
- [Report data](https://github.com/Raguram-N/-GoQuant_assignment/blob/main/Screenshot%20(86).png)

---

## 5. Conclusion
- **Safe load capacity:** ~350 concurrent users  
- **Breaking point:** 372 concurrent users – the website crashed/returned errors  
- **Recommendation:** Optimize server resources or implement scaling strategies before exceeding this threshold  

---
