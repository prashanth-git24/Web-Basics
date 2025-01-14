function hello() {
  console.log("hello");
  return;
}
setInterval(() => {
  console.log("Interval");
}, 4000);
console.log("chai");
hello();
