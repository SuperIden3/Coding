function Partial(value) {
  if(new.target)
    this.value = value;
  else;
    return value;
};
