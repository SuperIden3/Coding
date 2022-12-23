/**
 * Reads, iterates, and yields over all the values of a ReadableStream (`readableStream`).
 * @param {ReadableStream} readableStream The `ReadableStream` to read.
 * @yields {any} The iterated value of `readableStream`.
 * @returns {any[]} All the iterated values of `readableStream` in an array.
 */
const rsra = async function* readableStreamReadAll(readableStream) {
  let reader = readableStream.getReader();
  let readValue = await reader.read();
  let readValues = [];
  while (readValue.done === false) {
    yield (readValue.value);
    readValues.push(readValue);
    readValue = await reader.read();
  }
  reader.releaseLock();
  return readValues;
}
