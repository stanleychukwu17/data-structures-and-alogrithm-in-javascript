function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}
  
let james = reverseStringRecursive('yoyo master');
console.log(james);