# 5-review-2-classes

### **0:00 - 0:05 | Pop Quiz!**  

- What is the difference between an instance property and a static property?  
- How do we define private properties in JavaScript?  
- What is the purpose of using static methods?  

---

### **0:05 - 0:15 | Review: Classes, Private, and Static Properties**  

  ```js
  class User {
    #password; // Private property
    static userCount = 0; // Static property

    constructor(name, password) {
      this.name = name;
      this.#password = password;
      User.userCount++; // Increment user count
    }

    checkPassword(input) {
      return this.#password === input;
    }

    static getUserCount() {
      return User.userCount;
    }
  }

  const user1 = new User("Alice", "secret123");
  console.log(user1.checkPassword("wrong")); // false
  console.log(user1.checkPassword("secret123")); // true
  console.log(User.getUserCount()); // 1
  ```
- **Questions:**  
  1. Why can’t we access `user1.#password` directly?  
  2. What happens when we call `User.getUserCount()`?  

- **Key concepts:**
  - `#password` is a **private property**.
  - `userCount` is a **static property**, shared across all instances.  

---

### **0:15 - 0:40 | Implement a Product Class**  
- **Task:** Implement a `Product` class that has:  
  - **Private property:** `#price` (accessible only inside the class).  
  - **Instance property:** `name` (publicly accessible).  
  - **Static property:** `totalInventoryPrice` (tracks the sum of all product prices).  
  - **Methods:** `getPrice()` to retrieve `#price` and `Product.getTotalInventoryPrice()` to return `totalInventoryPrice`.  

**<details><summary>Example Solution</summary>**

  ```js
  class Product {
    #price;
    static totalInventoryPrice = 0;

    constructor(name, price) {
      this.name = name;
      this.#price = price;
      Product.totalInventoryPrice++;
    }

    getPrice() {
      return this.#price;
    }

    static getTotalInventoryPrice() {
      return Product.totalInventoryPrice;
    }
  }

  const item1 = new Product("Laptop", 1200);
  console.log(item1.getPrice()); // 1200
  console.log(Product.getTotalInventoryPrice()); // 1
  ```
</details>

**Questions:**
- What happens if you try to access a private property outside the class?  
- Can a static method access instance properties?  
- How is a private property different from a protected property (`_propertyName` by convention)?  

---

### **0:40 - 0:55 | Real-World Scenario: Posts**  

Open up the `vite-project`, run `npm i`, and then look in the `src/models/Post` file. There, you will find a `Post` class that you need to implement.

To test it out, just run `node src/models/Post` and uncomment out the test code provided at the bottom.

When you think it all works, try running the app!


### **0:55 - 1:00 | Wrap-up & Takeaways**  
- **Key Points:**  
  ✅ **Classes** create reusable object blueprints.  
  ✅ **Private properties (`#property`)** prevent direct access from outside the class.  
  ✅ **Static properties/methods** belong to the class, not instances.  
- **Challenge:**  
  - *Create a `LibraryBook` class with private properties for `#borrower`, instance properties for `title`, and static methods to track total books in the library.*  
