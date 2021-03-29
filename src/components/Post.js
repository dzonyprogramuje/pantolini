import React from 'react'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';

export default function Post({posts}) {
    return (
        posts.map(post => (
        <Grid item>
                <Box mb={5}>
                    <Grid container direction="col" wrap="nowrap" justify="space-between">
                        <Grid item>
                            {post.description}
                        </Grid>
                        <Grid item>
                            <IconButton size="small">
                                <MoreHorizIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                    </Grid>     
                </Box>           
            </Grid>
        ))
    )
}
