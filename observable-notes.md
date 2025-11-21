## Observables and Asynchronous Operations

**Observables** are a way to handle **asynchronous operations**.

---

### Observables vs. Promises

* You could also use **Promises** if the data **does not need to be streamed** (not sent all at once).
* **Example:** **Video streaming** (like Netflix) requires a **stream of data**, otherwise, users will be waiting forever for shows/movies to load.

#### JavaScript's Execution Model

* JS is **single-threaded**.
* Code is executed **line by line**.
* If code is taking a long time to execute, then code "behind" will need to wait until completed before being able to be run.

#### Promises

* A Promise returns data after a period of time.
    * It will return **response data** if the request was successful.
    * It will return an **error object** if the request was not successful.
* A promise **can not stream async data**. It always will return a **single value**.
* A promise is **native to JavaScript** while Observables are provided by the **RxJS library**.
* A promise will **always return data**, even if no code is going to use it.

#### Observables

* **Observables can handle streams of async data**; they can return **multiple values**.
* An observable will **only return data if that data will be used elsewhere by other code**.
* If it won't be used, it won't be returned.

---

### What is an Observable?

* An Observable is a function that converts the ordinary data stream into an **observable one**.
* Think of observables as a **wrapper around the ordinary data stream**.

---

### Observable Events and Observers



#### Observable Events

An Observable can emit 3 events:

1.  **Next**
2.  **Error**
3.  **Completion**

#### Observer and Subscription

* An **Observer** can **`subscribe()`** (to listen) to these events.
* An Observer can handle that event by passing the below **Handler functions** as a callback function to the **`subscribe()`** method.
    * **`Next()`**
    * **`Error()`**
    * **`Completion()`**