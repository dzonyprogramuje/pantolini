import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    small: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
    large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    },
}));

export default function Friend({friends}) {
    const classes = useStyles();
    return (
        friends.map(friend => (
            <div>
            <Grid item>
                <img src={`../img/${friend.image}`} className={classes.small} alt={`${friend.name} thumnail`} />
                <Typography variant="body1" gutterBottom>
                    {friend.name}
                </Typography>  
            </Grid>
        </div>
        ))
    )
}

