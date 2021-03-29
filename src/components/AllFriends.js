import React from 'react'
import Navbar from './Navbar'

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default function AllFriends({friends}) {
    
    return (
        <>
            <Navbar />
            <Container maxWidth="md">
                <Grid container spacing={3} justify='space-between' direction='col' alignItems="stretch">
                {
                    friends.map(friend=>(
                        <Grid item xs={12}>
                            <Paper>
                                <Box display="flex" alignItems="center" p={3}>
                                    <Avatar alt="Remy Sharp" src={`../img/${friend.image}`} />
                                    <Box mx={2}>
                                        <Typography variant="body1" gutterBottom>{friend.name}</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))
                }
                </Grid>  
            </Container>
        </>
    )
}