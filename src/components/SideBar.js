import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';

import { Link } from "react-router-dom";

import {useSelector} from 'react-redux'
import { connect } from 'react-redux';
import {toggleSideBar} from '../redux/actions'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

function SideBar({isOpen, handleSideBar}) {
  const classes = useStyles();

  const list = () => (
    <div
      className={classes.list}
      onClick={handleSideBar}
      onKeyDown={handleSideBar}
    >
      
      <List>
          <ListItem button key="dashboard" to='/dashboard' component={Link} >              
            <ListItemIcon>
              <HomeIcon />      
            </ListItemIcon>
            <ListItemText primary="Wall" />           
          </ListItem>
          <Divider />
          <ListItem button key="my-posts" to='/my-posts' component={Link} >
            <ListItemIcon><TelegramIcon /></ListItemIcon>
            <ListItemText primary="My posts" />
          </ListItem>
        
      </List>

      

    </div>
  );

  return (
    <div>
        <React.Fragment>
          <Drawer anchor="left" open={isOpen} onClose={()=>handleSideBar()}>
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );  
}

const mapStateToProps = function(state) {
    return {
      isOpen: state.isOpen,
    }
}

const mapDispatchToProps = dispatch => {
  return{
    handleSideBar: ()=>dispatch(toggleSideBar())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);