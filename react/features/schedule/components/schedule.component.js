import React from 'react';
import { Component, useRef } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from "@material-ui/core/styles";

import Link from '@material-ui/core/Link';
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
import Grid from '@material-ui/core/Grid';
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

  function copyToClipboard(e) {
    textAreaRef.current.select();
    console.log("Copied to clipboard");
    document.execCommand('copy');
  };

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
                        
                      </GridItem>
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
                            <Grid item xs={6}>
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
                              <Grid item xs={6}>
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
          />,
          <textarea ref={textAreaRef} id="myInput" style={{display:"none"}} value={ct.copyToCopy}/>
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
      this.setState({
          TopicName: e.target.value
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
          this.list = JSON.stringify(response.data.data);
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
  
  handleScheduling(e) {
    e.preventDefault();
    //this.form.validateAll();
    this.copyToCopy = "You are being Invited by"+this.state.TopicName+" for "+this.state.TopicName+"\r\n \r\nTime: "+format(this.state.DateAndTime,"E, MMM dd yyyy HH:mm 'IST'")+"\r\n \r\nMeeting Link: https://meet.vatchit.in/"+this.state.TopicName+"\r\nMeeting Password: "+this.state.password;
    
    this.setState({
      message: "",
      successful: false
    });

    ScheduleService.schedule(this.state).then(
      response => {
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