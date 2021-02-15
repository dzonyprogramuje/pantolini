import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';

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
        <div>
            <Grid container direction="col" justify="space-between" alignItems="center" spacing={2}>                               
                <Grid item>
                <img src={"../img/1.jpg"} className={classes.small} />
                <Typography variant="body1" gutterBottom>
                    Lorem Ipsum
                </Typography>  
                </Grid>
                <Grid item>
                <img src={"../img/2.jpg"} className={classes.small} />
                <Typography variant="body1" gutterBottom>
                    Lorem Ipsum
                </Typography>
                </Grid>
                <Grid item>
                <img src={"../img/3.jpg"} className={classes.small} />
                <Typography variant="body1" gutterBottom>
                    Lorem Ipsum
                </Typography>
                </Grid>
                <Grid item>
                <img src={"../img/4.jpg"} className={classes.small} />
                <Typography variant="body1" gutterBottom>
                    Lorem Ipsum
                </Typography>
                </Grid>
                <Grid item>
                <img src={"../img/5.jpg"} className={classes.small} />
                <Typography variant="body1" gutterBottom>
                    Lorem Ipsum
                </Typography>
                </Grid>
                 <Grid item>
                <img src={"../img/6.jpg"} className={classes.small} />
                <Typography variant="body1" gutterBottom>
                    Lorem Ipsum
                </Typography>
                </Grid>
                <Grid item>
                <img src={"../img/7.jpg"} className={classes.small} />
                <Typography variant="body1" gutterBottom>
                    Lorem Ipsum
                </Typography>
                </Grid>
                <Grid item>
                <img src={"../img/8.jpg"} className={classes.small} />
                <Typography variant="body1" gutterBottom>
                    Lorem Ipsum
                </Typography>
                </Grid>
                 <Grid item>
                <img src={"../img/9.jpg"} className={classes.small} />
                <Typography variant="body1" gutterBottom>
                    Lorem Ipsum
                </Typography>
                </Grid>
            </Grid>                            
        </div>
    )
}

const mapStateToProps = function(state) {
    return {
      friends: state.friends,
    }
}

export default connect(mapStateToProps)(Friends);