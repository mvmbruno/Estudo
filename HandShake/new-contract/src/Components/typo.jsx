import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f384d',
      contrastText: '#144a66'
    },
  },
});

const styles = theme => ({
  button: {
    margin: '30px',
  },
});


  class Typo extends React.Component {
    render(){
      const { classes } = this.props;
    
      return (
      <div className={classes.button} >
      <MuiThemeProvider theme = {theme}>
        <Typography color="primary" variant="title">
            Modelos de contrato
        </Typography>
        <Typography color="primary" variant="Body2">
            Aqui você encontra alguns modelos de contrato para você começar
        </Typography>
      </MuiThemeProvider>
      </div>
    );
  }
  }
  
  const TypoWrapped = withStyles(styles)(Typo);

  export default TypoWrapped;