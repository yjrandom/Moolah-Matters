import React from 'react';
import {Grid} from "@material-ui/core";
import ProgressBar from "./BudgetBar";
import PigImg from '../../assets/images/piggy-bank.png'
import FoodImg from '../../assets/images/food.png'
import TransportImg from '../../assets/images/bus.png'

export default function Budget() {
    // Mock Data
    let budgetList = [
        {
            name: 'Total',
            budgetSet: 2800,
            budgetSpent: 2900,
            color: '#06D6A0',
            icon: PigImg
        },
        {
            name: 'Food',
            budgetSet: 220,
            budgetSpent: 100,
            color: '#FFD166',
            icon: FoodImg
        },
        {
            name: 'Transport',
            budgetSet: 500,
            budgetSpent: 450,
            color: '#6199F5',
            icon: TransportImg
        },
    ]

    return (
        <Grid container spacing={3} >
            {budgetList.map(category => (
                <Grid item container xs={12} spacing={1} key={category.name}>
                    <Grid item xs={6} style={{display: 'flex', alignItems: 'center'}} >
                        <img style={{height: '50px', width: '50px'}} src={category.icon} alt={category.name}/>
                        <h3 style={{paddingLeft:"5%"}}>{category.name}</h3>
                    </Grid>
                    <Grid item xs={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                        {(category.budgetSet - category.budgetSpent < 0) ?
                            <h3 style={{color:'#F66D6D'}}>Over-spent!</h3> :
                            <h3>${category.budgetSet - category.budgetSpent} Left</h3>
                            }
                    </Grid>
                    <Grid item xs={12}>
                        <ProgressBar category={category}/>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
}
