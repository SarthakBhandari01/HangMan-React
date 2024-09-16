import { getAllCharacters } from "./maskedTextUtil";

function MaskedText({ text, usedLetters }) {
  const letters = getAllCharacters(text, usedLetters);
  return letters.map((letter,index) => {
    return <div key={index} className="inline-block text-lg mr-1">{letter}</div>;
  });
}

export default MaskedText;
