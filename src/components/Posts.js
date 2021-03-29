import React from 'react'
import { connect } from 'react-redux';

import Post from './Post'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Posts({profile}) {

    return (
        <Grid item sm={6}>                        
            <Box mb={3}>
                <Grid container direction="col" justify="space-between" alignItems="center" spacing={2}>
                    <Grid item>
                        <Box mb={2}>
                            <Typography variant="subtitle1" gutterBottom>My posts</Typography>     
                        </Box>                               
                    </Grid>
                    <Grid item>    
                        <Box mb={2}>
                            <Button
                                color="primary"
                                size="small"
                            >See more ({profile.posts.length})
                            </Button>
                        </Box>                            
                    </Grid>
                </Grid> 
                <Grid container direction="row">
                    <Post posts={profile.posts} />
                </Grid>
            </Box>
        </Grid>
    )
}

const mapStateToProps = function(state) {
    return {
      profile: state.profile,
    }
}

export default connect(mapStateToProps)(Posts);