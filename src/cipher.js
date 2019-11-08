
window.cipher = {
  encode : (offset, string) => {
    let asciiChar, newAsciiChar, encodedString = "";
    for (let i = 0; i < string.length; i++) {
      asciiChar = string.charCodeAt(i);
      if (asciiChar > 64 && asciiChar < 91) {
        newAsciiChar = ( asciiChar - 65 + offset) % 26 + 65;
      } else {
        newAsciiChar = asciiChar;
      }
      encodedString = encodedString + String.fromCharCode(newAsciiChar);
    }
    return encodedString;
  },
  decode : (offset, string) => {
    let asciiChar, newAsciiChar, decodedString = "";
    for (let i = 0; i < string.length; i++) {
      asciiChar = string.charCodeAt(i);
      if (asciiChar > 64 && asciiChar < 91) {
        newAsciiChar = ( asciiChar - 65 - offset) % 26 + 65;
      } else {
        newAsciiChar = asciiChar;
      }
      decodedString = decodedString + String.fromCharCode(newAsciiChar);
    }
    return decodedString;
  }
}
