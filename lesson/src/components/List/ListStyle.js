import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        marginLeft: '20%',
    },

}));