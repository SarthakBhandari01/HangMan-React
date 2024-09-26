import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../TextInputForm/textInputFormContainer";

function StartGame() {
  const navigate = useNavigate();
  return (
    <>
      <div className="font-bold text-2xl text-center my-4">Start Game</div>
      <div className="my-4">
        <TextInputFormContainer
          onSubmit={(value) =>
            navigate("/play", { state: { wordSelected: value } })
          }
        />
      </div>
    </>
  );
}
export default StartGame;
