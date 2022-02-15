import React from 'react'
import { Card, CardContent } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import moment from 'moment';// para trabajar con las fechas
 import './Trello.scss'


export default function Trello(props) {
    const {trello: { name, trello, time }, index, deleteTrello} = props;

    return (
        <Card className='trello'>
            <CardContent>
                <div className='trello__header'>
                    <h5>{name}</h5>
                    <DeleteTwoToneIcon onClick={()=> deleteTrello(index)}/>
                </div>
                <p>{trello}</p>
                <div className='trello__date-add-trello'>
                    {moment(time).format('DD/MM/YYYY HH:mm')}
                </div>
            </CardContent>
        </Card>
    )
}