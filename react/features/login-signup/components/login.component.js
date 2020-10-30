import React from 'react';
import { Component } from 'react';
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

import AuthService from "../auth.service";

import styles from "../../Vatchit/Assets/jss/vatchit/views/loginPage.js";

const  logo = "/images/img/Logo-VatChit.png";
const image2 = "/images/img/image-2.png";
const image1 = "/images/img/image-1.png";

const useStyles = makeStyles(styles);
//const bg = "/images/img/background2.png";


function LoginPage(props) {
var ct = props.ctr;
  if (localStorage.getItem("token") != null)
        {
            window.location.href="/";
        }
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  document.title = "Vatchit | Login";
  document.body.style.backgroundColor = "#dafbff";
  document.body.style.overflow = "auto";
  return (
    <div>
        {!ct.state.username && (<div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={ct.validateLogin}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                  <img src={logo}/>
                  </CardHeader>
                  <CardBody>
                  <h3 className={classes.title}>Login</h3>
                    <CustomInput
                      labelText="Email or Phone Number"
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange: ct.onChangeUsername,
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
		        type="submit"
		        fullWidth
		        variant="contained"
		        color="primary"
		        className={classes.submit}
		      >
		        Continue
		      </Button>
        </CardFooter>
                   
                  <Link href="/Register" className={classes.footerText}>
                        {"Don't have an account? Signup"}
                  </Link>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        )}

        {ct.state.username && (
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={ct.handleLogin}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                  <img src={logo}/>
                  </CardHeader>
                  <CardBody>
                  <h3 className={classes.title}>{ct.state.username}</h3>
                  <CustomInput
                      labelText="Enter Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: ct.onChangePassword,
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutlinedIcon/>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                    <Button
		        type="submit"
		        fullWidth
		        variant="contained"
		        color="primary"
		        className={classes.submit}
		      >
		        Login
		      </Button>
                  <h5 className={classes.title}>---------- OR ----------</h5>
          <Button
		        fullWidth
		        variant="contained"
		        color="secondary"
		        className={classes.submit}
		      >
		        Login Using OTP
		      </Button>
          <div className={classes.title}>
            <a className={classes.title} href="#">Forgot password</a> | <a className={classes.title} href="/Login">Change user</a>
          </div>
                  </CardBody>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        )}

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

  export default class Login extends Component {

    constructor(props) {
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
      this.validateLogin = this.validateLogin.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
  
      this.state = {
        email: "",
        password: "",
        loading: false,
        message: ""
      };
    }
  
    onChangeUsername(e) {
      console.log("Email Changed");
      this.setState({
        email: e.target.value
      });
    }
  
    onChangePassword(e) {
      console.log("Password Changed");
      this.setState({
        password: e.target.value
      });
    }
  
    validateLogin(e) {
      e.preventDefault();
  
      this.setState({
        message: "",
        username:"",
        successful: false
      });

        AuthService.validateLogin(this.state.email).then(
          response => {
            this.setState({
              username: response.data.username
            });
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

    handleLogin(e) {
      e.preventDefault();
  
      this.setState({
        message: "",
        loading: true
      });

        AuthService.login(this.state.email, this.state.password).then(
          () => {
            window.location.href="/";
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            this.setState({
              loading: false,
              message: resMessage
            });
          }
        );
    }

    render() {
      return (
        <LoginPage ctr={this}/>
      );
    }
  }