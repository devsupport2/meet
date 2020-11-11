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
import CustomSelect from "../../Vatchit/Components/CustomSelect/CustomSelect.js";
import Snackbar from "../../Vatchit/Components/Snackbar/SnackbarContent.js";

import AuthService from "../auth.service";

import styles from "../../Vatchit/Assets/jss/vatchit/views/loginPage.js";

const  logo = "/images/img/Logo-VatChit.png";
const image2 = "/images/img/image-2.png";
const image1 = "/images/img/image-1.png";

const useStyles = makeStyles(styles);
//const bg = "/images/img/background2.png";


function RegisterPage(props) {
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
  document.title = "Vatchit | Register";
  document.body.style.backgroundColor = "#f5f5f5";
  document.body.style.overflow = "auto";
  return (
    <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
              <img src={image2} className={classes.image2}/>
              <img src={image1} className={classes.image1}/>
                <form className={classes.form} onSubmit={ct.handleRegister}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                  <img src={logo}/>
                  </CardHeader>
                  <CardBody>
                  <h3 className={classes.title}>Register</h3>
                  <GridContainer justify="center">
                      <GridItem xs={6} sm={6} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange: ct.onChangeFirstName,
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <People className={classes.inputIconsColor} />
                        //   </InputAdornment>
                        // )
                      }}
                    />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        onChange: ct.onChangeLastName,
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: ct.onChangeEmail,
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <GridContainer justify="center">
                      <GridItem xs={4} sm={4} md={4}>
                        <CustomSelect list={ct.countries} id="country" value={ct.state.country}
                          inputProps={{ 
                            onChange: ct.onChangeCountry,
                          }}
                        />
                        </GridItem>
                        <GridItem xs={8} sm={8} md={8}>
                          <CustomInput
                            labelText="Phone..."
                            id="phone"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: ct.onChangePhone,
                              type: "text",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Phone className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                        </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Password"
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
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
		        type="submit"
		        fullWidth
		        variant="contained"
		        color="primary"
		        className={classes.submit}
		      >
		        Sign Up
		      </Button>
        </CardFooter>
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

  export default class Register extends Component {

    constructor(props) {
      super(props);

      this.handleRegister = this.handleRegister.bind(this);
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeCountry = this.onChangeCountry.bind(this);
  
      this.countries = [];
      this.state = {
        userName: "",
        phone: "",
        email: "",
        password: "",
        country: "",
        successful: false,
        message: ""
      };
    }

    componentDidMount() {
      AuthService.getCountries().then(
        response => {
          if(response.data.success){
            this.countries = response.data.countries;
          }
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
  
    onChangeCountry(e){
      console.log("country changed");
      this.setState({
        country: e.target.value
      });
    }

    onChangePhone(e) {
      console.log("phone changed");
      this.setState({
        phone: e.target.value
      });
    }

    onChangeFirstName(e) {
      console.log("username changed");
        this.setState({
          userName: e.target.value
        });
      }

    onChangeLastName(e) {
      console.log("username changed");
        this.setState({
          userName: this.state.userName+" "+e.target.value
        });
      }
  
    onChangeEmail(e) {
      console.log("email changed");
      this.setState({
        email: e.target.value
      });
    }
  
    onChangePassword(e) {
      console.log("password changed");
      this.setState({
        password: e.target.value
      });
    }
  
    handleRegister(e) {
      console.log(document.getElementById("country").innerHTML);
      this.setState({
      country: document.getElementById("country").innerHTML
      });
      e.preventDefault();
      console.log("handle register called");
      this.setState({
        message: "",
        successful: false
      });
  
      //this.form.validateAll();
        console.log(JSON.stringify(this.state));
        AuthService.register(
          this.state.userName,
          this.state.phone,
          this.state.email,
          this.state.password,
          this.state.country
        ).then(
          response => {
            this.setState({
              message: response.data.message,
              successful: response.data.success
            });
            setTimeout(function(){ window.location.href="/Login"; }, 3000);
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
        <RegisterPage ctr={this}/>
      );
    }
  }