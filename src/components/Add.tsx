import { useRef } from "react";
import { useAppDispatch } from "../store";
import { addPerson } from "../store/slices/personSlice";

const Add = () => {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPerson({ name: name.current }));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="">Person Name:</label>
      <input
        onChange={(e) => (name.current = e.target.value)}
        className="border rounded-md p-2 mx-2"
      />
      <button className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700">
        Add
      </button>
    </form>
  );
};
export default Add;
