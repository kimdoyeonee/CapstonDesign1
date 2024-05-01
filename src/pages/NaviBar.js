import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
  },
  title: {
    flexGrow: 1,
    color: "#333",
  },
  button: {
    color: "#333",
  },
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link to="/home" className={classes.link}>
            LDK
            </Link>
          </Typography>
          <Link to="/login" className={classes.link}>
            <Button color="inherit" className={classes.button}>
              로그인
            </Button>
          </Link>
          <Link to="/signup" className={classes.link}>
            <Button color="inherit" className={classes.button}>
              회원가입
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
