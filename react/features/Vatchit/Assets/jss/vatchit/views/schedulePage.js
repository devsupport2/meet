import { container } from "../../vatchit.js";


const schedulePageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF",
    paddingBottom: "200px"
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  },

  image2: {
    position: "absolute",
    bottom: "0px",
    right: "-108px",
    zIndex: "-2"
  },

  image1: {
    position: "absolute",
    bottom: "0px",
    left: "-134px",
    zIndex: "99",
    width: "auto",
    height: "70%"
  },

  title: {
    color: "#495057",
    textAlign: "center"
  },

  footerHelper: {
    position: "absolute",
    display: "block",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
    padding: "20px 0px 0px 0px"
  },

  DandT: {
    color: '#aaaaaa',
    width: '100%',
    "& .MuiInput-underline:before":{
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "& .MuiInput-underline:after":{
      borderColor: "#0EDFF7 !important",
      borderWidth: "2px !important"
    },
    "& .MuiFormLabel-root.Mui-focused":{
      color: '#aaaaaa',
    }
  },
};

export default schedulePageStyle;
