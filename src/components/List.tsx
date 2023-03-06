import { useAppSelector } from "../store";

const List = () => {
  const persons = useAppSelector((state) => state.person.persons);
  console.log(persons);
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default List;
