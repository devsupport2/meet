/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../Assets/jss/vatchit/components/headerLinksStyle.js";
import jwtDecode from 'jwt-decode';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  var signInStatus="";
  var profileImage="";
  if (localStorage.getItem("token") == null)
{
    signInStatus = false;
    console.log("User Is NotAuthenticated");
}else{
    const jwtPayload = jwtDecode(localStorage.getItem("token"));
        signInStatus = true;
        console.log("User Is Authenticated");
        profileImage = jwtPayload.context.user.avatar;
}

const signOut = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#Requestdemo"
          color="transparent"
          className={classes.navLink}
        >
           Request A Demo
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#Requestdemo"
          color="transparent"
          className={classes.navLink}
        >
           Support
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Links"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <a
              href="#Usagesection"
              className={classes.dropdownLink}
            >
              Solutions
            </a>,
            <a
            href="/Schedule"
            className={classes.dropdownLink}
          >
            Schedule a meeting
          </a>,
          <a
          href="/Schedule"
          className={classes.dropdownLink}
        >
          Join a meeting
        </a>
          ]}
        />
      </ListItem>
      {
        signInStatus ? 
        <ListItem className={classes.listItem}>
          <CustomDropdown
            left
            noLiPadding
            caret={false}
            buttonText={
              <img
                src={profileImage}
                className={classes.img}
                alt="profile"
              />
            }
            buttonProps={{
              className:
                classes.navLink + " " + classes.imageDropdownButton,
              color: "transparent"
            }}
            dropdownList={[
              <a
                onClick={signOut}
                className={classes.dropdownLink}
              >
                Sign out
              </a>,
              <a
              href="#"
              className={classes.dropdownLink}
            >
              Profile
            </a>,
            <a
            href="#"
            className={classes.dropdownLink}
          >
            My Schedules
          </a>
            ]}
          />
      </ListItem>
         : 
        <ListItem className={classes.listItem}>
         <Button
           href="/Login"
           className={classes.registerNavLink}
          //  onClick={e => e.preventDefault()}
           color="rose"
           round
         > 
           Login
         </Button>
       </ListItem>

      }

    </List>
  );
}
