import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ContractIcon from '@material-ui/icons/InsertDriveFile.js';
import PolymerIcon from '@material-ui/icons/Polymer';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
    items: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topIcon: {
      marginTop: theme.spacing.unit,
    },

});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="inherit"
            fullWidth
          >
            <Tab label="Criar modelo" />
            <Tab label="Upload modelo" />
          </Tabs>
        </AppBar>
        <SwipeableViews         
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <div className={classes.items}>
                <ContractIcon style={{ fontSize: 100 }}/>
                <Typography 
                variant="title" 
                id="simple-modal-description">
                Enviando documentos similares?
                </Typography>
                <Typography 
                variant="body1">
                Economize tempo criando modelos com campos 
                </Typography>
                <Typography 
                variant="body1">
                pré-definidos assinatura criptográfica
                </Typography>
                <Button 
                className='botao' 
                variant="contained">
                Novo Documento
                </Button>
            </div>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <div className={classes.items}>
                    <PolymerIcon style={{ fontSize: 100 }}/>
                    <Typography 
                    variant="title" 
                    id="simple-modal-description">
                    Arraste e solte os arquivos aqui
                    </Typography>
                    <Typography 
                    variant="body1">
                    Economize tempo criando modelos com campos 
                    </Typography>
                    <Typography 
                    variant="body1">
                    pré-definidos assinatura criptográfica
                    </Typography>
                    <Button 
                    className='botao' 
                    variant="contained">
                    Selecione arquivo para upload
                    </Button>
                </div>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);