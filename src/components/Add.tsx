import { useRef } from "react";
import { useAppDispatch } from "../store";
import { addPerson, savePerson } from "../store/slices/personSlice";

const Add = () => {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    //dispatch(addPerson({ name: name.current }));
    dispatch(savePerson(name.current));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="">Person Name:</label>
      <input onChange={(e) => (name.current = e.target.value)} />
      <button>Add</button>
    </form>
  );
};
export default Add;
