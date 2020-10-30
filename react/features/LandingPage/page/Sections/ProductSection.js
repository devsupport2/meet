import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../Components/Grid/GridContainer.js";
import GridItem from "../Components/Grid/GridItem.js";
import InfoArea from "../Components/InfoArea/InfoArea.js";

import styles from "../Assets/jss/vatchit/views/landingPageSections/productStyle.js";

const Exhibition = "/images/img/Exhibitions.png";
const ConferenceRooms = "/images/img/Conference-Rooms.png";
const videoWebinar = "/images/img/Video-Webinar.png";
const meetings = "/images/img/Meetings.png";


const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            Vatchit can be used with various number of things as it brings your people closer to you. But some of the main features are as follows.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Meetings"
              description="Host a meeting or join a meeting with a video to make it easy."
              icon={meetings}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Video Webinar"
              description="It's your business or social service. Share your knowledge through video."
              icon={videoWebinar}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Conference Rooms"
              description="May be it be a meeting of your business, business group or friends."
              icon={ConferenceRooms}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Exhibitions"
              description="Exhibit your product and services just like what you used to do till now on ground."
              icon={Exhibition}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
