const range = (start,end,step = 1) => {
    if(start !== end && typeof start === "number" && typeof end === "number" && (step !== Infinity && start !== Infinity && end !== Infinity)) {
        let array = []
        if(start < end) {
            for(let i = start; i <= end; i += step) {
                array.push(i)
            }
        } else {
            for(let j = start; j >= end; j -= step) {
                array.push(j)
            }
        }
        return array
    } else {
        if(start === end) {
          return new RangeError("Arguments are the same.")
        } else if(typeof start !== "number" || typeof end !== "number") {
          return new RangeError("Arguments are not type of number.")
        } else if(start === Infinity || end === Infinity || step === Infinity) {
          return new RangeError("Arguments are Infinity.")
        } else {
          return new Error(undefined)
        }
    }
}
// Arguments must be type of number, not equal to each other, and must not equal to Infinity, for preventing a crash.
export default range;
