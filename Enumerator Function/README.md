# Enumerator Function
The `enumerate` function goes over the **keys**, **indexes**, and **values** of an object, or the **indexes** and **values** of an array.

This is a **generator function**, so use it in `for...of` loops for getting all values at once.

```js
const myObject = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5
};
const iterator = enumerate(myObject);
/**
 * @type {Array<{key: string, index: number, value: any}>}
 */
const values = [];
for(const value of iterator)
	values.push(value);
console.log("Enumerating", myObject, "...");
console.log("Values:", values);
```
```js
const myArray = [1, 2, 3, 4, 5];
const iterator = enumerate(myArray);
/**
 * @type {Array<{index: number, value: any}>}
 */
const values = [];
for(const value of iterator)
	values.push(value);
console.log("Enumerating", myArray, "...");
console.log("Values:", values);
```
