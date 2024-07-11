//import logo from "./logo.svg";
import "./App.css";
import Calabreso from "./assets/calabreso.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondRend from "./components/CondRend";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  // const name = "Joaquim";
  const [userName] = useState("João");

  const cars = [
    { id: 1, brand: "Lamborghini", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Fiat", color: "Vermelho", newCar: false, km: 4420 },
    { id: 3, brand: "KIA", color: "Preto", newCar: false, km: 55560 },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    {
      id: 1,
      nome: "Jhonatham",
      idade: 15,
      profissão: "estudante",
      sexo: "masculino",
      raca: "asiático",
    },
    {
      id: 2,
      nome: "Micaela",
      idade: 25,
      profissão: "médica",
      sexo: "feminino",
      raca: "branca",
    },
    {
      id: 3,
      nome: "Felipe",
      idade: 22,
      profissão: "design",
      sexo: "masculino",
      raca: "negro",
    },
  ];

  return (
    <div className="App">
      <h1>Avançando em React!</h1>
      <div>
        {/*Imagem em public*/}
        <img src="/img1.jpg" alt="Pink Floyd" />
      </div>
      <div>
        {/*Imagem em assets*/}
        <img src={Calabreso} alt="Calabreso" />
      </div>
      <ManageData />
      <ListRender />
      <CondRend />
      {/* props */}
      <ShowUserName name={userName} />
      {/*destructing */}
      <CarDetails brand="Vw" km={0} color="blue" newCar={true} />
      {/*reaproveitsamento */}
      <CarDetails brand="Vw" km={400} color="black" newCar={false} />
      {/*reaproveitamento */}
      <CarDetails brand="Vw" km={1200} color="red" newCar={false} />
      {/*loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/*fragments */}
      <Fragments propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>Esse é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/*executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio da sessão */}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          nome={user.nome}
          idade={user.idade}
          sexo={user.sexo}
          raca={user.raca}
        />
      ))}
    </div>
  );
}

export default App;
