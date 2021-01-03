import { challenge_1 } from "./set_1/challenge_1.mjs";
import { challenge_2 } from "./set_1/challenge_2.mjs";
import { challenge_3 } from "./set_1/challenge_3.mjs";
import { challenge_4 } from "./set_1/challenge_4.mjs";
import { challenge_5 } from "./set_1/challenge_5.mjs";

function main() {
  console.log(`Set 1 / Challenge 1: ${challenge_1() ? "OK" : "error"}`);
  console.log(`Set 1 / Challenge 2: ${challenge_2() ? "OK" : "error"}`);
  console.log(`Set 1 / Challenge 3: ${challenge_3() ? "OK" : "error"}`);
  console.log(`Set 1 / Challenge 4: ${challenge_4() ? "OK" : "error"}`);
  console.log(`Set 1 / Challenge 5: ${challenge_5() ? "OK" : "error"}`);
}

main();
