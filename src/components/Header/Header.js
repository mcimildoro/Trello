import React from 'react';
import TrelloLogo from "../../assets/img/trello.png";
import './Header.scss';

export default function Header (){
    return(
        <div className='header'>
            <img src={TrelloLogo} alt='Trello Simulator' />
            <h1>Trello Simulator</h1>
        </div>
    )
}