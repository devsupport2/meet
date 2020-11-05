import { container, title } from "../../vatchit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    minHeight: "32px",
    color: "#9FD550",
    textDecoration: "none",
    fontFamily: '"Roboto","Helvetica","Arial","sans-serif"',
    fontSize: "54px",
    lineHeight: "54px",
  },
  title1: {
    color: "#0EDFF7",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    color: "#545454",
    fontWeight: "200"
  },
  startMeetingButton: {
    backgroundColor: "#0EDFF7"
  },
  startMeetingButton2: {
    backgroundColor: "#9FD550"
  },
  getMeetingId:{
    paddingLeft:"10%"
  },
  CreateButton: {
    backgroundColor: "#0EDFF7",
    marginTop: "12%"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default landingPageStyle;
