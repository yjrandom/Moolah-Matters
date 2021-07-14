import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IncomeImg from '../../assets/images/salary.png'
import ExpensesImg from '../../assets/images/financial-profit.png'
import PigImg from '../../assets/images/piggy-bank.png'
import BankImg from '../../assets/images/bank.png'
import {Grid, useMediaQuery, useTheme} from "@material-ui/core";


export default function AccountCards({account}) {
    // const icon = require(`../../assets/images/${account.icon}.png`)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const useStyles = makeStyles(() => ({
        root: {
            display: 'flex',
            backgroundColor: account.color,
            borderRadius: '5px',
            padding: '2%'
        },
        mainAcc: {
            display: 'flex',
            backgroundColor: account.color,
            boxShadow: 'none',
        },
        income: {
            display: 'flex',
            backgroundColor: '#FFD166',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        },
        expenses: {
            display: 'flex',
            backgroundColor: '#F66D6D',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
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
            maxHeight: '120px',
            width: `${matches ? 'auto' : '70px'}`,
            margin: 'auto',
            marginRight: '10%',
        },
        smallIcon: {
            maxWidth: '50px',
            height: `${matches ? 'auto' : 0}`,
            margin: 'auto',
            marginRight: '10%',
        }
    }));
    const classes = useStyles();

    return (
        <div style={{margin: "5% 0"}}>
            {/*<Typography align="right" component="h6" variant="h6">{account.name}</Typography>*/}
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Card className={classes.mainAcc}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h3" variant="h3">
                                    {account.name}
                                </Typography>
                                <Typography component="h2" variant="h2" style={{fontWeight: "bold"}}>
                                    $1234
                                </Typography>
                            </CardContent>
                        </div>
                        <CardMedia
                            component={'img'}
                            className={classes.icon}
                            image={PigImg}
                            title={account.name}
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
                        component={"img"}
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
                        component={"img"}
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
