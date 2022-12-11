Here, this is where I code `JavaScript`/`NodeJS` files.

```js
alert('Check out the code!')
```

`JavaScript` is what creates the behavior of a page. It is a **back-end** code.

For example, if you want to create a button that shows you the date, that's on your device, printed on a new line, you would use `JavaScript`, along with some `HTML`.

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="button" value="Date" onclick="document.querySelector('#demo').innerHTML = Date()" />
    <p id="date"></p>
  </body>
</html>
```
