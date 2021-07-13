import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import PigImg from "../../assets/images/piggy-bank.png";
import BankImg from "../../assets/images/bank.png";
import {makeStyles} from "@material-ui/core/styles";
import {Container, Grid} from "@material-ui/core";

function Accounts(props) {


    // Mock Data
    let accounts = [
        {
            name: "Total",
            color: '#06D6A0',
            icon: PigImg
        },
        {
            name: "UOB Debit",
            color: '#6199F5',
            icon: BankImg
        }

    ]

    const useStyles = makeStyles(() => ({
        root: {
            display: 'flex',
            // backgroundColor: account.color,
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
            width: 'auto',
            margin: 'auto',
            marginRight: '10%',
        },
    }));
    const classes = useStyles();

    return (
        <>
        <Container>Hi</Container>
        <Grid container spacing={3}>
            {accounts.map(account => (
                <Grid item xs={12} md={6} >
            <Card className={classes.root} style={{backgroundColor: account.color}}>
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
                    component={"img"}
                    className={classes.icon}
                    image={account.icon}
                    title={account.name}
                />
            </Card>
                </Grid>
                ))}
        </Grid>
        </>
    );
}

export default Accounts;
