import React from "react";
import { Grid } from "@material-ui/core";
import Trello from "../Trello/Trello";
import "./ListTrello.scss";

export default function ListTrello(props) {
  const { allTrellos , deleteTrello} = props;

  if (!allTrellos || allTrellos.length === 0) {
    return (
      <div className="list-trellos-empty">
        <h2>No hay Trellos.</h2>
      </div>
    );
  }
  return (
    <Grid container spacing={3} className="list-trellos">
      {allTrellos.map((trello, index) => (
           <Grid key={index} item xs={4}>     {/* cada vez que creamos un .map debemos añadir un key*/}
                <Trello trello={trello} index={index} deleteTrello={deleteTrello}/>
            </Grid>
      ))}
    </Grid>
  );
}
