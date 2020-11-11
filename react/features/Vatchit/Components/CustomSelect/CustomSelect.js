import React from 'react';
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// core components

import styles from "../../Assets/jss/vatchit/customSelectStyle.js";

const useStyles = makeStyles(styles);

export default function CustomSelect(props){
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    list,
    value
  } = props;
  
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [opened, setOpened] = React.useState(false);
  
  const handleView = event => {
    setOpened(true);
  };


  const classes = useStyles();
  return (
    <div>
      <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel
            htmlFor="simple-select"
            className={classes.selectLabel}
          >
            Country
          </InputLabel>
          <Select
            MenuProps={{
              className: classes.selectMenu
            }}
            classes={{
              select: classes.select
            }}
            value={value}
            //onChange={handleSimple}
            onClick={handleView}
            id={id}
            {...inputProps}
          >

          {list.map((item) => { return(
              <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              key={item.countryCode}
              value={item.countryCode}
            >
              {/* {item.countryCode} ({item.dialCode}) */}
              {/* {item.name} ({item.dialCode}) */}
              {opened ? 
              (item.countryCode+" ("+item.dialCode+")") : 
              (item.name+" ("+item.dialCode+")")
              }
              
            </MenuItem>
            )}
          )}
            
          </Select>
          </FormControl>
    </div>
        
  );
}