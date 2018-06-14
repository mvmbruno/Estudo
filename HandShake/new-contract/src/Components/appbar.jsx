import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icons from './icons'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#266180',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#0066ff',
      main: '#aecc53',
      contrastText: '#144a66',
      
    },
    inherit: {
      light: '#0066ff',
      main: '#0066ff',
      contrastText: '#000000',
    },
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  app: {
    display: 'flex',
    justifyContent: 'flexEnd',
  },
  button: {
    margin: theme.spacing.unit,
    borderRadius: "30px",
  },
  flex: {
    flex: 1,
  },

});

class SubBar extends React.Component {
  render(){
    const { classes } = this.props;
  
    return (
    <div className={classes.root}>
    <MuiThemeProvider theme = {theme}>
      <AppBar className={classes.app} position="static" color="primary">
        <Toolbar>
          <Button variant="contained" color="secondary" className={classes.button} border>Contratos</Button>
          <Typography className={classes.flex}></Typography>
          <Icons />
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
    </div>
  );
}
}

const SubBarWrapped = withStyles(styles)(SubBar);

export default SubBarWrapped;