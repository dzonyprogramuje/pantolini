import React from 'react'
import { connect } from 'react-redux';

import Friend from './Friend';

import Grid from '@material-ui/core/Grid';

function Friends({friends}) {
    return (
        <div>
            <Grid container direction="col" justify="space-between" alignItems="center" spacing={2}>                               
                <Friend friends={friends} />                
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