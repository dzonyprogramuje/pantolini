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

import { MdAccountCircle } from 'react-icons/fa';

import {useSelector} from 'react-redux'
import { connect } from 'react-redux';
import {toggleSideBar} from '../redux/actions'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

function Menu({isOpen, handleSideBar}) {
  const classes = useStyles();
  // const [state, setState] = React.useState(false);

  // const isOpen = useSelector(state => state.isOpen)
  // const dispatch = useDispatch()

  // const toggleDrawer = (open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState(open);
  // };

  const list = () => (
    <div
      className={classes.list}
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <Divider />
      <List>
          <ListItem button key="lll">
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="lol" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);