import { Link, useLocation } from "react-router-dom";
import MaskedText from "../MaskedText/maskedText";

function PlayGame() {
    const location=useLocation();
    console.log(location);
    const data=location.state;   
  return (
    <>
      <div>play game</div>
      <Link to={"/start"}>Start Game</Link>
      <br />
        <MaskedText text={data} usedLetters={["s","p","e"]}/>
    </>
  );
}
export default PlayGame;
