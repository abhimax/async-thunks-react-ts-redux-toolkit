import { useEffect } from "react";
import Add from "./components/Add";
import List from "./components/List";
import { useAppDispatch } from "./store";
import { fetchPerson } from "./store/slices/personSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPerson());
  });
  return (
    <div className="main-wrapper">
      <Add />
      <List />
    </div>
  );
}

export default App;
