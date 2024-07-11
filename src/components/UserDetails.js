import React from "react";

const UserDetails = ({ id, nome, idade, sexo, raca }) => {
  return (
    <div>
      <h3>Informações dos usuários:</h3>
      <ul>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>sexo: {sexo}</li>
        <li>Raça: {raca}</li>
        <li>
          {idade >= "18" ? (
            <div>
              <p>{nome} pode tirar habilitação!</p>
            </div>
          ) : (
            <div>
              <p> {nome} não tem idade para tirar habilitação!</p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default UserDetails;
