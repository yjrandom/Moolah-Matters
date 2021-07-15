import React, {useEffect, useState} from 'react'
import {
    Fab,
    useTheme,
    useMediaQuery,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    InputAdornment,
    AppBar,
    Toolbar,
    IconButton
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Add, Close} from '@material-ui/icons'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import Axios from "../../util/Axios";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider, KeyboardDatePicker,
} from '@material-ui/pickers';

export default function AddTransaction({accounts, setTransactions}) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const [formData, setFormData] = useState({'date_time': new Date()})
    const [transactionTypes, setTransactionTypes] = useState([])

    // Get Transactions types
    useEffect(()=> {
        getTransactionTypes()
    },[])

    async function getTransactionTypes(){
        try{
            let {data} = await Axios.get(`/api/transactiontypes`)
            setTransactionTypes(data)
        } catch (e) {
            console.log(e)
        }
    }

    async function submit(e) {
        e.preventDefault()
        console.log(formData)
        try{
            let {data} = await Axios.post('/api/transaction/create', formData)
            console.log(data.message)
            setTransactions(prevState => [...prevState, data.new_transaction])
            handleClose()
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (e) => {
        setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}))
    };

    function handleDateChange(date){
        setFormData(prevState => ({...prevState, ['date_time']: date}))
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            position: "fixed",
            bottom: `${matches ? '10px' : '20px'}`,
            right: `${matches ? '10px' : 'calc(50%)'}`,
            transform: `${matches ? '' : 'translate(50%, 0)'}`,
            zIndex: theme.zIndex.drawer + 2,
            '& > *': {
                margin: theme.spacing(1),
                backgroundColor: '#6199F5',
                boxShadow: '0 -2px 4px 0 rgb(0,0,0,0.2)'
            },
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        formControl: {
            marginTop: theme.spacing(1),
            minWidth: 120,
            width: '100%',
        },
        margin: {
            marginTop: theme.spacing(1),
        },
        appBar: {
            position: 'relative',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }));
    const classes = useStyles();


    return (
        <>
            <div className={classes.root}>
                <Fab
                    color='primary'
                    aria-label="add"
                    variant={matches ? 'extended' : 'circular'}
                    size='medium'
                    onClick={handleClickOpen}

                >
                    <Add/>
                    {matches ? 'New Transaction' : ''}
                </Fab>
            </div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="modal"
            >
                {fullScreen && <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <Close />
                    </IconButton>
                    <h2>Add a new transaction</h2>
                </Toolbar>
                </AppBar>}
                {!fullScreen && <DialogTitle id="title">Add a new transaction</DialogTitle>}
                <DialogContent>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            // margin="normal"
                            // required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="text"
                            onChange={handleChange}
                        />
                        <FormControl variant="outlined" className={classes.form}>
                            <InputLabel id="demo-simple-select-outlined-label">Account</InputLabel>
                            <Select
                                labelId="account"
                                id="account"
                                onChange={handleChange}
                                label="Account"
                                name='account_id'
                            >
                                <MenuItem value=''>
                                    <em>None</em>
                                </MenuItem>
                                {accounts && accounts.map(account => (
                                    <MenuItem key={account.id} value={account.id}>{account.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                            <InputLabel htmlFor="amount">Amount</InputLabel>
                            <OutlinedInput
                                id="amount"
                                // value={values.amount}
                                // onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={60}
                                name='amount'
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="type">Type</InputLabel>
                            <Select
                                labelId="type"
                                id="type"
                                onChange={handleChange}
                                label="Type"
                                name='transaction_type_id'
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {transactionTypes && transactionTypes.map(type => (
                                    <MenuItem value={type.id}>{type.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label="With keyboard"
                                format="dd/MM/yyyy"
                                value={formData['date_time']}
                                InputAdornmentProps={{ position: "start" }}
                                onChange={date => handleDateChange(date)}
                            />
                        </MuiPickersUtilsProvider>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={submit}
                        >
                            Add Transaction
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

