function countElements(tagName) {
  if (typeof tagName !== "string" || tagName.length === 0) {
    console.error("tagname phải là một chuỗi không rỗng");
  }
  const elements = document.getElementsByTagName(tagName);
  return elements.length;
}

console.log(countElements("DIV")); // 5
console.log(countElements("p")); // 2
console.log(countElements());
console.log(countElements(123));
console.log(countElements("1234"));
