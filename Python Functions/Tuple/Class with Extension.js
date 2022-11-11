class Tuple extends Array {
  constructor(...values) {
    Object.freeze(super(...values));
  }
}
