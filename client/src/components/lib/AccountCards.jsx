import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PigImg from '../../assets/images/piggy-bank.png'
import IncomeImg from '../../assets/images/salary.png'
import ExpensesImg from '../../assets/images/financial-profit.png'
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#06D6A0',
    },
    mainAcc: {
        display: 'flex',
        backgroundColor: '#06D6A0',
    },
    income: {
        display: 'flex',
        backgroundColor: '#FFD166',
    },
    expenses: {
        display: 'flex',
        backgroundColor: '#F66D6D',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        color: "white",
    },
    icon: {
        width: '120px',
        height: '120px',
        margin: 'auto',
        marginRight: '10%',
    },
    smallIcon: {
        width: '50px',
        height: '50px',
        margin: 'auto',
    }
}));

export default function AccountCards() {
    const classes = useStyles();

    return (
        <div>
            <Typography align="right" component="h6" variant="h6">Total</Typography>
            <Grid container classes={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Card className={classes.mainAcc}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h3" variant="h3">
                                    Balance
                                </Typography>
                                <Typography component="h2" variant="h2" style={{fontWeight: "bold"}}>
                                    $1234
                                </Typography>
                            </CardContent>
                        </div>
                        <CardMedia
                            className={classes.icon}
                            image={PigImg}
                            title="Piggy-Bank"
                        />
                    </Card>
                </Grid>
                <Grid item xs={6}>
                <Card className={classes.income}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Income
                            </Typography>
                            <Typography component="h4" variant="h4" style={{fontWeight: "bold"}}>
                                $5000
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.smallIcon}
                        image={IncomeImg}
                        title="Income"
                    />
                </Card>
                </Grid>
                <Grid item xs={6}>
                <Card className={classes.expenses}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Expenses
                            </Typography>
                            <Typography component="h4" variant="h4" style={{fontWeight: "bold"}}>
                                -$2855
                            </Typography>
                        </CardContent>
                    </div>
                    <CardMedia
                        className={classes.smallIcon}
                        image={ExpensesImg}
                        title="Expenses"
                    />
                </Card>
                </Grid>
            </Grid>

        </div>
    );
}
