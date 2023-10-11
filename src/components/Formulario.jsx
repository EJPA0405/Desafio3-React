import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  // Función al enviar el formulario
  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("enviando formulario");

    //Función al escribir sobre el input del formulario
  };
  const capturaInput = (e) => {
    //console.log(e.target.value);
    setNombre(e.target.value);
    setEmail(e.target.value);
    setEdad(e.target.value);
    setCargo(e.target.value);
    setTelefono(e.target.value);
  };

  return (
    <>
      <h3>Agregar colaborador</h3>
      <form className="formulario" onSubmit={enviarFormulario}>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del colaborador"
            className="form-control"
            onChange={capturaInput}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="email"
            name="email"
            placeholder="Email del colaborador"
            className="form-control"
            onChange={capturaInput}
            value={email}
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            name="edad"
            placeholder="Edad del colaborador"
            className="form-control"
            onChange={capturaInput}
            value={edad}
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            name="cargo"
            placeholder="Cargo del colaborador"
            className="form-control"
            onChange={capturaInput}
            value={cargo}
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono del colaborador"
            className="form-control"
            onChange={capturaInput}
            value={telefono}
          />
        </div>
        <br />
        <div className="form-group">
          <button type="submit" className=" form-control btn btn-success">
            Agregar colaborador
          </button>
        </div>
        <br />
      </form>
    </>
  );
};
export default Formulario;
