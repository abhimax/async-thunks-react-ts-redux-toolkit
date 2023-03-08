import { useAppSelector } from "../store";

const List = () => {
  const persons = useAppSelector((state) => state.person.persons);
  const loadedPersons = [];
  for (const key in persons) {
    loadedPersons.push({
      id: key,
      name: persons[key].name,
    });
  }
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
          {loadedPersons &&
            loadedPersons.length > 0 &&
            loadedPersons.map((person) => {
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
