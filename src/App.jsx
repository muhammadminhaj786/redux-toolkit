
import { Navbar } from "./components";
import { useDispatch } from "react-redux";
import { addCounter } from "./store/slices/counterSlice";

function App() {
  
  const dispatch = useDispatch();
  const changeCountValue = () => {
    dispatch(addCounter());
  };

  console.log("app");
  return (
    <>
      <h1>PARENT COMPONENT</h1>
      <Navbar />

      <button onClick={changeCountValue}>add count</button>
    </>
  );
}

export default App;