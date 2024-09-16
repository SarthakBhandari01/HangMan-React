import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../TextInputForm/textInputFormContainer";

function StartGame() {
  const navigate = useNavigate();
  return (
    <>
      <div>Start game</div>
      <TextInputFormContainer onSubmit={(value) => navigate("/play",{state:value})} />
    </>
  );
}
export default StartGame;
