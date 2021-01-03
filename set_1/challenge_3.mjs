import { equalLengthBufferXor } from "./challenge_2.mjs";

export function findByHighestFrequency(
  messageCandidates,
  messageCharactersAlphabet,
  findThisManyHighest
) {
  let messageCandidatesByScore = new Map();

  for (const messageCandidate of messageCandidates) {
    const goodCharacters = messageCandidate
      .split("")
      .map((c) => messageCharactersAlphabet.includes(c))
      .reduce((acc, curr) => acc + curr, 0);
    messageCandidatesByScore.has(goodCharacters)
      ? messageCandidatesByScore.get(goodCharacters).push(messageCandidate)
      : messageCandidatesByScore.set(goodCharacters, [messageCandidate]);
  }

  messageCandidatesByScore = new Map(
    [...messageCandidatesByScore.entries()].sort(
      ([keyA], [keyB]) => keyB - keyA
    )
  );

  return Array.from(messageCandidatesByScore.values())
    .slice(0, findThisManyHighest)
    .flat();
}

export function singleCharacterXor(
  sourceHex,
  keyAlphabet,
  messageCharactersAlphabet,
  treshold
) {
  const sourceBuffer = Buffer.from(sourceHex, "hex");

  const messageCandidates = [];
  for (const keyCandidate of keyAlphabet) {
    const key = Buffer.alloc(sourceBuffer.length, keyCandidate);
    messageCandidates.push(equalLengthBufferXor(sourceBuffer, key).toString());
  }

  return findByHighestFrequency(
    messageCandidates,
    messageCharactersAlphabet,
    treshold
  );
}

export function challenge_3() {
  const sourceHex =
    "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";
  const bestCandidates = singleCharacterXor(
    sourceHex,
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    2
  );

  if (bestCandidates.length === 0) {
    return false;
  }

  console.log(bestCandidates);
  return true;
}
