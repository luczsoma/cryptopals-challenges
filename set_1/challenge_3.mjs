import { equalLengthBufferXor } from "./challenge_2";

export function challenge_3() {
  const sourceHex =
    "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";
  const sourceBuffer = Buffer.from(sourceHex, "hex");

  const keyCandidates = [];

  // A-Z
  for (let i = 65; i <= 90; i++) {
    keyCandidates.push(String.fromCharCode(i));
  }

  // a-z
  for (let i = 97; i <= 122; i++) {
    keyCandidates.push(String.fromCharCode(i));
  }

  const messageCandidates = new Map();

  for (const keyCandidate of keyCandidates) {
    const key = Buffer.alloc(sourceBuffer.length, keyCandidate);
    const messageCandidate = equalLengthBufferXor(sourceBuffer, key).toString();
    const numberOfLoneSpaces = (messageCandidate.match(/[^ ] [^ ]/g) || [])
      .length;
    messageCandidates.has(numberOfLoneSpaces)
      ? messageCandidates.get(numberOfLoneSpaces).push(messageCandidate)
      : messageCandidates.set(numberOfLoneSpaces, [messageCandidate]);
  }

  const bestCandidates = messageCandidates.get(
    Math.max(...Array.from(messageCandidates.keys()))
  );
  if (bestCandidates.length !== 1) {
    return false;
  }

  console.log(bestCandidates.pop());
  return true;
}
