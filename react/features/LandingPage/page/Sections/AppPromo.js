import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../Components/Grid/GridContainer.js";
import GridItem from "../Components/Grid/GridItem.js";
import Button from "../Components/CustomButtons/Button.js";
import Card from "../Components/Card/Card.js";
import CardBody from "../Components/Card/CardBody.js";
import CardFooter from "../Components/Card/CardFooter.js";

import styles from "../Assets/jss/vatchit/views/landingPageSections/appPromoStyle.js";

const appPromo = "/images/img/AppPromo.png";
const appPromo2 = "/images/img/AppPromo2.png";
const playStore = "/images/img/play-store.png";
const appStore = "/images/img/app-store.png";

const useStyles = makeStyles(styles);

export default function AppPromoSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.appPromoImage,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our App</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <img src={appPromo}
                onMouseOver={e => (e.currentTarget.src = appPromo2)} 
                onMouseOut={e => (e.currentTarget.src = appPromo)}
                alt="..." className={imageClasses}/>
              <CardFooter className={classes.justifyCenter}>
                
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <CardBody>
              <h3 className={classes.titles1}>Now available <span className={classes.titles2}>on Google Play and Apple App Store</span></h3>
                <p className={classes.description}>
                  Now no need to rush to your home or office to attend meetings just download the Vatchit app and attend your meetings on the go
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <GridItem xs={12} sm={12} md={6}>
                <Button
                  justIcon
                  color="transparent"
                >
                  <img src={playStore} className={classes.StoreImages}/>
                </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <Button
                  justIcon
                  color="transparent"
                >
                   <img src={appStore} className={classes.StoreImages}/>
                </Button>
                </GridItem>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
