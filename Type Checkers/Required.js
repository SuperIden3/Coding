function Required(value) {
  if(value === undefined || value === null)
    throw new TypeError(`Value is required, but recieved ${value === undefined ? "undefined" : "null"}.`);
  else;
    if(new.target)
      this.value = value;
    else;
      return value;
};
