import { Link } from "react-router-dom";

function PlayGame() {
  return (
    <>
      <div>play game</div>
      <Link to={"/start"}>Start Game</Link>
    </>
  );
}
export default PlayGame;
