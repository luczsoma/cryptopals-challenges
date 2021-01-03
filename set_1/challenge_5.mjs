import { equalLengthBufferXor } from "./challenge_2.mjs";

export function repeatingKeyBufferXor(plaintextBuffer, keyBuffer) {
  const adjustedLengthkeyBuffer = Buffer.alloc(
    plaintextBuffer.length,
    keyBuffer
  );
  return equalLengthBufferXor(plaintextBuffer, adjustedLengthkeyBuffer);
}

export function challenge_5() {
  const plaintext =
    "Burning 'em, if you ain't quick and nimble\nI go crazy when I hear a cymbal";
  const expectedCiphertext =
    "0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f";
  const key = "ICE";

  const actualCiphertext = repeatingKeyBufferXor(
    Buffer.from(plaintext),
    Buffer.from(key)
  ).toString("hex");

  return expectedCiphertext === actualCiphertext;
}
