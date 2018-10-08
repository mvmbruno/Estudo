import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Ponto from '@material-ui/icons/FiberManualRecord';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const paper = createMuiTheme({
  palette: {
    primary: {
      main: '#56D53F',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#266180',
      contrastText: '#ffffff', 
    },
  },
});

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  titulo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '15px',
  },
  button: {
    borderRadius: "30px",
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <MuiThemeProvider theme = {paper}>
      <Paper className={classes.root} elevation={3}>
      <div className={classes.titulo}>
        <Typography variant="title" >
          This is a sheet of paper.
        </Typography>
        <Typography color="primary" variant="button" button >
          <Ponto color="primary" style={{ fontSize: 15 }}/>
          Assinado
        </Typography>
      </div>
        <Divider />
        <div className={classes.titulo}>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
        <Button variant="contained" color="secondary" className={classes.button}>
          Ver Resumo
        </Button>
      </div>
      </Paper>
      </MuiThemeProvider>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);