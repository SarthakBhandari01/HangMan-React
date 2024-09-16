const ALPHABETS = new Array(26)
  .fill("")
  .map((e, index) => String.fromCharCode(65 + index));

function LetterButtons({ usedLetters }) {
  const selectedLetters = new Set(usedLetters.join("").toUpperCase().split(""));

  function buttonStyle(letter) {
    if (selectedLetters.has(letter)) {
      return "bg-red-500 border-red-700 hover:bg-red-700";
    } else {
      return "bg-blue-500 border-blue-700 hover:bg-blue-700";
    }
  }

  function handleOnClick(event) {
    const character = event.target.value;
    onLetterClick?.(character);
  }
  const buttons = ALPHABETS.map((letter, index) => {
    return (
      <button
        onClick={handleOnClick}
        value={letter}
        disabled={selectedLetters.has(letter)}
        className={`w-12 h-12 m-1 rounded-md focus: outline-none text-white  ${buttonStyle(
          letter
        )}`}
        key={index}
      >
        {letter}
      </button>
    );
  });
  return <>{buttons}</>;
}

export default LetterButtons;
