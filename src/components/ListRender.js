import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["José", "Guilherme", "Mario", "Micaela"]);

  const [users, setUsers] = useState([
    { id: 1, name: "José", age: 23 },
    { id: 2, name: "Guilherme", age: 40 },
    { id: 3, name: "Mario", age: 27 },
    { id: 4, name: "Micaela", age: 34 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((users) => randomNumber !== users.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((users) => (
          <li key={users.id}>
            {users.name} - {users.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar dado aleatório</button>
    </div>
  );
};

export default ListRender;
