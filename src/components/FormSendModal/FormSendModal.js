import React, { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";
import "./FormSendModal.scss";

export default function FormSendModal(props) {
  const { sendTrello } = props; // agregamos la funcion sendTrello al props
  const [formValue, setFormValue] = useState({    //formValue (funcion del estado), setFormValue(funcion que actualiza el estado)
    name: "",
    trello: "",
  });

  const onFormChange = event => { // los dos imputs se actualizan con esta funcion
      setFormValue({
          ...formValue, //tomame todo el contenido que tengas actualmente con el expres operartor y actalizalo con lo siguiente
          [event.target.name]: event.target.value // con esto conseguimos el name="name" del input de <TextField
      })
  }

  return (
    <div className="form-send-trello">
      <h2 className="form-send-trello__title">Enviar Trello</h2>
      <form
        className="form-send-trello__form"
        onSubmit={(event) => sendTrello(event, formValue)}
        onChange={onFormChange} //cuando el formulario se actualice ejecutamos la funcion
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-trello__form-name"
              type="text"
              name="name"
              placeholder="Nombre"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-trello__form-textarea"
              name="trello"
              multiline
              rows="6"
              placeholder="Escribe tu texto aqui..."
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <Button className="form-send-trello__form-button" type="submit">
              Crear Trello
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
