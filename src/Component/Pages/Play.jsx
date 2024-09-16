import { Link, useLocation } from "react-router-dom";
import MaskedText from "../MaskedText/maskedText";
import LetterButtons from "../LetterButtons/letterButtons";

function PlayGame() {
  const location = useLocation();
  const data = location.state;
  return (
    <>
      <div>play game</div>
      <Link to={"/start"}>Start Game</Link>
      <br />
      <MaskedText text={"humble"} usedLetters={["s", "p", "e"]} />
      <hr />
      <LetterButtons usedLetters={["s", "p", "e"]} />
    </>
  );
}
export default PlayGame;
