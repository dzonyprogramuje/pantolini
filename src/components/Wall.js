import React, {useState} from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import Typography from '@material-ui/core/Typography';

import InputAdornment from '@material-ui/core/InputAdornment';

import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent'
import {users} from './Users'

const useStyles = makeStyles((theme) => ({
    button:{
        marginLeft: theme.spacing(2)
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

function Wall({profile}) {
    const classes = useStyles();
    const [expand, setExpand] = useState('')

    const handleExpand = (index)=>{ 
        if (expand === index) {
        setExpand("")
        } else {
        setExpand(index)     
    }
  }    

  return (
    
    <Container maxWidth="md">
        <div className={classes.root}>
        <Grid container spacing={3}>            
            <Grid item xs={12}>
                <Box my={3}>
                    <TextField id="standard-basic" label="What are you doing today? 😃" fullWidth />
                </Box>
            </Grid>
            
        {
             
                profile.posts.map((post,index) => {  
                    return(
                        <Grid item xs={12}>
                            <Paper>
                                <Box p={4}>
                                    <Grid item xs={12}>
                                        <Box display="flex" alignItems="center">
                                            <Avatar alt="Remy Sharp" src="{{ asset('./img/avatar.jpg') }}" />
                                            <Box mx={2}>
                                                <Typography variant="body1" gutterBottom>{profile.firstName} {profile.lastName}</Typography>
                                                <Typography variant="body2" gutterBottom>xxx</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box my={2} flexGrow={1}>
                                            <Typography variant="body1" gutterBottom>
                                            {post.description}
                                            </Typography>
                                        </Box>
                                               
                                        <Grid container my={3} justify='space-between' direction='col'>                                                    
                                            <Box><Button size="small" onClick={()=>handleExpand(index)}>Comments ({post.comments.length})</Button></Box>  
                                            <Box>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                size="small"
                                                className={classes.button}
                                                startIcon={<ThumbDownIcon />}
                                            >hate It ({post.hated})</Button> 
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    className={classes.button}
                                                    startIcon={<ThumbUpAltIcon />}
                                                >Love It ({post.liked})</Button>                                          
                                            </Box>                                             
                                        </Grid> 
                                        <Box my={2} flexGrow={1}>
                                                <Divider />   
                                        </Box>
                                        <Box flexGrow={1}>                                            
                                            <Grid container justify='space-between' direction='row' alignItems="stretch" spacing={3}>
                                                <Grid item xs={12}>
                                                    <TextField id="standard-basic" variant="outlined" label="Comment this post here" fullWidth className={classes.input}/>                                                    
                                                </Grid>
                                            </Grid>                                
                                        </Box>
                                        <Collapse in={index === expand} timeout="auto" unmountOnExit>
                                            <CardContent>
                                        <Box flexGrow={1}>
                                            {
                                            post.comments.map(comment => {
                                                return(
                                                <Grid container justify='space-between' direction='row' alignItems="stretch" m={2}>
                                                    <Grid item xs={11}>
                                                        <Box my={2} mr={3}>
                                                            <Paper variant='outlined'> 
                                                                <Box p={3}>
                                                                    <Typography variant="body2" display="block" gutterBottom>
                                                                        <b>{comment.author}:</b>
                                                                    </Typography>
                                                                    <Typography variant="body2" display="block" gutterBottom>
                                                                        dd.mm.yyyy - 15:15
                                                                    </Typography>
                                                                    <Typography variant="body2" display="block" gutterBottom>
                                                                        {comment.comment}
                                                                    </Typography>
                                                                </Box>
                                                            </Paper>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Box my={2}>
                                                            <Avatar alt="Remy Sharp" src={`../img/${comment.image}`}  />                                                    
                                                        </Box>
                                                    </Grid>
                                                </Grid>                                                        
                                                )
                                                })                                                                                                                   
                                            }  
                                        </Box>   
                                        </CardContent>
                                            </Collapse>                                             
                                                                                                               
                                    </Grid>
                                </Box>                                
                            </Paper>
                        </Grid>
                    )                            
                })
            }
                
             
        </Grid>
        </div>
    </Container>
  );
  
}

const mapStateToProps = function(state) {
    return {
      profile: state.profile,
    }
}

export default connect(mapStateToProps)(Wall);