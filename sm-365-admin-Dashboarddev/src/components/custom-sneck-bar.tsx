import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';



export enum AlertMsgTypes {
    Sucess = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info'
}

export interface AlertMsgProps {
    msgType: AlertMsgTypes,
    msgs: string[]
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} key={`mui-alert-${(Math.floor(Math.random() * 1000) + 1).toString()}`} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const CustomizedSnackbars: React.FC<{ params: AlertMsgProps }> = ({ params }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [keyId, setKeyId] = React.useState('');
    useEffect(() => {

        // window.localStorage["persistedState"] = JSON.stringify(fullInitialState);
        if (params && params?.msgs.length > 0) {
            setOpen(true)
            setKeyId((Math.floor(Math.random() * 1000) + 1).toString())
            setTimeout(() => {
                setOpen(false)
                setKeyId((Math.floor(Math.random() * 1000) + 1).toString())
                console.log('hiding sneakbar')
                params.msgs = [];
            }, 2000);
        }
        else {
            setOpen(false)
        }
    }, [params]);


    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    if (params.msgs.length === 0) {
        return null
    } else {
        return (
            <div className={classes.root}>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}
                    key={`snack-${(Math.floor(Math.random() * 1000) + 1).toString()}`}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
                    <Alert onClose={handleClose} severity={params?.msgType}>

                        {
                            params.msgs.map((val, index) => {
                                return <p key={`span-${keyId}-${index}`}>{val}</p>
                            })
                        }
                    </Alert>
                </Snackbar>
            </div>
        )
    }
}

export default CustomizedSnackbars;