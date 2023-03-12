/**
 * Reverse a sentence.
 * @param {string} string The sentence to reverse.
 */
function reverseSentence(string) {
  let punctuation = string.charAt(string.length - 1);
  string = string.replace(punctuation, "");
  let arr = string.split(" ");
  arr.reverse();
  if(arr[arr.length - 1].charAt(0) === arr[arr.length - 1].charAt(0).toUpperCase())
    arr[arr.length - 1] = arr[arr.length - 1].replace(arr[arr.length - 1].charAt(0),arr[arr.length - 1].charAt(0).toLowerCase());
  else
    arr[arr.length - 1] = arr[arr.length - 1];
  arr[0] = arr[0].replace(arr[0].charAt(0),arr[0].charAt(0).toUpperCase());
  arr[arr.length - 1] += punctuation;
  return arr.join(" ");
}
export default reverseSentence;
