import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FoodImg from '../../assets/images/food.png'
import TransportImg from '../../assets/images/bus.png'
import {ListSubheader} from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         maxWidth: 752,
//     },
//     demo: {
//         backgroundColor: theme.palette.background.paper,
//     },
//     title: {
//         margin: theme.spacing(4, 0, 2),
//     },
// }));


export default function Transactions() {
    // const classes = useStyles();
    const [dense, setDense] = React.useState(false);

    //Mock Data
    let transactions = [
        {
            date: "Jan 12",
            amount: 25,
            category: "Food",
            icon: FoodImg
        },
        {
            date: "Jan 12",
            amount: 12,
            category: "Transport",
            icon: TransportImg
        },
        // {
        //     date: "Jan 12",
        //     amount: 25,
        //     category: "Food",
        //     icon: FoodImg
        // }
    ]
    let total = 0
    transactions.forEach(el => {
        total += el.amount
    })

    return (
        <>
            <List dense={dense}>
                <ListItem>
                    <h4>Today</h4>
                    <ListItemSecondaryAction >
                        <h4>-${total}</h4>
                    </ListItemSecondaryAction>
                </ListItem>
                {transactions.map(transaction => (
                    <ListItem>
                        <ListItemAvatar>
                                <img src={transaction.icon} style={{height: '30px', width: '30px'}}/>
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
