export function hexToBase64(hex) {
  return Buffer.from(hex, "hex").toString("base64");
}

export function challenge_1() {
  const sourceHex =
    "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d";
  const expectedResultBase64 =
    "SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t";
  const actualResultBase64 = hexToBase64(sourceHex);
  return expectedResultBase64 === actualResultBase64;
}
