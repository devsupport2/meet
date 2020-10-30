import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../Components/Grid/GridContainer.js";
import GridItem from "../Components/Grid/GridItem.js";
import Card from "../Components/Card/Card.js";
import CardFooter from "../Components/Card/CardFooter.js";

import styles from "../Assets/jss/vatchit/views/landingPageSections/appPromoStyle.js";

const usage = "/images/img/Usage.png";
const about1 = "/images/img/about-icon-01.png";
const about2 = "/images/img/about-icon-02.png";
const about3 = "/images/img/about-icon-03.png";
const about4 = "/images/img/about-icon-04.png";

const useStyles = makeStyles(styles);

export default function UsageSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgFluid
  );
  return (
    <div id="Usagesection" className={classes.section}>
      <h2 className={classes.title}>Where vatchit can be used ?</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
          <Card plain>
            <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                    <img src={about1} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                    <h4 className={classes.cardTitle}>
                        BUSINESSES
                    </h4>
                    <p className={classes.description}>
                        Organizations &amp; Individuals to hold meetings, conferences, exhibitions and more..
                    </p>
                </GridItem>
            </GridContainer>
         </Card>
         <Card plain>
            <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                    <img src={about2} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                    <h4 className={classes.cardTitle}>
                    COACHING CLASEES
                    </h4>
                    <p className={classes.description}>
                        conduct online classes &amp; exams
                    </p>
                </GridItem>
            </GridContainer>
         </Card>
         <Card plain>
            <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                    <img src={about3} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                    <h4 className={classes.cardTitle}>
                        TRAINERS
                    </h4>
                    <p className={classes.description}>
                    Conduct onlien training - Yoga, Meditation &amp; other
                    </p>
                </GridItem>
            </GridContainer>
         </Card>
         <Card plain>
            <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                    <img src={about4} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                    <h4 className={classes.cardTitle}>
                        SOCIALIZING
                    </h4>
                    <p className={classes.description}>
                        To hold Family Reunions, Fellowships &amp; more.
                    </p>
                </GridItem>
            </GridContainer>
         </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <img src={usage} alt="..." className={imageClasses} /> 
              <CardFooter className={classes.justifyCenter}>
                
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
