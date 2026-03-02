## HTTP Method

### 🌐 1️⃣ GET Method

👉 **কাজ:** Server থেকে data নেওয়া  

📌 **সহজভাবে:** তুমি শুধু data চাইছো, কিছু change করছো না।  

🧠**Real Life Example:** তুমি Facebook খুলে newsfeed দেখছো → তুমি শুধু পোস্টগুলো নিচ্ছো, কিছু বদলাচ্ছো না।  

💻 **JavaScript Example:**
```bash
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data));
```

🔥 **Key Point:**
- Data read করার জন্য
- Server এ কোনো পরিবর্তন করে না
- Safe method


---

### ✉️ 2️⃣ POST Method

👉 **কাজ:** নতুন data তৈরি করা  

📌 **সহজভাবে:** Server এ নতুন কিছু পাঠানো।  

🧠 **Real Life Example:** তুমি Facebook এ নতুন পোস্ট দিলে → সেটা database এ save হচ্ছে।  

💻 **JavaScript Example:**
```bash
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "This is a post",
    userId: 1
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

🔥 **Key Point:**

- নতুন data create করে
- Body তে data পাঠাতে হয়
- Database এ নতুন record তৈরি হয়


---

### 🔄 3️⃣ PUT Method

👉 **কাজ:** পুরো data update করা

📌 **সহজভাবে:** আগের data সম্পূর্ণ replace করা।

🧠 **Real Life Example:** তুমি তোমার profile info পুরোপুরি update করলে → পুরনোটা replace হয়ে যাবে।

💻 **Example:**
```bash
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Updated Title",
    body: "Updated Body",
    userId: 1
  })
})
```
🔥 **Key Point:**

- পুরো object replace করে
- BPartial update করে না
- সম্পূর্ণ নতুন version বসায়

---

### 🩹 4️⃣ PATCH Method

👉 **কাজ:** আংশিক update করা

📌 **সহজভাবে:** শুধু যেটা বদলাতে চাও, সেটাই বদলাবে।

🧠 **Real Life Example:** তুমি শুধু তোমার profile picture change করলে → পুরো profile না, শুধু একটা অংশ change।

💻 **Example:**
```bash
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Only Title Updated"
  })
})
```
🔥 **Key Point:**

- Partial update
- Efficient
- কম data যায়

---

### ❌ 5️⃣ DELETE Method

👉 **কাজ:** Data delete করা

📌 **সহজভাবে:** Server থেকে data মুছে ফেলা।

🧠 **Real Life Example:** তুমি Facebook পোস্ট delete করলে → সেটা database থেকে মুছে যায়।

💻 **Example:**
```bash
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
.then(res => console.log("Deleted"));
```
🔥 **Key Point:**

- Data remove করে
- Body দরকার হয় না (সাধারণত)