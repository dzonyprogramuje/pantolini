import React from 'react';
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
import Typography from '@material-ui/core/Typography';

import InputAdornment from '@material-ui/core/InputAdornment';

import Divider from '@material-ui/core/Divider';

import {users} from './Users'

const useStyles = makeStyles((theme) => ({

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

}));

export default function Wall() {
    const classes = useStyles();
    let comments = []

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
        users.map(user =>{
            return(
                user.posts.map(post => {                            
                    return(
                        <Grid item xs={12}>
                            <Paper elevation={3}>
                                <Box p={4}>
                                    <Grid item xs={12}>
                                        <Box display="flex" alignItems="center">
                                            <Avatar alt="Remy Sharp" src={`../img/${user.image}`} />
                                            <Box mx={2}>
                                                <Typography variant="body1" gutterBottom>{user.firstName} {user.lastName}</Typography>
                                                <Typography variant="body2" gutterBottom>{post.date}</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box my={2} flexGrow={1}>
                                            <Typography variant="body1" gutterBottom>
                                            {post.description}
                                            </Typography>
                                        </Box>
                                        <Box disableSpacing flexGrow={1}>
                                            <IconButton disableSpacing >
                                                <ThumbUpAltIcon   disableSpacing  />
                                            </IconButton>
                                                
                                        </Box>                                                
                                        <Grid container my={3} justify='space-between' direction='col'>                                                    
                                            <Box><Button size="small">Comments ({post.comments.length})</Button></Box>  
                                            <Box><Button size="small">Show more</Button></Box>  
                                        </Grid> 
                                        <Box my={2} flexGrow={1}>
                                                <Divider />   
                                        </Box>
                                        <Box flexGrow={1}>
                                            <Grid container justify='space-between' direction='row' alignItems="stretch" my={3}>
                                                <Grid item xs={12}>
                                                    <TextField id="standard-basic" variant="filled" label="Comment this post hiere" fullWidth />                                                    
                                                </Grid>
                                            </Grid>                                
                                        </Box>
                                        <Box flexGrow={1}>
                                            {
                                            post.comments.map(comment => {
                                                return(
                                                <Grid container justify='space-between' direction='row' alignItems="stretch" m={2}>
                                                    <Grid item xs={11}>
                                                        <Box my={2} mr={3}>
                                                            <Paper > 
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
                                    </Grid>
                                </Box>                                
                            </Paper>
                        </Grid>
                    )                            
                })
            )
            
        }
            )}
                
             
        </Grid>
        </div>
    </Container>
  );
  
}
