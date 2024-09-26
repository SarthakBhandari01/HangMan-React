import { getAllCharacters } from "./maskedTextUtil";

function MaskedText({ text, usedLetters }) {
  const letters = getAllCharacters(text, usedLetters);
  return letters?.map((letter, index) => {
    return (
      <div
        key={index}
        className="inline-block text-4xl mx-1 border border-gray-500 p-1 rounded-md"
      >
        {letter}
      </div>
    );
  });
}

export default MaskedText;
