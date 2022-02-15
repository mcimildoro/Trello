import { useEffect, useState } from "react";
import React from "./App.css";
import { Container, Snackbar } from "@material-ui/core";
import Header from "./components/Header";
import CreateModal from "./components/CreateModal";
import { TRELLO_STORAGE } from "./utils/constants";
import ListTrello from "./components/ListTrello";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });

  const [allTrellos, setAllTrellos] = useState([]); // inicializamos el state vacio
  const [reloadTrello, setReloadTrello] = useState(false);


  useEffect(() => {
    // creamos un efecto para traer todos trellos
    const allTrellosStorage = localStorage.getItem(TRELLO_STORAGE);
    const allTrellosArray = JSON.parse(allTrellosStorage);
    setAllTrellos(allTrellosArray);
    setReloadTrello(false);
  }, [reloadTrello]);


const deleteTrello = (index) => {
    allTrellos.splice(index, 1);
    setAllTrellos(allTrellos);
    localStorage.setItem(TRELLO_STORAGE, JSON.stringify(allTrellos));
    setReloadTrello(true);
}

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <CreateModal setToastProps={setToastProps} allTrellos={allTrellos} />{" "}
      {/*pasamos todos los trellos por props al componente CreateModal*/}
      <ListTrello allTrellos={allTrellos} deleteTrello={deleteTrello}/>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
