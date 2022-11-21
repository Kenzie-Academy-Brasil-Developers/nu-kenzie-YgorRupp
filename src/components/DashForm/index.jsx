import React, { useState } from "react";

const DashForm = ({ index, listTransactions, createTransactions }) => {
  const [formData, setFormData] = useState({
    description: "",
    type: "",
    value: "",
  });

  const submit = (event) => {
    event.preventDefault();
    createTransactions(formData);
    setFormData({
      description: "",
      type: "",
      value: "",
    });
  };

  return (
    <form onSubmit={submit}>
      <p>Descrição</p>

      <input
        className="firstInput"
        type="text"
        value={formData.description}
        placeholder="Digite aqui sua descrição"
        onChange={(event) =>
          setFormData({ ...formData, description: event.target.value })
        }
      />

      <span>Ex: Compra de roupas</span>

      <div className="containerFormSelect">
        <div className="firstInputSelect">
          <label htmlFor="">Valor</label>
          <input
            type="number"
            value={formData.value}
            placeholder="1"
            onChange={(event) =>
              setFormData({ ...formData, value: event.target.value })
            }
          />
        </div>

        <div className="secondInputSelect">
          <label htmlFor="">Tipo de valor</label>
          <select
            name=""
            id=""
            defaultValue={formData.type}
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
          >
            <option key={index} value="">
              Escolha
            </option>
            <option key={index} value="entrada">
              Entrada
            </option>
            <option key={index} value="saida">
              Saida
            </option>
          </select>
        </div>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default DashForm;
