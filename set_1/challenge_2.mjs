export function equalLengthBufferXor(buffer1, buffer2) {
  if (buffer1.length !== buffer2.length) {
    throw new Error("inputs are not of same size");
  }

  const result = Buffer.alloc(buffer1.length);
  for (let i = 0; i < buffer1.length; i++) {
    result[i] = buffer1[i] ^ buffer2[i];
  }

  return result;
}

export function equalLengthHexXor(hex1, hex2) {
  const evenPaddedHex1 = hex1.length % 2 === 0 ? hex1 : `0${hex1}`;
  const evenPaddedHex2 = hex2.length % 2 === 0 ? hex2 : `0${hex2}`;

  if (evenPaddedHex1.length !== evenPaddedHex2.length) {
    throw new Error("inputs are not of same size");
  }

  const buffer1 = Buffer.from(evenPaddedHex1, "hex");
  const buffer2 = Buffer.from(evenPaddedHex2, "hex");

  return equalLengthBufferXor(buffer1, buffer2).toString("hex");
}

export function challenge_2() {
  const hex1 = "1c0111001f010100061a024b53535009181c";
  const hex2 = "686974207468652062756c6c277320657965";
  const expectedHexXorResult = "746865206b696420646f6e277420706c6179";
  const actualHexXorResult = equalLengthHexXor(hex1, hex2);
  return expectedHexXorResult === actualHexXorResult;
}
