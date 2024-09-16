import { Link } from "react-router-dom"

function StartGame(){
    return<>
     <div>Start game</div>
     <Link to={"/play"}>play game</Link>
    </>
}
export default StartGame