import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Mail from '@material-ui/icons/Mail';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Food from '../component/Food';
import foodList from '../data/data';
import Footer from './Footer';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: 'Cornsilk',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color: 'black',
    fontWeight: 'bold',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  typography: {
    position: 'absolute',
    right: '1rem',
    color: 'black',
    fontWeight: 'bold',
  },
}));

function Main(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = responsiveFontSizes(useTheme());
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [food, setFood] = useState('xiaolong');
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClick = (selectedFood, isMoblie) => {
        setFood(selectedFood);
        if(isMoblie) handleDrawerToggle();
    }

    const drawer = (isMobile) => {return (
        <div>
        <div className={classes.toolbar} />
        <List>
            {foodList.map((foodinList, index) => (
            <ListItem button key={foodinList.id} onClick = {() => handleClick(foodinList.name, isMobile)}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <Mail />}</ListItemIcon>
                <ListItemText primary={foodinList.name} />
            </ListItem>
            ))}
        </List>
        </div>
    )};

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}> 
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" 
                        noWrap 
                        inline
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}>
                            Menu
                    </Typography>
                    <Typography variant="h6"  
                        noWrap 
                        inline 
                        onClick={handleDrawerToggle}
                        className={classes.typography}>
                            小苏州 - Cafe Momnent
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer(true)}
                </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer(false)}
                </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Food selectedFood={food}/>
            </main>
            <Footer/>  
            </div>
        </ThemeProvider> 
    );
}

Main.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Main;
