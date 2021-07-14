import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FoodImg from '../../assets/images/food.png'
import TransportImg from '../../assets/images/bus.png'

export default function Transactions() {
    //Mock Data
    let transactions = [
        {
            id: '1',
            date: "Jan 12",
            amount: 25,
            category: "Food",
            icon: FoodImg
        },
        {
            id: '2',
            date: "Jan 12",
            amount: 12,
            category: "Transport",
            icon: TransportImg
        },
    ]
    let total = 0
    transactions.forEach(el => {
        total += el.amount
    })

    return (
        <>
            <List>
                <ListItem>
                    <h4>Today</h4>
                    <ListItemSecondaryAction >
                        <h4>-${total}</h4>
                    </ListItemSecondaryAction>
                </ListItem>
                {transactions.map(transaction => (
                    <ListItem key={transaction.id}>
                        <ListItemAvatar>
                                <img src={transaction.icon} alt={transaction.id} style={{height: '30px', width: '30px'}}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={transaction.category}
                        />
                        <ListItemSecondaryAction>
                            -${transaction.amount}
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
