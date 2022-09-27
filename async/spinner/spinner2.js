const spins = (['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']);
let counter = 100;
const spinner = function () {
  for (let sp of spins) {
    setTimeout(() => {
      process.stdout.write('\r' + sp);
    }, counter += 200);
  }
}
