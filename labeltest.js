let i = 0;
let j = 8;

checkIAndJ: while (i < 4) {
  console.log(`i: ${i}`);
  i += 1;

  checkJ: while (j > 4) {
    console.log(`j: ${j}`);
    j -= 1;
    if (j % 2 === 0) continue checkJ;
    console.log(`${j} is odd.`);
  }
  
  console.log(`i = ${i}`);
  console.log(`j = ${j}`);
}
