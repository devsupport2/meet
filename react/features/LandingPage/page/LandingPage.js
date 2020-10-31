import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import GridContainer from "./Components/Grid/GridContainer.js";
import GridItem from "./Components/Grid/GridItem.js";
import Button from "./Components/CustomButtons/Button.js";
import HeaderLinks from "./Components/Header/HeaderLinks.js";
import Parallax from "./Components/Parallax/Parallax.js";

import JoinPopover from "./Components/JoinPopover/JoinPopover.js";

import styles from "./Assets/jss/vatchit/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/AppPromo.js";
import UsageSection from "./Sections/UsageSection";
import WorkSection from "./Sections/WorkSection.js";

const logo = "/images/img/Logo-VatChit.png";
const landingBG = "/images/img/landing-bg.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

 function LandingPageCom(props) {
  const classes = useStyles();
  const { ...rest } = props;
  //document.body.style.backgroundColor = "#d9d9d9";
  document.body.style.backgroundColor = "#f5f5f5";
  document.body.style.overflow = "auto";
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
      <Parallax image={landingBG}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Secure &amp; fully featured <span className={classes.title1}> video conferencing </span></h1>
              <h4 className={classes.subtitle}>
              Go ahead, video chat with the whole team. In fact, invite everyone you know. VatChit is a fully encrypted video conferencing solution that you can use all day, every day, anytime.
              </h4>
              <br />
              <JoinPopover />
              {/* <Button
                className={classes.startMeetingButton}
                size="lg"
                href="#"
                rel="noopener noreferrer"
                round
              >
                <i className="fas fa-play" /> &nbsp;
                Start a new Meeting
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <UsageSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default class LandingPage extends Component {
  render() {
    return (
      <LandingPageCom />
    );
  }
}
