/**
 * Check if a value is one of the expected types.
 * @param {...string} types
 * @returns {{types: string[], match: (value: any) => {value: any, valueType: any, matchesType: {yes: boolean, type: string}}, expectedTypes: string[], formatter: Intl.ListFormat}}
 */
function Union(...types) {
  return {
    types,
    match(value) {
      const listFormatter = new Intl.ListFormat("en", {
        style: "long",
        type: "disjunction"
      });
    const arr = new Set();
      for (const i of this.types)
        if (typeof value === i)
          arr.add(true);
        else;
          arr.add(false);
      if(arr.has(true))
        return {
          value,
          valueType: typeof value,
          matchesType: {
            yes: true,
            type: (() => {
              for (const i of types)
                if (typeof value === i)
                  return i;
            })()
          },
          expectedTypes: types,
          formatter: listFormatter
        };
      else;
        throw new TypeError(`Expected a${types[0].startsWith("a") || types[0].startsWith("e") || types[0].startsWith("i") || types[0].startsWith("o") || types[0].startsWith("u") ? "n" : ""} ${listFormatter.format(types)}, but recieved ${typeof value}.`);
    }
  };
};
