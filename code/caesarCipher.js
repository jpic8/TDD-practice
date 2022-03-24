function caeserCipher(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    const index = alphabet.indexOf(message[i].toLowerCase());
    if (index === -1) {
      encryptedMessage += message[i];
      continue;
    }
    const newIndex = (index + 1) % 26;
    const newLetter = alphabet[newIndex];
    encryptedMessage +=
      message[i] === message[i].toUpperCase()
        ? newLetter.toUpperCase()
        : newLetter;
  }
  return encryptedMessage;
}

module.exports = caeserCipher;
