import { Route, Routes } from "react-router-dom";
import TextInputFormContainer from "./Component/TextInputForm/textInputFormContainer";
import StartGame from "./Component/Pages/start";
import PlayGame from "./Component/Pages/Play";
function App() {
  return (
    <>
      <div className="w-full text-3xl px-3 h-[50px] bg-blue-200 flex items-center justify-center font-semibold text-black">
        Hang Man Game
      </div>
      {/* <div className="text-3xl text-center font-semibold">
          Welcome to HangMan
        </div>
        //{" "}
        <TextInputFormContainer
          onSubmit={(value) => console.log("submitted with the value", value)}
        /> */}
      <Routes>
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
