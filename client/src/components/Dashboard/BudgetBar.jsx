import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function BudgetBar({category}) {
    const useStyles = makeStyles((theme) => ({
        root: {
            height: 30,
            borderRadius: 15,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
            borderRadius: 15,
            backgroundColor: category.color,
        },
    }))

    const classes = useStyles()
    let progress = ((category.budgetSpent / category.budgetSet) * 100)

    return (
        <LinearProgress classes={classes} variant="determinate" value={
            progress > 100 ? 100 : progress
        }/>
    );
}
