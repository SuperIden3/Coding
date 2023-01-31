const cet = function createEventTarget(options = {}) {
  const et = new EventTarget();
  if (typeof options === "object" && !Array.isArray(options))
    Object.assign(et, options);
  else
  if (Array.isArray)
    throw new TypeError("Options for function must be an object, not an array.");
  else if (typeof options !== "object")
    throw new TypeError(`Options for function must be an object, not type of ${Array.isArray(options) ? "array" : typeof options}`);
  return et;
};
