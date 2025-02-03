const fs = require("fs");
setImmediate(() => console.log("Set Immediate"));
setTimeout(() => console.log("Timer expired"), 1000);
Promise.resolve(process.nextTick(() => console.log("inner nextTck nside promise"))).then(
  console.log
);
fs.readFile("file.txt", "utf8", () => {
  console.log("File reading CB");
});
process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTck"));
  console.log("nxt tick");
});

console.log("Last line of the file");

// Last line of the file
// nxt tick
// innr nextTick
// Promise
// Timer expired
// Set Immediate
// File reading CB
