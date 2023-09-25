var x: number = 10;
console.log(x);

function add(a: number, b: number): number {
  return a + b;
}

const output: number = add(10, 20);
console.log(output);

// execute the following cmd 
// tsc src/main.ts --outDir dist/scripts