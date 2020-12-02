// import React, {useState} from "react";
// import { render } from "react-dom";
// import { Dialog, DialogTitle, Fab, makeStyles } from "@material-ui/core";
// import AddIcon from "@material-ui/icons/Add";
//
// const useStyles = makeStyles({
//     fab: {
//         position: 'fixed',
//         right: 50,
//         bottom: 50
//     }
// });
//
// const Hello = () => {
//     const [open, setOpen] = useState(false);
//
//     const classes = useStyles();
//
//     return (
//         <React.Fragment>
//             <Fab color="primary" className={classes.fab} onClick={() => setOpen(true)}>
//                 <AddIcon />
//             </Fab>
//             <Dialog
//                 open={open}
//                 onClose={() => setOpen(false)}
//                 aria-labelledby="alert-dialog-title"
//                 aria-describedby="alert-dialog-description"
//             >
//                 <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
//             </Dialog>
//         </React.Fragment>
//     );
// };
//
// const execute = async () => {
//     const panel = document.createElement('div');
//     panel.id = 'extension-app';
//     document.body.append(panel);
//
//     render(<Hello />, panel);
// };
//
// execute();
