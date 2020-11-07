import React from 'react';
import { Component, useRef } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from "@material-ui/core/styles";

import Link from '@material-ui/core/Link';
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from '@material-ui/core/Divider';
// @material-ui/icons
import Share from "@material-ui/icons/Share";

import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// core components
import GridContainer from "../../Vatchit/Components/Grid/GridContainer.js";
import GridItem from "../../Vatchit/Components/Grid/GridItem.js";
import Button from "../../Vatchit/Components/CustomButtons/Button.js";
import Card from "../../Vatchit/Components/Card/Card.js";
import CardBody from "../../Vatchit/Components/Card/CardBody.js";
import CardHeader from "../../Vatchit/Components/Card/CardHeader.js";
import CardFooter from "../../Vatchit/Components/Card/CardFooter.js";
import CustomInput from "../../Vatchit/Components/CustomInput/CustomInput.js";
import Snackbar from "../../Vatchit/Components/Snackbar/SnackbarContent.js";

import Header from "../../Vatchit/Components/Header/Header.js";
import HeaderLinks from "../../Vatchit/Components/Header/HeaderLinks.js";

import 'date-fns';
import {format} from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import ScheduleService from "../schedule.service";

import styles from "../../Vatchit/Assets/jss/vatchit/views/schedulePage.js";

const  logo = "/images/img/Logo-VatChit.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
//const bg = "/images/img/background2.png";


function SchedulePage(props) {
var ct = props.ctr;
  if (localStorage.getItem("token") == null)
        {
            window.location.href="/Login";
        }
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  document.title = "Vatchit | Schedule";
  document.body.style.backgroundColor = "#f5f5f5";
  document.body.style.overflow = "auto";
  //ct.refereshScheduleList();
  const textAreaRef = useRef(null);

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={logo}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={ct.handleScheduling}>
                  <CardBody>
                  <h1 className={classes.title}>Schedule</h1>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={6}>
                        <Grid item xs={12}>
                          <CustomInput
                            labelText="Schedule Title"
                            id="first"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "text",
                              onChange: ct.onChangetopic,
                              autoComplete: "off"
                            }}
                          />
                          </Grid>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid item xs={12}>
                              <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Meeting Date"
                                format="dd/MM/yyyy"
                              // inputVariant="outlined"
                              className= {classes.DandT}
                                value={ct.selectedDate}
                                onChange={ct.setDateAndTime}
                                KeyboardButtonProps={{
                                  'aria-label': 'change date',
                                }}
                                InputLabelProps={{
                                  className: classes.DandT,
                              }}
                              />
                              </Grid>
                              <Grid item xs={12}>
                              <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Meeting Time"
                                //inputVariant="outlined"
                                value={ct.selectedDate}
                                onChange={ct.setDateAndTime}
                                className= {classes.DandT}
                                KeyboardButtonProps={{
                                  'aria-label': 'change time',
                                }}
                                InputLabelProps={{
                                  className: classes.DandT,
                              }}
                              />
                            </Grid>
                          </MuiPickersUtilsProvider>
                          <Grid item xs={12}>
                          <CustomInput
                            labelText="Meeting Password"
                            id="Second"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "text",
                              onChange: ct.onChangePassword,
                              autoComplete: "off"
                            }}
                          />
                          </Grid>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                            >
                              Create new Schedule
                            </Button>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6} style={{maxHeight: 350, overflow: 'auto'}}>
                            {ct.list.map((item) => { return(
                              <List className={classes.root} key={item._id}>
                                <ListItem>
                                  <ListItemText primary={item.meeting_title} secondary={format(new Date(item.meeting_dateandtime),"E, MMM dd yyyy HH:mm '"+Intl.DateTimeFormat().resolvedOptions().timeZone+"'")} />
                                  <ListItemAvatar onClick={() => ct.copyToClipboard(item)}>
                                    <Avatar>
                                      <Share />
                                    </Avatar>
                                  </ListItemAvatar>
                                </ListItem>
                              <Divider />
                              </List>
                            )}
                            )}
                          </GridItem>
                        </GridContainer>
                  </CardBody>
                <div className={classes.footerHelper}>
                  <Link href="/Login" className={classes.title}>
                        {"Already have an account? Login"}
                  </Link>
                </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        {ct.state.message && (
            <Snackbar

            open={ct.state.open}
            message={
              <span>
                {ct.state.message}
              </span>
            }
            color={
              ct.state.successful
                ? "success"
                : "danger"
            }
            icon={
              ct.state.successful
                ? Check
                : Warning
            }
          />
          )}
    </div>
  );
}

  export default class Schedule extends Component {

    constructor(props) {
      super(props);
      this.handleScheduling = this.handleScheduling.bind(this);
      this.onChangetopic = this.onChangetopic.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.setDateAndTime = this.setDateAndTime.bind(this);
      this.copyToCopy = "";

      this.refereshScheduleList();
      this.list = [];
      this.state = {
        TopicName: "",
        password: "",
        DateAndTime: this.selectedDate,
        successful: false,
        message: ""
      };
    }

    componentDidMount() {
      this.refereshScheduleList();
    }
  
    setDateAndTime(e){
      console.log("x:--"+JSON.stringify(e));
      this.selectedDate = e;
      this.setState({
          DateAndTime: this.selectedDate
      });
    }

  onChangetopic(e) {
    var input = e.target.value;
    var output = input.replace(/\w+/g, function(txt) {
      // uppercase first letter and add rest unchanged
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    }).replace(/\s/g, '');
      this.setState({
          TopicName: output
      });
    }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  refereshScheduleList(){
    console.log("RefereshList");
    ScheduleService.getUsersSchedule().then(
      response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
          //this.list = JSON.stringify(response.data.data);
          this.list = response.data.data;
          console.log("List="+this.list);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
  }
  
  copyToClipboard(item){
    console.log(item.meeting_dateandtime);
    this.copyToCopy = "You are being Invited for "+item.meeting_title+"\r\n \r\nTime: "+format(new Date(item.meeting_dateandtime),"E, MMM dd yyyy HH:mm '"+Intl.DateTimeFormat().resolvedOptions().timeZone+"'")+"\r\n \r\nMeeting Link: https://meet.vatchit.in/"+item.meeting_title+"?Scheduled="+item._id+"\r\nMeeting Password: "+item.meeting_pass;
    var tempInput = document.createElement("textarea");
    tempInput.value = this.copyToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    this.setState({
      successful: true,
      message: "Invitation Copied Successfully"
    });
  }

  handleScheduling(e) {
    e.preventDefault();
    //this.form.validateAll();
    
    this.setState({
      message: "",
      successful: false
    });

    ScheduleService.schedule(this.state).then(
      response => {
        this.copyToCopy = "You are being Invited for "+this.state.TopicName+"\r\n \r\nTime: "+format(this.state.DateAndTime,"E, MMM dd yyyy HH:mm 'IST'")+"\r\n \r\nMeeting Link: https://meet.vatchit.in/"+this.state.TopicName+"?Scheduled="+response.data.schedule_id+"\r\nMeeting Password: "+this.state.password;
        var tempInput = document.createElement("textarea");
        tempInput.value = this.copyToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
          this.setState({
            message: response.data.message,
            successful: true
          });
          setTimeout(function(){ window.location.href="/Schedule"; }, 5000);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }

    render() {
      return (
        <SchedulePage ctr={this}/>
      );
    }
  }