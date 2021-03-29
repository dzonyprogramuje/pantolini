import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Friend from './Friend';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

function Friends({friends}) {
    const classes = useStyles();

    return (
        <Box mb={3}>
            <Grid container direction="col" justify="space-between" alignItems="center" spacing={2}>
                <Grid item>
                    <Box mb={2}>
                        <Typography variant="subtitle1" gutterBottom>
                        My friends
                        </Typography>     
                    </Box>                               
                </Grid>
                <Grid item>    
                <Box mb={2}>
                    <Button
                        color="primary"
                        size="small"
                        className={classes.button}
                        to='/my-profile' 
                        component={Link}
                    >See more ({friends.length})
                    </Button>
                </Box>                            
                </Grid>
            </Grid>                                                           
            <Grid container direction="col" justify="space-between" alignItems="center" spacing={2}>                               
                <Friend friends={friends} />                
            </Grid>                            
        </Box>
    )
}

const mapStateToProps = function(state) {
    return {
      friends: state.friends,
    }
}

export default connect(mapStateToProps)(Friends);