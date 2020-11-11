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
  const [open, setOpen] = React.useState(false);
  const handleSimple = event => {
    //console.log(event.target.value.countryCode);
    var countryCode = event.target.value.countryCode;
    // event.target.value = countryCode;

    setSimpleSelect(countryCode);
    var event = new Event("click", { bubbles: true });
    document.getElementById(id).dispatchEvent(event);
    setOpen(false);
  };
  const handleView = event => {
    setOpen(true);
  };

  const handleChange = event => {
    console.log("Event target change"+event.target.value);
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
            value={simpleSelect}
            onClick={handleView}
            open={false}
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
              {item.countryCode} ({item.dialCode})
              {/* {item.name} ({item.dialCode}) */}
            </MenuItem>
            )}
          )}
            
          </Select>
          </FormControl>
          <FormControl fullWidth className={classes.select1}>
          <Select
            MenuProps={{
              className: classes.selectMenu
            }}
            classes={{
              select: classes.select
            }}
            open={open}
            value={simpleSelect}
            onChange={handleSimple}
            inputProps={{
              name: "simpleSelect",
              id: "hiddenItem"
            }}
          >

          {list.map((item) => { return(
              <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              key={item.countryCode}
              value={item}
            >
              {/* {item.countryCode} ({item.dialCode}) */}
              {item.name} ({item.dialCode})
            </MenuItem>
            )}
          )}
            
          </Select>
        </FormControl>
    </div>
        
  );
}