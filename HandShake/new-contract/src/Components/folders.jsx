import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FolderIcon from '@material-ui/icons/Folder';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
  head: {
    color: "#806560",
    fontSize: 20,
    backgroundColor:'#fcf8f7',
  },
  body: {
    color:"#2996cc",
    fontSize: 14,
    backgroundColor:'#fcf8f7',
  },
}))(TableCell);

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#2996cc',
      contrastText: '#2996cc'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#2996cc',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#2996cc',
    },
    inherit: {
      light: '#0066ff',
      main: '#0066ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#000000',
    }
  },
});

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
  }
});

let id = 0;
function createData(name, space, date, type) {
  id += 1;
  return { id, name, space, date, type};
}

const data = [
  createData('Empresa 1', '6 Mb', '04/06/2018', 'path'),
  createData('Empresa 2', '4 Mb', '07/06/2018', 'path'),
  createData('Acordo Padrão', '200 Kb', '07/06/2018', 'file'),
];

class Folders extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
    <MuiThemeProvider theme = {theme}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Nome</CustomTableCell>
            <CustomTableCell>Tamanho</CustomTableCell>
            <CustomTableCell>Data</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <Button><CustomTableCell component="th" scope="row">{n.name}</CustomTableCell>
                <CustomTableCell>{n.space}</CustomTableCell>
                <CustomTableCell>{n.date}</CustomTableCell></Button>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </MuiThemeProvider>
    </div>
  );
}
}

const FoldersWrapped = withStyles(styles)(Folders);

export default FoldersWrapped;