import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import { FaUserEdit } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

import Navbar from './Navbar'
import SideBar from './SideBar'

import avatar from '../img/avatar.jpg'

import Friends from './Friends'
import Pictures from './Pictures'
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
                    <Grid container noWrap direction="col" spacing={10}>
                        <Grid item sm={12}>                        
                            <Box>
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
                                                    <FaMapMarkerAlt /> 
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
                                                startIcon={<FaUserEdit />}
                                                >Edit profile
                                                </Button>   
                                            </Grid> 
                                        </Grid>           
                                    </Grid>
                                </Grid>
                            </Box>                          
                        </Grid>
                        
                        {/* Left column */}
                        <Grid item sm={6}>
                            <Friends />
                            <Pictures />
                        </Grid>

                        {/* Right column */}
                        
                        <Posts />


                    </Grid>

                    {/* <Grid container noWrap direction="row" alignItems="stretch" spacing={3}>
                        <Grid item sm={6}>
                            
                                                        
                                            
                        </Grid>

                        <Grid item sm={6}>                        
                                                                          
                        </Grid>
                    </Grid> */}
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