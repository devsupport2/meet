import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from "../../Components/CustomButtons/Button.js";
import CustomInput from "../../Components/CustomInput/CustomInput.js";
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";

import styles from "../../Assets/jss/vatchit/views/landingPage.js";

const useStyles = makeStyles(styles);

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const CreateJoinFunc = () => {
    if (localStorage.getItem("token") == null)
    {
        window.location.href = "/";
    }else
    {
        var meet = document.getElementById("MeetingId").value;
        var stripped = meet.replace(/\s+/g, '');
        window.location.href = "/"+stripped;
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
                aria-describedby={id}
                variant="contained"
                className={classes.startMeetingButton}
                size="lg"
                rel="noopener noreferrer"
                onClick={handleClick}
                round
              >
                <i className="fas fa-play" /> &nbsp;
                Start Meeting
              </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <div className={classes.JoinText}>
        <GridContainer>
        <GridItem xs={1} sm={1} md={1}></GridItem>
        <GridItem xs={5} sm={5} md={5}>
            <CustomInput
                  className={classes.getMeetingId}
                  labelText="Meeting ID"
                  id="MeetingId"
                />
        </GridItem>
        <GridItem xs={6} sm={6} md={6}>
                <Button
                variant="contained"
                className={classes.CreateButton}
                size="md"
                onClick={CreateJoinFunc}
              >
                Create / Join
              </Button>
        </GridItem>
         </GridContainer>
        </div>
      </Popover>
    </div>
  );
}
