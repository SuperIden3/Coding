var _chunk = document.querySelector("input#_chunk");
var _write = document.querySelector("input#_write");
var _read = document.querySelector("input#_read");
var _chunks = document.querySelector("ol#_chunks");
var _readChunks = document.querySelector("ol#_readChunks");

console.debug({
  chunk: _chunk,
  write: _write,
  read: _read,
  chunks: _chunks
});

// @ts-ignore
const stream = new TransformStream({
  start(c) {
    console.log("Controller:", c);
  },
  transform(ch, c) {
    c.enqueue(ch);
  }
});

_write.addEventListener("click", (e) => {
  let element = document.createElement("li");
  element.innerHTML = `<p>${_chunk.value}</p>`;
  _chunks.appendChild(element);
  let writer = stream.writable.getWriter();
  writer.write(_chunk.value);
  console.log("Wrote chunk into", _chunks, ":", _chunk.value);
  writer.releaseLock();
});
_read.addEventListener("click", async (e) => {
  let reader = stream.readable.getReader();
  let element = document.createElement("li");
  let readValue = await reader.read();
  element.innerHTML = `<p>${readValue.value}</p>`;
  _readChunks.appendChild(element);
  console.log("Read value:", readValue);
  reader.releaseLock();
});
