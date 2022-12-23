# `rsra` Function
An **asynchronous generator function** that goes over all the values in a `ReadableStream`.

Note: Use `for await...of` instead of `for...of` to avoid `TypeError: rsra is not a function or its return value is not iterable`.

```js
(async function main(...args) {
  let myStream = new ReadableStream({
    start(c) {
      for(let i = 1; i <= 10; i++)
        c.enqueue(i);
    }
  });
  for await(let value of rsra(myStream))
    console.log(value);
})();
```
