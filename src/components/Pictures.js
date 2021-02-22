import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

import { FaImage } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    thumbnail: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  }
}));


function Pictures() {
    const classes = useStyles();

    return (
        <div>
            <Grid container direction="col" justify="center" alignItems="center" spacing={5}>                               
                <Grid item xs={4}>
                <FaImage className={classes.thumbnail} />
                </Grid>
                <Grid item xs={4} >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item xs={4} >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item xs={4} >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item xs={4} >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                 <Grid item xs={4} >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item xs={4} >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item xs={4} >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item xs={4} >
                <FaImage className={classes.thumbnail}/>
                </Grid>
            </Grid>                            
        </div>
    )
}

export default Pictures