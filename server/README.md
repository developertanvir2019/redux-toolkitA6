# Learn with Sumit JSON Server

আপনাদের যে সকল প্রোজেক্ট এর জন্যে Server প্রয়োজন, সে সকল প্রোজেক্ট এর জন্যে এই সার্ভার টি লোকাল মেশিনে ব্যবহার করতে পারেন । এটি প্রথমবার চালাতে কি কি করতে হবে না নিচে বলে দেয়া আছে ।

### লক্ষনীয়ঃ

- এই Fake Server কোথাও হোষ্ট করার কোনো প্রয়োজন নেই । আপনারা এসাইনমেন্ট করার সময় http://localhost:9000 দিয়েই এসাইনমেন্ট করবেন এবং এসাইনমেন্ট শেষে Frontend এর অংশটুকু localhost দিয়েই Netlify.com কিংবা Render.com এ হোষ্ট করবেন । Backend/এই সার্ভার কোথাও হোস্ট করার প্রয়োজন নেই ।
- এই JSON Server টি আপনাকে Port 9000 এই রান করতে হবে । আপনার এসাইনমেন্টটি যখন পর্যালোচনা করা হবে, তখন আমাদের মেশিনেও Port 9000 এ সার্ভার রান করা থাকবে । আপনি কোনো কারণে Port পরিবর্তন করলে আপনার এসাইনমেন্ট আমাদের মেশিনে ঠিক ভাবে কাজ নাও করতে পারে, এতে আপনি পূর্ণ মার্ক নাও পেতে পারেন ।
- মনের ভূলে বা সখে Route/API endpoint গুলো পরিবর্তন করা যাবে না । যেমনঃ http://localhost:9000/blogs এই রাউটকে আপনি পরিবর্তন করলেন http://localhost:9000/newsposts -তে । এটি কোনো ভাবেই করা যাবে না ।

### JSON Server প্রথমবার রান করার নিয়মঃ

- প্রোজেক্ট ফোল্ডারে টার্মিনাল চালু করে npm দিয়ে ডিপেন্ডেন্সি প্যাকেজ গুলো ইন্সটল করে নিন।

```
npm install
```

- প্যাকেজ গুলো ইন্সটল হয়ে গেলে npm start লিখে JSON Server চালু করে নিন।

```
npm start
```

- JSON Server চালু হলে http://localhost:9000 এ গেলে API এর ডকুমেন্টেশন দেখতে পারবেন ।
feature all done..
