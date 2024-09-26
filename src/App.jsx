import { Navigate, Route, Routes } from "react-router-dom";
import StartGame from "./Component/Pages/start";
import PlayGame from "./Component/Pages/Play";
function App() {
  return (
    <>
      <div className="w-full text-3xl px-3 h-[50px] bg-blue-200 flex items-center justify-center font-semibold text-black">
        Hang Man Game
      </div>
      <Routes>
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
        <Route path="*" element={<Navigate to={"/start"} />} />
      </Routes>
    </>
  );
}

export default App;
