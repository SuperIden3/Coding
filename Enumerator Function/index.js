/**
 * Goes over the keys and values of an array or an object.
 * @param {any[] | object} obj The object to iterate over.
 * @yields {{index: number, value: any} | {key: string, index: number, value: any}} The object in which contains each key, index, and value in `obj`.
 */
function* enumerate(obj) {
  if (Array.isArray(obj)) {
    for (let index in obj)
      yield {
        index: parseInt(index),
        value: obj[index]
      };
  } else {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let vals = [];
    for (let i in keys) {
      let x = {
        key: keys[i],
        index: parseInt(i),
        value: values[i]
      }
      yield x;
    }
  }
}
