import React from 'react'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';

export default function Posts() {
    return (
        <Grid container direction="row" spacing={3}>

            <Grid item>
                <Grid container direction="col" wrap="nowrap" justify="space-between">
                    <Grid item>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    </Grid>
                    <Grid item>
                        <IconButton size="small">
                            <MoreHorizIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>                
            </Grid>

            <Grid item>
                <Grid container direction="col" wrap="nowrap" justify="space-between">
                    <Grid item>
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                    </Grid>
                    <Grid item>
                        <IconButton size="small">
                            <MoreHorizIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>  
            </Grid>

            <Grid item>
                <Grid container direction="col" wrap="nowrap" justify="space-between">
                    <Grid item>
                        here are many variations of passages of Lorem Ipsum available, but the majority
                    </Grid>
                    <Grid item>
                        <IconButton size="small">
                            <MoreHorizIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>                 
            </Grid>

            <Grid item>
                <Grid container direction="col" wrap="nowrap" justify="space-between">
                    <Grid item>
                        The generated Lorem Ipsum is therefore of Lorem Ipsum available xd.
                    </Grid>
                    <Grid item>
                        <IconButton size="small">
                            <MoreHorizIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>                 
            </Grid>

            <Grid item>
                <Grid container direction="col" wrap="nowrap" justify="space-between" spacing={3}>
                    <Grid item>
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.
                    </Grid>
                    <Grid item>
                        <IconButton size="small">
                            <MoreHorizIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>                  
            </Grid>            
        </Grid>
    )
}
