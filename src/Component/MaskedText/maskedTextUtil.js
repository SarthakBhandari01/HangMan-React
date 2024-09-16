export function getAllCharacters(word, usedLetters) {
  usedLetters = usedLetters.map((char) => {
    return char.toUpperCase();
  });
  const st = new Set(usedLetters);
  const characters = word
    .toUpperCase()
    .split("")
    .map((char) => {
      if (st.has(char)) {
        return char;
      } else {
        return "_";
      }
    });
  return characters;
}
