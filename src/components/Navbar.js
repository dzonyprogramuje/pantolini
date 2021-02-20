import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link } from "react-router-dom";

import {toggleSideBar} from '../redux/actions'
import {signIn} from '../redux/actions'

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    padding: theme.spacing(2, 10, 2, 2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar({handleSideBar, logOut}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>handleSideBar()} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Pantolini Social Media
          </Typography>
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
        </Toolbar>
      </AppBar>

    <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleClose}
        >
            <MenuItem to='/my-profile' component={Link} className={classes.menu}>
                <ListItemIcon>
                    <AccountBoxIcon fontSize="medium" />
                </ListItemIcon>
                Profile
            </MenuItem>
            <MenuItem to='/my-friends' component={Link} className={classes.menu}>
                <ListItemIcon>
                    <PeopleIcon fontSize="medium" />
                </ListItemIcon>
                Friends
            </MenuItem>    
            <Divider />     
            <MenuItem onClick={logOut} className={classes.menu}>
                <ListItemIcon>
                    <ExitToAppIcon fontSize="medium" />
                </ListItemIcon>                
                Logout
            </MenuItem>    
    </Menu>

    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return{
    handleSideBar: ()=>dispatch(toggleSideBar()),
    logOut: ()=>dispatch(signIn())
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
