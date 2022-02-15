import React, { useState } from "react";
import "./CreateModal.scss";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendModal from "../FormSendModal/FormSendModal";
import { TRELLO_STORAGE } from "../../utils/constants";

export default function CreateModal(props) {
  const { setToastProps, allTrellos } = props;
  const [isOpenModal, setIsOpenModal] = useState(false); //

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTrello = (event, formValue) => { //recibe un event y un formValue
    event.preventDefault();
    const { name, trello } = formValue;
    let allTrelloArray = []; // creamos un array vacio

    if (allTrellos) { // rellenamos el array si hay contenido dentro de el
       allTrelloArray = allTrellos;
    }

    if (!name || !trello) {
      setToastProps({
        open: true,
        text: "WARNING: debes rellenar los campos vacios!",
      });
    } else {
      formValue.time = moment();
      allTrelloArray.push(formValue);
      localStorage.setItem(TRELLO_STORAGE, JSON.stringify(allTrelloArray)); // creamos una key llamada TRELLO_STORAGE y lo guardamos en el localStorage y como valor le pasamos allTrelloArray convertido en JSON

      setToastProps({
        open: true,
        text: "Tello creado correctamente",
      });
      closeModal(); // cerramos el modal
    }
    allTrelloArray = []; // volvemos a vaciar el array
  };

  return (
    <div className="create-modal">
      <Fab
        className="create-modal__open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>

      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSendModal sendTrello={sendTrello} />
      </ModalContainer>
    </div>
  );
}
