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

import {users} from './Users'

const useStyles = makeStyles((theme) => ({

}));

export default function Wall() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
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
                                    <Paper>
                                        <Box p={3}>
                                            <Grid item xs={12}>
                                                <Box  display="flex" alignItems="center">
                                                    <Avatar alt="Remy Sharp" src={`../img/${user.image}`} />
                                                    <Box mx={2}>
                                                        <Box>{user.firstName} {user.lastName}</Box>
                                                        <Box>{post.date}</Box>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box my={2} flexGrow={1}>
                                                    {post.description}
                                                </Box>
                                                <Box  disableSpacing flexGrow={1}>
                                                    <IconButton disableSpacing >
                                                        <ThumbUpAltIcon   disableSpacing  />
                                                    </IconButton>
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
