import { challenge_1 } from "./set_1/challenge_1";
import { challenge_2 } from "./set_1/challenge_2";
import { challenge_3 } from "./set_1/challenge_3";

function main() {
  console.log(`Set 1 / Challenge 1: ${challenge_1() ? "OK" : "error"}`);
  console.log(`Set 1 / Challenge 2: ${challenge_2() ? "OK" : "error"}`);
  console.log(`Set 1 / Challenge 3: ${challenge_3() ? "OK" : "error"}`);
}

main();
