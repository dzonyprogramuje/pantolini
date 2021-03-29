import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        <Box mb={3}>
            <Grid container direction="col" justify="space-between" alignItems="center" spacing={2}>
                <Grid item>
                    <Box mb={2}>
                        <Typography variant="subtitle1" gutterBottom>
                        My pictures
                        </Typography>     
                    </Box>                               
                </Grid>
                <Grid item>    
                <Box mb={2}>
                    <Button
                        color="primary"
                        size="small"
                        className={classes.button}
                    >See more (33)
                    </Button>
                </Box>                            
                </Grid>
            </Grid>                                                           
            <Grid container direction="col" justify="space-between" alignItems="center" spacing={2}>                               
                <Grid item>
                <FaImage className={classes.thumbnail} />
                </Grid>
                <Grid item >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                 <Grid item >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item >
                <FaImage className={classes.thumbnail}/>
                </Grid>
                <Grid item >
                <FaImage className={classes.thumbnail}/>
                </Grid>
            </Grid>                            
        </Box>
    )
}

export default Pictures