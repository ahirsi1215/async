const sentence = "hello there from lighthouse labs";
const delay = 50
function typewriter() {
let counter = 1
  for (const char of sentence) {
    setTimeout(() => {
    process.stdout.write(char);
    }, delay * counter++);
  }
  setTimeout(() => {
    process.stdout.write("\n");
    }, delay * counter++);
  }
  typewriter();

