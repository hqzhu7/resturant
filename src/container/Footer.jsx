import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    width: '100%',
    bottom: '0rem',
  },
  para: {
    position: 'absolute',
    right: '0.5rem',
    color: 'black',
    fontWeight: 'bold',
  },
  toolBar: {
    minHeight: '2.2rem',
  },
}));

export default function Footer() {
  const classes = useStyles();
  const theme = responsiveFontSizes(useTheme());

  return (
    <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor:'Cornsilk'}}>
                <Toolbar className={classes.toolBar}>
                    <p className={classes.para} >
                        Address: 123-23 32th ave, flushinh, ny, 11354
                    </p>
                </Toolbar>
                <Toolbar className={classes.toolBar}>
                    <p className={classes.para} >
                        Tel: 123-234-2938
                    </p>
                </Toolbar>
            </AppBar>
        </div>
    </ThemeProvider>
  );
}
