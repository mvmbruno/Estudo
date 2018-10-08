import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import NewFolderIcon from '@material-ui/icons/CreateNewFolder';
import CopyIcon from '@material-ui/icons/LibraryAdd';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#aecc53',
      contrastText: '#144a66'
    },
    secondary: {
      light: '#0066ff',
      main: '#a3c6ff',
      contrastText: '#2996cc',
      
    },
  },
});

const styles = theme => ({
  button: {
    margin: '10px',
  },
});


  class Icons extends React.Component {
    render(){
      const { classes } = this.props;
    
      return (
      <div  >
      <MuiThemeProvider theme = {theme}>
            <Button color="secondary" ><NewFolderIcon className={classes.button} />Nova Pasta</Button>
            <Button color="secondary" ><CopyIcon className={classes.button} />Duplicar</Button>
            <Button color="secondary" ><DeleteIcon className={classes.button} />Remover</Button>
      </MuiThemeProvider>
      </div>
    );
  }
  }
  
  const IconsWrapped = withStyles(styles)(Icons);

  export default IconsWrapped;