import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import MailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CheckStar from './checkBox';
import MenuIcon from './menu';

const sign = createMuiTheme({
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

const typo = createMuiTheme({
  palette: {
    primary: {
      main: '#144A66',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#2996CC',
      contrastText: '#ffffff', 
    },
  },
      overrides: {
        MuiTypography: {
          subheading: {
            color: '#2996CC',
            fontFamily: 'montserrat'
          },
    },
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    Width: 2000,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  icons:{
    display:'flex',
    justifyContent: 'space-between',
  }
});

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

class InteractiveList extends React.Component {
  state = {
    dense: false,
    secondary: false,
  };

  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme = {typo}>
            <Typography color="primary" variant="title" className={classes.title}>
              Lista de Clientes
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <div className={classes.icons}>
                      <CheckStar />
                      <IconButton color="secondary" aria-label="Delete">
                        <PhoneIcon />
                      </IconButton>
                      <IconButton color="secondary" aria-label="Delete">
                        <MailIcon />
                      </IconButton>
                    </div>
                    <ListItemAvatar>
                      <Avatar color="secondary">
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      className={classes.listitem}
                      color="secondary"
                      primary="Laércio Avelino"
                    />
                    <ListItemText
                      color="secondary"
                      primary="laercio@gmail.com"
                    />
                    <ListItemText
                      color="secondary"
                      primary="85 9 9999-9999"
                    />
                    <ListItemSecondaryAction>
                    <MenuIcon/>
                    </ListItemSecondaryAction>
                  </ListItem>,
                )}
              </List>
            </div>
          </MuiThemeProvider>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveList);