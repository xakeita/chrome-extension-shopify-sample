import React from "preact/compat";
import { h, render } from "preact";
import { useState } from "preact/hooks";
import {Button, Dialog, DialogContentText, DialogTitle, Fab, makeStyles, TextField} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import getOrderById from "./lib/shopify-admin-api/getOrderById";
import updateOrder from "./lib/shopify-admin-api/updateOrder";

const useStyles = makeStyles({
    fab: {
        position: 'fixed',
        right: 50,
        bottom: 50
    }
});

const Hello = () => {
    const [open, setOpen] = useState(false);

    const [orderNumber, setOrderNumber] = useState('');

    const classes = useStyles();

    const handleClick = async () => {
        const url = new URL(document.location.href);
        const orderId = url.pathname.split('/')[3];
        const order = await getOrderById(orderId);
        const tags = order.tags;
        tags.push('dk-id:'+orderNumber);
        console.log(tags);
        const response = await updateOrder({
            id: 'gid://shopify/Order/'+orderId,
            tags
        });
        console.log(await response);
    };

    return (
        <React.Fragment>
            <Fab color="primary" className={classes.fab} onClick={() => setOpen(true)}>
                <AddIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContentText>
                    <TextField
                        label="代行キング注文番号"
                        onChange={event => setOrderNumber(event.target.value)}
                    />
                    <Button onClick={handleClick}>ボタン</Button>
                </DialogContentText>
            </Dialog>
        </React.Fragment>
    );
};

const execute = async () => {
    const panel = document.createElement('div');
    panel.id = 'extension-app';
    document.body.append(panel);

    render(<Hello />, panel);
};

execute();
