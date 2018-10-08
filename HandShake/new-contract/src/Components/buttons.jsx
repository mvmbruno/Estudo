import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Modals from './modal';
import ContractIcon from '@material-ui/icons/InsertDriveFile.js';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006400',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#0066ff',
      main: '#fcf8f7',
      contrastText: '#144a66',
      
    },
    inherit: {
      light: '#0066ff',
      main: '#0066ff',
      contrastText: '#000000',
    }
  },
});

function getModalStyle() {

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const styles = theme => ({
  itens: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textTransform: 'none',
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 3,
  },
  button: {
    verticalAlign: 'middle',
    margin: '30px',
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <MuiThemeProvider theme = {theme}>
        <div className={classes.buttons}>
          <Button color="secondary" className={classes.button} variant="contained" onClick={this.handleOpen}>
            <div className={classes.itens}>
              <ContractIcon style={{fontSize: 100}}/>
                Novo modelo
            </div>
          </Button>

          <Button color="secondary" className={classes.button} variant="contained" >
            <div className={classes.itens}>
              <ContractIcon style={{fontSize: 100}}/>
                Serviços
            </div>
          </Button>

          <Button color="secondary" className={classes.button} variant="contained" >
          <div className={classes.itens}>
            <ContractIcon style={{fontSize: 100}}/>
              Locação
          </div>
          </Button>

          <Button color="secondary" className={classes.button} variant="contained">
            <div className={classes.itens}>
              <ContractIcon style={{fontSize: 100}}/>
                Proposta
            </div>
          </Button>

          <Button color="secondary" className={classes.button} variant="contained" >
            <div className={classes.itens}>
              <ContractIcon style={{fontSize: 100}}/>
                Compra & Venda
            </div>
          </Button>
        </div>

        <div>

        </div>
        
        
        <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Modals/>
          </div>
        </Modal>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;