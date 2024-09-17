import { Link, useLocation } from "react-router-dom";
import MaskedText from "../MaskedText/maskedText";
import LetterButtons from "../LetterButtons/letterButtons";
import { useState } from "react";
import Hangman from "../HangMan/Hangman";

function PlayGame() {
  const location = useLocation();
  const wordSelected = location.state?.wordSelected;
  const [usedLetters,setUsedLetters]=useState([]);
  const [step,setStep]=useState(1);

  function onLetterClick(letter){
    if(wordSelected.toUpperCase().includes(letter)){
      console.log("correct");
    }else{
      console.log("incorrect")
      setStep(step+1);
    }
    setUsedLetters([...usedLetters,letter]);
  }

  return (
    <>
      <div>play game</div>
      <br />
      <MaskedText text={wordSelected} usedLetters={usedLetters} />
      <hr />
      <LetterButtons usedLetters={usedLetters} text={wordSelected} onLetterClick={onLetterClick} />
      <div>
        <Hangman step={step}/>
      </div>
      <Link className="underline text-blue-600" to={"/start"}>Start Game</Link>
    </>
  );
}
export default PlayGame;
