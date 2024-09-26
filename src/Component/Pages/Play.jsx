import { Link, useLocation, useNavigate } from "react-router-dom";
import MaskedText from "../MaskedText/maskedText";
import LetterButtons from "../LetterButtons/letterButtons";
import { useState } from "react";
import Hangman from "../HangMan/Hangman";
import GameOverPrompt from "../GameOverPrompt/GameOverPrompt";

function PlayGame() {
  const location = useLocation();
  const wordSelected = location.state?.wordSelected;
  const [usedLetters, setUsedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [characters, setCharacters] = useState(
    wordSelected.toUpperCase().split("")
  );

  const navigate = useNavigate();
  function handleRestart() {
    navigate("/start");
    console.log("new Game");
  }

  function onLetterClick(letter) {
    if (wordSelected.toUpperCase().includes(letter)) {
      const updatedCharacters = characters.filter((char) => char !== letter);
      setCharacters([...updatedCharacters]);
    } else {
      setStep(step + 1);
    }
    setUsedLetters([...usedLetters, letter]);
  }
  return (
    <>
      {!characters.length && (
        <GameOverPrompt win={true} restart={handleRestart} />
      )}
      {step >= 7 && <GameOverPrompt win={false} restart={handleRestart} />}
      <div className="flex flex-col gap-4 items-center">
        <div className="font-semibold text-3xl my-3">Play Game</div>
        <div>
          <MaskedText text={wordSelected} usedLetters={usedLetters} />
        </div>
        <hr />
        <div className="flex justify-between items-center p-3">
          <div className="basis-2/4">
            <LetterButtons
              usedLetters={usedLetters}
              text={wordSelected}
              onLetterClick={onLetterClick}
            />
          </div>
          <div className="basis-2/4 flex justify-center">
            <Hangman step={step} />
          </div>
        </div>
        <div className="mt-2">
          <Link to={"/start"}>
            <button className="py-2 px-4 bg-blue-900 rounded-md text-white hover:bg-blue-950 ">
              Go To Start Game
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default PlayGame;
