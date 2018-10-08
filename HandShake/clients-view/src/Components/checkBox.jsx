import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import StarBorder from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star'


const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
};

class CheckboxLabels extends React.Component {
  state = {
    checked: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox icon={<StarBorder />} checkedIcon={<StarIcon color="primary" />} value="checked" />
          }
        />
      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxLabels);