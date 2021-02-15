import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Image from 'material-ui-image'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import RoomIcon from '@material-ui/icons/Room';
import TodayIcon from '@material-ui/icons/Today';

import Navbar from './Navbar'
import SideBar from './SideBar'

import avatar from '../img/avatar.jpg'

import Friends from './Friends'
import Posts from './Posts'

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

function Profile({profile}) {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <SideBar />

            <Container maxWidth="md">
                <Box pt={4}>
                <Grid container noWrap direction="row" spacing={3}>
                    <Grid item sm={12}>
                        
                            <Box p={4}>
                            <Grid container noWrap direction="col" alignItems="stretch" spacing={5}>       
                                    <Grid item>
                                        <Box>
                                            <img src={avatar} className={classes.large} />                   
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="row" spacing={1}>
                                            <Grid item xs={12} noWrap>
                                                <Typography variant="h4">
                                                    {profile.firstName} {profile.lastName}                             
                                                </Typography>
                                            </Grid> 
                                            
                                            <Grid item xs={12} noWrap>
                                                <Typography variant="subtitle1">
                                                    {profile.age} y.o.                              
                                                </Typography>
                                            </Grid>          

                                            <Grid item xs={12} noWrap>
                                                <Grid container direction="col" alignItems="center">
                                                    <RoomIcon fontSize="small" /> 
                                                    <Typography variant="subtitle1">
                                                        {profile.city}                  
                                                    </Typography>
                                                </Grid>                                                
                                            </Grid>    

                                            <Grid item noWrap xs={12}>
                                                <Button
                                                variant="contained"
                                                color="secondary"
                                                size="small"
                                                >Edit profile
                                                </Button>   
                                            </Grid> 
                                        </Grid>           
                                    </Grid>
                                </Grid>
                            </Box>  
                        
                    </Grid>
                </Grid>

                <Grid container noWrap direction="row" alignItems="stretch" spacing={5}>
                    <Grid item sm={6}>
                        
                            <Box p={4} mt={3}>
                                <Grid container direction="col" justify="space-between" alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Box mb={3}>
                                            <Typography variant="subtitle1" gutterBottom>
                                            My friends
                                            </Typography>     
                                        </Box>                               
                                    </Grid>
                                    <Grid item>    
                                    <Box mb={3}>
                                        <Button
                                            color="primary"
                                            size="small"
                                            className={classes.button}
                                        >See more (152)
                                        </Button>
                                    </Box>                            
                                    </Grid>
                                </Grid>    
                                                    
                                <Friends />   
                            </Box>                        
                                         
                    </Grid>

                    <Grid item sm={6}>
                        
                            <Box p={4} mt={3}>
                                <Grid container direction="col" justify="space-between" alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Box mb={3}>
                                            <Typography variant="subtitle1" gutterBottom>
                                            My posts
                                            </Typography>     
                                        </Box>                               
                                    </Grid>
                                    <Grid item>    
                                    <Box mb={3}>
                                        <Button
                                            color="primary"
                                            size="small"
                                            className={classes.button}
                                        >See more (27)
                                        </Button>
                                    </Box>                            
                                    </Grid>
                                </Grid> 

                                <Posts />

                            </Box>
                                              
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </div>
    )
}

const mapStateToProps = function(state) {
    return {
      profile: state.profile,
    }
}

export default connect(mapStateToProps)(Profile);