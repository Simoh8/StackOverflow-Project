import { performance } from 'perf_hooks';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let start: number;

rl.on('line', (input: string) => {
  if (!start) {
    start = performance.now();
  }
  // Code to process input goes here
  const end = performance.now();
  const elapsed = Math.round(end - start); // elapsed time in milliseconds
  const elapsedString = `${elapsed} ms ago`;
  console.log(elapsedString);

  start = performance.now(); // reset start time for next input
});
