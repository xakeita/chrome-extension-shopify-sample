import React from "preact/compat";
import { h, render } from "preact";
import { useState } from "preact/hooks";
import {AppProvider} from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import {Fab, makeStyles} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
    fab: {
        position: 'fixed',
        right: 50,
        bottom: 50
    }
});

const App = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    return (
        <AppProvider i18n={enTranslations}>
            <Fab color="primary" className={classes.fab} onClick={() => setOpen(true)}>
                <AddIcon />
            </Fab>
        </AppProvider>
    );
};

const execute = async () => {
    const panel = document.createElement('div');
    panel.id = 'extension-app';
    document.body.append(panel);

    render(<App />, panel);
};

execute();
