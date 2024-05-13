import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import bannerImage from "../styles/banner.png"; // 배너 이미지 import

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd",
  },
  bannerContainer: {
    display: "flex",
    alignItems: "center",
  },
  bannerImage: {
    height: 60, // 이미지 높이 조절 (필요에 따라 수정)
    margin: 10,
    marginRight: theme.spacing(2),
    cursor: "pointer", // 마우스 커서를 포인터로 변경하여 클릭 가능하게 함
  },
  title: {
    color: "#333",
  },
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {/* 배너 이미지와 텍스트를 감싸는 컨테이너 */}
          <Link to="/App" className={classes.link} style={{ textDecoration: "none" }}>
            <div className={classes.bannerContainer}>
              {/* 배너 이미지 */}
              <img src={bannerImage} alt="banner" className={classes.bannerImage} />
              
              {/* LDK 텍스트 */}
              <Typography variant="h6" className={classes.title}>
                LDK
              </Typography>
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
